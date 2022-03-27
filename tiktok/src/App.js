import {useState} from 'react'
import './App.css';

const courses = [
  {
    id : 1,
    name : "java"
  },
  {
    id : 2,
    name : "javascript"
  },
  {
    id : 3,
    name : "C++"
  }
]
function App() {
  const [checked, setChecked] = useState([]);
  console.log(checked);
  const handleSubmit = () => {

  }
  const handleCheck = (id) => {
      setChecked(prev => {
        const isChecked = checked.includes(id);
        if(isChecked){
            return checked.filter(item => item != id)
        }else{
          return [...prev,id]
        }
      })
  }
  return (
    <div className="App">
       {courses.map(course => (
         <div key={course.id}>
           <input type="checkbox" checked = {checked.includes(course.id)} onChange={() => handleCheck(course.id)}/> {course.name}
         </div>
       ))} 
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
