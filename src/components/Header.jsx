

const Head = () => {
    return ( 
        <>
            <h1 className="font-black text-3xl text-center pt-5">STUDENT DASHBOARD</h1>
        </>
     );
}

const Nav = (props) => {

    const handleInactive =()=>{

    }


    return ( 
            <>
                <nav>
                    <ul className="flex gap-12 pt-5 items-cneter justify-center font-semibold">
                        <li onClick={handleInactive}>[ &ensp;  All &ensp;]</li>
                        <li>[ &ensp; Active &ensp;]</li>
                        <li>[ &ensp; Not Active &ensp; ]</li>
                    </ul>
                </nav>
            </>
     );
}
 

const Header = () => {
    return ( 
        <>
            <Head />
            <Nav />
        </>
     );
}
 
export default Header;
 
