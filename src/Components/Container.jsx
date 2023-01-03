import Author from "../Components/Author";
import Contact from "../Components/Contact";
import Work from "./work";
import "../Css/App.css";
import Carousel from "react-bootstrap/Carousel";

const Container = () => {
  const styles = {
    div: {
      marginLeft: "15em",
      marginRight: "15em",
      boxShadow: "0px 0px 11px whitesmoke",
    },
    carousel: {
      borderRadius: "7px",
    },
  };
  return (
    <div style={styles.div}>
      <Carousel interval={null} variant="dark">
        <Carousel.Item>
          <img
            id="work"
            style={styles.carousel}
            className="d-block w-100"
            src="https://via.placeholder.com/5"
            alt="Author Slide"
          />
          <Carousel.Caption>
            <Work />
            <h5>Work</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <Author />
            <h5>Author </h5>
          </Carousel.Caption>
          <img
            id="author"
            style={styles.carousel}
            className="d-block w-100"
            src="https://via.placeholder.com/5"
            alt="Work Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={styles.carousel}
            className="d-block w-100"
            src="https://via.placeholder.com/5"
            alt="Work Slide"
            id="contact"
          />
          <Carousel.Caption style={{ marginBottom: "150px" }}>
            <Contact />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Container;
