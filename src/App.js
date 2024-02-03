import './App.css';
import { Navbar } from './component/Navbar';
import { Menubar } from './component/Menubar';
import { Cards } from './component/Cards';
function App() {
  return (
    <div className='w-[1920px] h-[1200px] '>
       <Navbar></Navbar>
       <Menubar/> 
       <Cards></Cards>
      
    </div>
  );
}

export default App;
