import React from 'react';
//import { isLiteralTypeNode } from 'typescript';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';

function App() {
 // return (
    //<div className="App">
    //  <header className="App-header">
    //    <img src={logo} className="App-logo" alt="logo" />
    //    <p>
     //     Edit <code>src/App.tsx</code> and save to reload.
     //   </p>
      //  <a
     //     className="App-link"
      //    href="https://reactjs.org"
      //    target="_blank"
      //    rel="noopener noreferrer"
      //  >
      //    {/* Learn React */}
      //    Learn React
      //  </a>
     // </header>
  //</div>
  //<blockquote cite="Benjamin Frankilin">
  //Tell me and I forget, teach me and I may remember, involve me and I learn.
  //</blockquote>  
 // );
 return (
   <div className="container">
     <ProjectsPage />
   </div>
 );
}

export default App;
