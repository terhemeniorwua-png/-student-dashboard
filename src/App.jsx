import { useState } from 'react'
import './App.css'
import Card from './components/StudentCard'
import CardStore from './components/StudentList'
import Button from './components/Button'
import Header from './components/Header'
import StudentList from './components/StudentList'
import StudentCard from './components/StudentCard'

function App() {
  // const [count, setCount] = useState(0);

  const students =  [
  {
    id: 1,
    name: "Philip Iorwua",
    course: "Frontend Development",
    courses: 4,
    active: true
  },
  {
    id: 2,
    name: "John Doe",
    course: "Backend Development",
    courses: 2,
    active: false
  },
  {
    id: 3,
    name: "Sarah James",
    course: "UI/UX Design",
    courses: 6,
    active: true
  },
  {
    id: 4,
    name: "David Mark",
    course: "React Development",
    courses: 3,
    active: false
  }
];


const [inactiveStudent, setInactiveStudent] = useState(null)

    const handleInactive =()=>{
       
        let inactive = props.students.filter(std => std.active === false)
         console.log(inactive)
       setInactiveStudent(inactive)
       
    }

     const handleActive =()=>{
       
        let active = props.students.filter(std => std.active === true)
        //  console.log(active)
       setInactiveStudent(active)
       
    }


    const handleAllStudent =()=>{
       
        let active = props.students.filter(std => std.active === true ||  std.active === false)
        //  console.log(active)
       setInactiveStudent(active)
       
    }


  return (
    <>
     
    <Header statues = {students}/>
    <StudentList student={ students }/>
    
    </>
  )
}

export default App
