

const Card = ({children}) => {
    return ( 
        <>
            <div className="border border-dotted p-2">
                {children}
            </div>
        </>
     );
}
 
export default Card;