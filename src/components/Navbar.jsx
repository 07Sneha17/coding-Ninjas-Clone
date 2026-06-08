function Navbar() {
  return (
    <nav className="bg-[#111111] text-white flex justify-between items-center px-12 py-5">

      <h1 className="text-3xl font-bold">
        coding<span className="text-gray-400">ninjas</span>
      </h1>

      <div className="flex gap-14 font-medium">
        <button>For working professionals ▼</button>
        <button>For College Students ▼</button>
      </div>

      <button className="bg-orange-500 px-6 py-3 rounded-xl font-semibold">
        Login
      </button>

    </nav>
  );
}

export default Navbar;