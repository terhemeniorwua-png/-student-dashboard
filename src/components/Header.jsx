import { useState } from "react";
import ClassList from "./StudentList";


const Head = () => {
    return ( 
        <>
            <h1 className="font-black text-3xl text-center pt-5">STUDENT DASHBOARD</h1>
        </>
     );
}

export const Nav = ({all, active, inactive}) => {
 
    

    return ( 
            <>
                <nav>
                    <ul className="flex gap-12 pt-5 items-cneter justify-center font-semibold">
                        <li onClick={all} className="hover:cursor-pointer">[ &ensp;  All &ensp;]</li>
                        <li onClick={active} className="hover:cursor-pointer">[ &ensp; Active &ensp;]</li>
                        <li onClick={inactive} className="hover:cursor-pointer">[ &ensp; Not Active &ensp; ]</li>
                    </ul>
                
                </nav>
            </>
     );
}
 

const Header = ({all, active, inactive}) => {
   
    return ( 
        <>
            <Head />
            <Nav all = {all} active={active} inactive={inactive}/>
        </>
     );
}
 
export default Header;
 
