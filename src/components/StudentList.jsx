import { FaCircle, FaUser } from "react-icons/fa";
import { FaPlaneCircleCheck, FaPlaneCircleExclamation } from "react-icons/fa6";


const ClassList = (props) => {
    return ( 
        <>
           {
            props.student.map(student =>{
                return(
                    <div>
                     <div className="flex items-center gap-1 space-y-3">
                            <FaUser  className="text-blue-500"/>  
                            <p>{student.name}</p>
                                </div>
                                <p>{student.courses}</p>
                                <p><FaCircle className={student.active === true? 'text-green-500' : 'text-red-500'}/> {student.active}</p>
                                <p>{student.course}</p></div>
                )
            })
           }
        </>
     );
}
 
export default ClassList;