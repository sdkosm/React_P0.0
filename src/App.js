import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Trainers from "./components/Trainers/Trainers";
import Footer from "./components/Footer/Footer";
import Join from "./components/Join/Join";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />

      <Reasons />
      <Plans />
      <Trainers />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
