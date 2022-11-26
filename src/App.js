import "./Css/App.css";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Container id="container" />
      <br />
      <Footer />
    </div>
  );
}

export default App;
