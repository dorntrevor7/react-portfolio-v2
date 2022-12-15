import Card from "react-bootstrap/Card";
import covidTrack from "../images/covidTrack.png";
import flavorSavor from "../images/flavor-savor-sc.png";
import passGen from "../images/passGen.png";

const Work = () => {
  return (
    <>
      <div className="Row covid">
        <Card className="bg-dark text-white">
          <a href=" https://covidtracking.com/api/">
            <Card.Img src={covidTrack} alt="This is a covid-19 project" />
          </a>
        </Card>
      </div>
      <br />
      <div className="Row">
        <Card className="bg-dark text-white">
          <a href="https://dorntrevor7.github.io/new-password-generator/">
            <Card.Img src={passGen} alt="This is a covid-19 project" />
          </a>
        </Card>
      </div>
      <div className="Row">
        <img src="" />
      </div>
      <div className="Row">
        <img src="" />
      </div>
    </>
  );
};

export default Work;
