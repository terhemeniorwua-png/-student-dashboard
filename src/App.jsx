import { useState } from 'react'
import './App.css'
import Card from './components/StudentCard'
import CardStore from './components/StudentList'
import Button from './components/Button'
import Header from './components/Header'
import StudentList from './components/StudentList'
import StudentCard from './components/StudentCard'
import FilterButton from './components/FilterButton'

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


const [displayStudents, setdisplayStudents] = useState(students)

    const handleInactive =()=>{
       
        let inactive = students.filter(std => std.active === false)
       setdisplayStudents(inactive)
       
    }

     const handleActive =()=>{
       
        let activeStudent = students.filter(std => std.active === true)
       setdisplayStudents(activeStudent)
       
    }


    const handleAllStudent =()=>{
       
       setdisplayStudents(students)
       
    }


     const handleSearch = e =>{
        let input = e.target.value.toLowerCase()
        let studentSearched = displayStudents.filter(student =>{
          let searchedStudent = student.name.toLowerCase()
          if(searchedStudent.includes(input)){
            return student
          }
     })
     setdisplayStudents(studentSearched)
    }



  return (
    <>
     
    <Header all={handleAllStudent} active={handleActive} inactive={handleInactive}/>

    <FilterButton functionality={(e)=>{handleSearch(e)}}/>

    <StudentList student={ displayStudents }/>
    
    </>
  )
}

export default App
