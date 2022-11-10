import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {

  let tasks =JSON.parse(window.localStorage.getItem('toDo'))
  tasks = tasks ? tasks : []
  const [toDo, setToDo] = useState(tasks)
  useEffect(() => {
    window.localStorage.setItem('toDo', JSON.stringify(toDo))
  })


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main toDo={toDo} setToDo={setToDo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
