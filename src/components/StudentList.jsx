import { FaCircle, FaUser } from "react-icons/fa";
import { FaPlaneCircleCheck, FaPlaneCircleExclamation } from "react-icons/fa6";
import Button from "./Button";
import { useState } from "react";


const ClassList = (props) => {

    const [show, setShow] = useState(false)

     const handleClicked = e =>{
                    let clicked = e.target
                    console.log('clicked', clicked)
                }

                const handleClose = e =>{
                    let clicked = e.target
                    console.log('clicked', clicked)
                }
if(show){

    return ( 
        <>
           {
            props.student.map(student =>{

               

                return(
                    <div className="border w-[15%] p-2 space-y-5 mb-5 ml-10" key={student.id}>
                     <div className="flex items-center gap-1 "> 
                        <p>{student.name}</p>
                    </div>
                    <p>Courses: {student.courses}</p>
                    <p className="flex items-center gap-2">Statues: <FaCircle className={student.active === true? 'text-green-500 Active' : 'text-red-500'}/> {student.active === true? ' Active' : 'Inactive'}</p>
                    <p>{student.course}</p>
                    
                    <Button value='View Details' functionality={(e)=>{handleClicked(e)}}/>
                    </div>

                )
            })
           }
        </>
     );
}


else{

}
}
 
export default ClassList;