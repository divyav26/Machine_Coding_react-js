
import { useState } from 'react';
import './App.css';
import Model from './components/Model';

function App() {

  const [openModel ,setOpenModel] = useState(false)
  
  return (
    <div className='App'>
      <h1>Hey, click on the button to open the model</h1>
    <button onClick={()=>setOpenModel(true)}>Click here for Pop</button>
    {openModel &&<Model setOpenModel={setOpenModel}/>}
    </div>
  );
}

export default App;
