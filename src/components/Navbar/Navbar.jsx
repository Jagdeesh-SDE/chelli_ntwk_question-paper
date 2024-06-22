import Drawer from "./Drawer/Drawer";

function Navbar() {
  return (
    <div className="navbar bg-base-100 w-[100vw] mb-10 sticky top-0 z-10">
      <div className="flex-none">
        <Drawer />
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-sm">Networking Questions</a>
      </div>
      <div className="flex-none text-xs">Made with ❤️ for my Sister</div>
    </div>
  );
}
export default Navbar;
