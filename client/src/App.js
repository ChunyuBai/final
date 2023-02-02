import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'


function App() {
  const [message, setMessage] = useState("")
  useEffect (()=>{
    axios.get('/greeting').then( res => {
      console.log(res.data)
      setMessage(res.data.greetings)
    })
  },[])
  
  return (
    <div className="App">
      <h1>{message}</h1>
      <h2>This is test</h2>
      <h3>Final Project</h3>
    </div>
  );
}

export default App;
