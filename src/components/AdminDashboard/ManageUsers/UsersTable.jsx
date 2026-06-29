import UserRow from "./UsersRow";

const UsersTable = ({ users }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:text-white shadow">
      <table className="table">
        <thead>
          <tr className=" dark:bg-gray-200">
            <th className="text-center" >User</th>
            <th className="text-center" >Role</th>
            <th className="text-center" >Premium</th>
            <th className="text-center" >Status</th>
            <th className="text-center" >Joined</th>
            <th className="text-center" >Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow key={user._id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
