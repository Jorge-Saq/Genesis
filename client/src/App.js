// Import React dependencies and custom components
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import FeaturedSlider from './components/FeaturedSlider';
import SubmitPage from './pages/SubmitPage';


// Root App component
function App() {
  // State to manage user login status
  const [userEmail, setUserEmail] = useState('');
  // 🔁 Track user state after refresh or navigation
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email && user.email.endsWith('@bc.edu')) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });

    return () => unsubscribe(); // cleanup listener
  }, []);
  
  return (
    <Router>
      <div className="bg-[#fcd8b6] min-h-screen">
        <Navbar />

        <Routes>
          {/* Home route (open to everyone) */}
          <Route
            path="/"
            element={
              <>
                <div className="pt-24 text-center text-[#450b00]">
                  <h1 className="text-7xl md:text-9xl font-heading tracking-tight uppercase text-[#450b00]">
                    WELCOME TO GENESIS
                  </h1>
                  <p className="mt-4 text-lg font-light">Scroll down to explore our featured voices 👇</p>
                  <div className="h-[100vh]"></div>
                </div>
                <FeaturedSlider />
              </>
            }
          />

          {/* Submit route (has logic for login inside SubmitPage) */}
          <Route path="/submit" element={<SubmitPage userEmail={userEmail} onLogin={setUserEmail} />} />
        </Routes>
      </div>
    </Router>
  );
}
  

export default App;