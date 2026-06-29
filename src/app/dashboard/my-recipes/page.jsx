
export const metadata = {
  title: "My Recipe | CookWorld",
};

import MyRecipesTable from "@/components/DashboardPage/MyRecipes/MyRecipesTable";
import { auth } from "@/lib/auth";
import { getMyRecipes } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const MyRecipesPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;

  if (!session) {
    redirect("/login");
  }

  const myRecipeData = await getMyRecipes(email);

  return (
    <section className="pt-20">
      <MyRecipesTable recipes={myRecipeData} />
    </section>
  );
};

export default MyRecipesPage;
