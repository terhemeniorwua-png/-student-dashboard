import { useState } from "react";
import ClassList from "./StudentList";


const Head = () => {
    return ( 
        <>
            <h1 className="font-black text-3xl text-center pt-5">STUDENT DASHBOARD</h1>
        </>
     );
}

export const Nav = (props) => {
    // console.log(props)
    

    return ( 
            <>
                <nav>
                    <ul className="flex gap-12 pt-5 items-cneter justify-center font-semibold">
                        <li onClick={handleAllStudent}>[ &ensp;  All &ensp;]</li>
                        <li onClick={handleActive}>[ &ensp; Active &ensp;]</li>
                        <li onClick={handleInactive}>[ &ensp; Not Active &ensp; ]</li>
                    </ul>
                
                </nav>
            </>
     );
}
 

const Header = ({statues}) => {
   
    return ( 
        <>
            <Head />
            <Nav students = {statues}/>
        </>
     );
}
 
export default Header;
 
