import "./Css/App.css";
import Header from "./Components/Header";
import Container from "./Components/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Container id="container" />
    </div>
  );
}

export default App;
