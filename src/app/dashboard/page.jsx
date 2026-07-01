export const metadata = {
  title: "Dashboard Overview | CookWorld",
};

import DashboardOverview from "@/components/DashboardPage/Overview/DashboardOverview";
import { getMyRecipes } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const {token} = await auth.api.getToken({
    headers: await headers(),
  })

  const user = session?.user;

  const my_recipe_data = await getMyRecipes(user?.email, token);

  return (
    <div>
      <DashboardOverview my_recipe_data={my_recipe_data} user={user} token={token} />
    </div>
  );
};

export default DashboardPage;
