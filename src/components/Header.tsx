
function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">EventManagement </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
      </div>

      <div className="navbar-end flex gap-4">
        <a>Log In</a>
        <div className="bg-primary text-primary-content">
          <button className="btn btn-ghost">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;