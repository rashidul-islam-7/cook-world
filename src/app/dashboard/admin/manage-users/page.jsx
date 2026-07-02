export const metadata = {
  title: "Manage Users | CookWorld",
};

import UsersTable from "@/components/AdminDashboard/ManageUsers/UsersTable";
import { auth } from "@/lib/auth";
import { getAllUsers } from "@/lib/data";
import { headers } from "next/headers";

const ManageUsersPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const users = await getAllUsers(token);

  return (
    <section className="p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Manage Users
          <span className="ml-2">👥</span>
        </h1>

        <p className="text-gray-500 mt-2">
          Block / Unblock users and manage accounts
        </p>
      </div>

      <UsersTable users={users} />
    </section>
  );
};

export default ManageUsersPage;
