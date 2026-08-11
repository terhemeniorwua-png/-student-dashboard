# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.










React Task: Student Dashboard

Build a Student Dashboard for a small learning platform.

Your app should display a list of students and allow the user to view information about each student.

What you must practice
Components
Props
children
Parent → Child communication
Props patterns
Component design
Conditional rendering
Rendering lists
JavaScript inside JSX
🎯 What the final UI should roughly do

You should have something like:

------------------------------------------------
              STUDENT DASHBOARD
------------------------------------------------

[ All Students ] [ Active ] [ Inactive ]

------------------------------------------------

Student Cards

┌─────────────────────────┐
│ 👤 Philip Iorwua        │
│ Frontend Development    │
│                         │
│ Status: 🟢 Active       │
│                         │
│ Courses: 4              │
│                         │
│ [ View Profile ]        │
└─────────────────────────┘

┌─────────────────────────┐
│ 👤 John Doe             │
│ Backend Development     │
│                         │
│ Status: 🔴 Inactive     │
│                         │
│ Courses: 2              │
│                         │
│ [ View Profile ]        │
└─────────────────────────┘
1. Create your components

Don't put everything inside App.jsx.

Create at least these components:

App
 ├── Header
 ├── FilterButtons
 ├── StudentList
 │    └── StudentCard
 │         ├── StudentStatus
 │         └── Button
 └── ProfileModal

You can add more components if you think they are necessary.

Important

You should decide which component should be responsible for what.

For example:

<StudentList />

shouldn't necessarily contain all the code for displaying an individual student.

Instead:

<StudentList>
    <StudentCard />
</StudentList>

Think about component design.

2. Create your student data

Inside App.jsx, create something like:

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
3. Practice Props

StudentList should receive the students through props.

For example:

<StudentList students={students} />

Then StudentList should pass the individual student to StudentCard.

Conceptually:

App
 │
 │ students
 ▼
StudentList
 │
 │ student
 ▼
StudentCard

Your StudentCard should not directly access the students array from App.

It should receive the information it needs through props.

4. Practice rendering lists

Inside StudentList, use .map() to render the cards.

You should end up doing something conceptually like:

students.map(student => ...)

Each student should produce one StudentCard.

Also remember the key prop.

5. Practice conditional rendering

The student status should depend on the student's active value.

If:

active: true

display:

🟢 Active

If:

active: false

display:

🔴 Inactive

You must use conditional rendering.

Try using both:

condition ? something : somethingElse

and:

condition && something

somewhere in your project.

6. Parent → Child communication

Add a button:

[ View Profile ]

When the user clicks it, the parent should know which student was clicked.

For example:

StudentCard
     │
     │ clicked student
     ▼
StudentList
     │
     ▼
App

Don't solve this by accessing the DOM with:

document.querySelector(...)

Use props and callback functions.

This is the important part.

For example, the parent might eventually do something like:

<StudentCard onViewProfile={...} />

Your job is to figure out how the function travels from the parent to the child and how the child uses it.

7. Practice children

Create a reusable component called:

<Card>

It should accept children.

For example, you should be able to write:

<Card>
    <StudentCard />
</Card>

and also:

<Card>
    <h2>Student Profile</h2>
</Card>

The Card component shouldn't care what you put inside it.

Its job is simply to provide a reusable container/design.

This will help you understand why children exists.

8. Practice a props pattern

Create a reusable Button component.

It should receive props such as:

<Button
    text="View Profile"
    onClick={...}
/>

But make your component more flexible.

For example, it should support:

<Button
    variant="primary"
    onClick={...}
>
    View Profile
</Button>

and:

<Button
    variant="danger"
    onClick={...}
>
    Delete
</Button>

Notice that we're combining:

props
children
conditional rendering
reusable component design
9. Add filtering

At the top of the dashboard, create:

[All] [Active] [Inactive]

When the user clicks Active, only active students should appear.

When they click Inactive, only inactive students should appear.

When they click All, display everyone.

You'll need JavaScript to create a filtered array.

Think about:

students.filter(...)

Then render the result using:

.map(...)

This is a very important React pattern:

data
 ↓
filter()
 ↓
map()
 ↓
components
10. Add a profile section

When:

[ View Profile ]

is clicked, display:

--------------------------------
Student Profile

Name: Philip Iorwua
Course: Frontend Development
Courses enrolled: 4
Status: Active

[ Close ]
--------------------------------

The profile should display the student that was clicked.

Don't create four different profile components manually.

Your component should be reusable.

🚨 Rules

Try this without looking for a complete solution online.

You are allowed to look up:

React syntax
.map()
.filter()
JSX syntax
React useState syntax

But try to figure out the component relationships yourself.

Don't use:
document.querySelector()
innerHTML
getElementById()

Your React state and props should control the UI.

🧠 The main challenge

Before coding, draw this on paper:

                    App
                     │
          ┌──────────┼───────────┐
          ↓          ↓           ↓
       Header    FilterButtons  StudentList
                                  │
                                  ↓
                             StudentCard
                                  │
                           ┌──────┴──────┐
                           ↓             ↓
                    StudentStatus      Button

Then ask yourself:

Who owns the data?

Who needs the data?

Which component should receive the function?

Which component should call the function?

Which component should use children?

Those questions are more important than simply getting the UI to work.

⭐ Bonus challenge

After you finish, add a search box:

Search students: [______________]

Typing:

Philip

should only display:

Philip Iorwua

Now you're combining