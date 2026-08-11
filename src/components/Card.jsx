

const Card = ({children}) => {
    return ( 
        <>
            <div className='flex justify-between border p-5'>
                {children}
            </div>
        </>
     );
}
 
export default Card;