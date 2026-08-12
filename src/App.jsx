import { useState } from 'react'
import './App.css'
import Card from './components/StudentCard'
import CardStore from './components/StudentList'
import Button from './components/Button'
import Header from './components/Header'
import ClassList from './components/StudentList'
import StudentCard from './components/StudentCard'

function App() {
  // const [count, setCount] = useState(0);

  const students = [
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



  return (
    <>
     
    <Header statues = {students}/>
    <ClassList student={ students }/>
    
    </>
  )
}

export default App
