import logo from './logo.svg';
import './App.css';
//Import React hooks and the Navbar component
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  return (
    // Set the background color and minimum screen height
    <div className="bg-[#fcd8b6] min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content: Spaced down so it doesn't hide under the navbar */}
      <div className="pt-24 text-center text-[#450b00]">
        <h1 className="text-4xl font-serif">Welcome to Genesis</h1>
        <div className="h-[200vh]"></div> {/* Filler to allow scrolling */}
      </div>
    </div>
  );
}

export default App;