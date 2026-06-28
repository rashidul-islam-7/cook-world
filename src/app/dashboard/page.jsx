import DashboardOverview from "@/components/DashboardPage/Overview/DashboardOverview";
import { getMyRecipes } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userEmail = session?.user?.email;
  const user_isPremium = session?.user?.isPremium;

  const my_recipe_data = await getMyRecipes(userEmail);

  return (
    <div className="pt-20">
      <DashboardOverview my_recipe_data={my_recipe_data} user_isPremium={user_isPremium}  />
    </div>
  );
};

export default DashboardPage;
