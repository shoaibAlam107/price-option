import { useState } from "react";
import Link from "../link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
    const routes = [{ id: 1, name: "Home", path: "/home" },
     { id: 2, name: "About", path: "/about" },
      { id: 3, name: "Services", path: "/services" },
       { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Profile", path: "/profile" }
    ];

    const [open ,setOpen] = useState(false)

    return (
        <nav>
           <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
            {
                open=== true ? <RiMenu2Fill  /> : <IoMdClose />
            }
         
           </div>
          <ul className={
            `md:flex duration-1000 absolute md:static
            ${open ? 'top-16' : 'top-52'} bg-yellow-200 shadow-lg`
          }>
          {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            
          </ul>
        </nav>
    );
};

export default NavBar;