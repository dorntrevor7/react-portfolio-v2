import Author from "./Author";
import "../Css/App.css";
import Carousel from "react-bootstrap/Carousel";

const Container = () => {
  const styles = {
    div: {
      marginLeft: "15em",
      marginRight: "15em",
    },
    carousel: {
      borderRadius: "7px",
    },
  };
  return (
    <div style={styles.div}>
      <Carousel pause="hover" variant="dark">
        <Carousel.Item>
          <Carousel.Caption>
            <h5>Work</h5>
          </Carousel.Caption>
          <img
            style={styles.carousel}
            className="d-block w-100"
            src="https://via.placeholder.com/5"
            alt="Author Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <Author />
          </Carousel.Caption>
          <img
            style={styles.carousel}
            className="d-block w-100"
            src="https://via.placeholder.com/5"
            alt="Work Slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Container;
