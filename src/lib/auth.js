import { betterAuth} from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  
  session:{
    cookieCache:{
      enabled:true,
      strategy:"jwt",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    }
  },

  plugins: [
    jwt()
  ],

  database: mongodbAdapter(db, {
    client,
  }),

  user: {
    additionalFields: {
      role: {
        type: "string",
        default: "user",
        input: false,
      },

      isPremium: {
        type: "boolean",
        default: false,
        input: false,
      },

      isBlocked: {
        type: "boolean",
        default: false,
        input: false,
      },
    },
  },

  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          return {
            data: {
              ...user,
              role: "user",
              isBlocked: false,
              isPremium: false,
            },
          };
        },
      },
    },
  },
});
