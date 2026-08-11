import { FaCircle, FaUser } from "react-icons/fa";
import Button from "./Button";


const StudentCard = (props) => {
        
    return ( 
        <>
        {
          props.student.map(student =>{

               

                return(
                    <div className="border w-[15%] p-2 space-y-5 mb-5 ml-10" key={student.id}>
                     <div>
                        <p>Name: {student.name}</p>
                    </div>
                    <p>Courses enrolled: {student.courses}</p>
                    <p className="flex items-center gap-2">Statues: <FaCircle className={student.active === true? 'text-green-500 Active' : 'text-red-500'}/> {student.active === true? ' Active' : 'Inactive'}</p>
                    <p>{student.course}</p>
                    
                    <Button value='Close' functionality={(e)=>{handleClose(e)}}/>
                    </div>

                )
            })
           }
        </>
     );
}
 
export default StudentCard;