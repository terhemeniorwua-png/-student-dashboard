import { FaCircle, FaUser } from "react-icons/fa";
import { FaPlaneCircleCheck, FaPlaneCircleExclamation } from "react-icons/fa6";
import Button from "./Button";
import { useState } from "react";
import StudentCard from "./StudentCard";


const ClassList = (props) => {

    const [show, setShow] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

     const handleClicked = id =>{
                    
       props.student.map(std =>{
            id === std.id && setSelectedId(std)
                    setShow(true)
                    
        })

                   
                    
                }

                const handleClose = ()=>{
                     setShow(false)
                   
                }
if(!show){

    return ( 
        <>
           <div className="grid grid-cols-4 px-[5%] pt-20">
            {
            props.student.map(student =>{

               

                return(
                    <div className="border p-2 space-y-5 mb-5 ml-10" key={student.id}>
                     <div className="flex items-center gap-1 ">
                        <FaUser className="text-blue-500"/>  
                        <p>{student.name}</p>
                    </div>
                    <p>Courses: {student.courses}</p>
                    <p className="flex items-center gap-2">Statues: 
                        <FaCircle className={student.active === true?
                         'text-green-500 Active' : 'text-red-500'}/> 
                         {student.active === true? ' Active' : 'Inactive'}</p>
                    <p>{student.course}</p>
                    
                    <Button value='View Details' functionality={()=>handleClicked(student.id)}/>
                    </div>

                )
            })
           } 
           </div>
        </>
     );
    }


else{
    return(<StudentCard studentInfo={selectedId} state={handleClose}/>)
}
}
 
export default ClassList;