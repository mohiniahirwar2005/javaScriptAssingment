import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <div id="abcd">My first react app</div>

      <p className="bg-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        doloribus quia totam minus nisi asperiores ipsum itaque perspiciatis
        adipisci molestiae.
      </p>

      <button>click here</button>

      <Footer/>
    </>
  );
}

export default App;
