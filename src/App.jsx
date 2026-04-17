
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


export default function App() {
  return (
    <div className="bg-primary overflow-x-hidden min-h-screen">
      <Navbar />
  <Home/>
      
      <Footer />
    </div>
  );
}