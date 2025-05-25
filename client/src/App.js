// Import React dependencies and custom components
import Navbar from './components/Navbar';
import FeaturedSlider from './components/FeaturedSlider';

// Root App component
function App() {
  return (
    // Outer container with warm beige background and full height
    <div className="bg-[#fcd8b6] min-h-screen">
      
      {/* Sticky, animated top navigation bar */}
      <Navbar />

      {/* Top landing section: title and scroll padding */}
      <div className="pt-24 text-center text-[#450b00]">
        <h1 className="text-7xl md:text-9xl font-heading tracking-tight uppercase text-[#450b00]">
          WELCOME TO GENESIS
        </h1>



        {/* Temporary space to enable scrolling and fade effect for navbar */}
        <div className="h-[10vh]"></div>
      </div>

      {/* Auto-scrolling featured slider component */}
      <FeaturedSlider />

      {/* Future: Add action buttons or mission statement here */}

    </div>
  );
}

export default App;
// Note: The above code is a simplified version of the original.