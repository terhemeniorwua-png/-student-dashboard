

const Button = ({value, functionality}) => {
    return ( 
        
        <>
            <button onClick={(e)=>{functionality(e)}} className="border text-[12px] rounded-sm bg-blue-50 px-2">
                {value}
            </button>
        </>
     );
}
 
export default Button;