const Navbar = ({ selectedUser, setSelectedUser, users = [] }) => {
  return (
    <nav className="flex justify-between items-center mb-4">
      <div className="text-3xl font-bold">Home Listing</div>
      <select
        className="text-2xl border rounded px-4 py-2"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select user</option>
        {users && users?.map((user) => (
          <option key={user?.id} value={user?.id} >
            {user?.username}
          </option>
        ))}
      </select>
    </nav>
  )
}

export default Navbar