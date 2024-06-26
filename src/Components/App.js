// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// src/components/App.js

import React from 'react';
import NavBar from './NavBar';

const App = () => {
    return (
        <div>
            <NavBar />
            <main>
                <h1>Welcome to My Website</h1>
                {/* Your content goes here */}
            </main>
        </div>
    );
};

export default App;

