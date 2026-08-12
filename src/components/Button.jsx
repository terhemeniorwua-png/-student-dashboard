

const Button = ({value, functionality}) => {
    return ( 
        
        <>
            <button onClick={functionality} className="border text-[12px] rounded-sm bg-blue-50 px-5 py-1">
                {value}
            </button>
        </>
     );
}
 
export default Button;