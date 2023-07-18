// import About from "./components/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Just need to call nav and footer since nav holds all componenets */}
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
