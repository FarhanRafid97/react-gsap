
import './App.css';

import {Route, Routes, Link} from 'react-router-dom'
import {Navbar }from './components'
import {Header} from './containers'

function App() {
  return (
   <div className="app">
     <div className="bg-header">
 <Navbar />
 <Header/>

     </div>
   </div>
  );
}

export default App;
