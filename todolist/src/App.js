import {useState} from "react"
import './App.css';

function App() {
  const [job,setjob] = useState('')
  const [jobs,setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs ?? [];
  });
  // ?? toán tử trong trường hợp thg trc bằng null hoặc undefine thì lấy thg đường sau

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev,job];
      //save to localstorage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs',jsonJobs)
      return newJobs;
    })
    setjob('')
  }
  return (
    <div className="App">
       <input value={job} onChange = {e => setjob(e.target.value)}/>
       <button onClick={handleSubmit}>Add</button>
       <ul>
         {jobs.map((job,index) => <li key={index}>{job}</li>)}
       </ul>
    </div>
  );
}

export default App;
