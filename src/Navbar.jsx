import iconlogo from "../public/Frame(1).png"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <h1 className="text-[#150B2B] text-[32px] font-bold">Recipe Calories</h1>
        <div className="">
           <ul className="flex gap-6 text-[#150B2BB3] text-[16px]">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Destination</a></li>
            <li><a href="#">Search</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-3xl" />
        <div className="bg-[#0BE58A] rounded-xl">
            <img src={iconlogo}alt="" />
        </div>
        </div>
      </nav>
    );
};

export default Navbar;