
import UsersTable from "@/components/AdminDashboard/ManageUsers/UsersTable";
import { getAllUsers } from "@/lib/data";

const ManageUsersPage = async () => {
  const users = await getAllUsers();

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
