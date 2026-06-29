const UserStatusBadge = ({ blocked }) => {
  if (blocked) {
    return (
      <span className="rounded-full bg-red-100 text-red-700 px-4 py-1">
        🚫 Blocked
      </span>
    );
  }

  return (
    <span className="rounded-full bg-green-100 text-green-700 px-2">
      ✔ Active
    </span>
  );
};

export default UserStatusBadge;
