import { FaCircle, FaUser } from "react-icons/fa";
import Button from "./Button";


const StudentCard = ({studentInfo, state}) => {
    // console.log(studentInfo)
        
    return ( 
        <>
        {
              
                    <div className="border w-[20%] m-auto p-2 space-y-5 mb-5 mt-20" key={studentInfo.id}>
                     <div>
                        <p>Name: {studentInfo.name}</p>
                    </div>
                    <p>Courses enrolled: {studentInfo.courses}</p>
                    <p className="flex items-center gap-2">Statues: 
                        <FaCircle className={studentInfo.active === true? 'text-green-500 Active' 
                        : 'text-red-500'}/> {studentInfo.active === true? ' Active' 
                        : 'Inactive'}
                        </p>
                    <p>{studentInfo.course}</p>
                    
                    <Button value='Close' functionality={state}/>
                    </div>

              
           }
        </>
     );
}


 
export default StudentCard;