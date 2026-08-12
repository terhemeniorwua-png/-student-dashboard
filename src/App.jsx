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


const [inactiveStudent, setInactiveStudent] = useState(students)

    const handleInactive =()=>{
       
        let inactive = students.filter(std => std.active === false)
       setInactiveStudent(inactive)
       
    }

     const handleActive =()=>{
       
        let activeStudent = students.filter(std => std.active === true)
       setInactiveStudent(activeStudent)
       
    }


    const handleAllStudent =()=>{
       
       setInactiveStudent(students)
       
    }


     const handleSearch = e =>{
        let input = e.target.value.toLowerCase()
        let studentSearched = students.filter(student =>{
          let searchedStudent = student.name.toLowerCase()
          if(searchedStudent.includes(input)){
            return student
          }
     })
     setInactiveStudent(studentSearched)
    }



  return (
    <>
     
    <Header all={handleAllStudent} active={handleActive} inactive={handleInactive}/>

    <FilterButton functionality={(e)=>{handleSearch(e)}}/>

    <StudentList student={ inactiveStudent }/>
    
    </>
  )
}

export default App
