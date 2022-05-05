import {useState} from 'react'
import './App.css';
import Content from './Content';
import FakeChat from './FakeChat';

function App() {
  const [flash, setFlash] = useState(false)
  const handleClick = () => {
    setFlash(!flash)
  }
  return (
    <div className="App">
        <p>Hello anh em</p>
        <button onClick={handleClick}>Show more</button>
        {flash && <Content/>}
        {<FakeChat />}
    </div>
  );
}

export default App;
