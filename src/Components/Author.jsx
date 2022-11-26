import { Image } from "react-bootstrap";

const Author = () => {
  const styles = {
    contain: {
      borderRadius: "10px",
      marginBottom: "80px",
      padding: "30px",
      backgroundColor: "rgba(254, 254, 254, 0.55)",
    },
    stylebody: {
      marginTop: "30px",
    },
    stylehead: {
      textShadow: "2px 2px #fad67b",
    },
    image: {
      marginBottom: "30px",
    },
  };
  return (
    <>
      <div>
        <Image
          style={styles.image}
          src="https://avatars.githubusercontent.com/u/101607489?v=4"
          alt="Picture of Trevor Dorn"
          roundedCircle
        />
        <div style={styles.contain}>
          <h3 style={styles.stylehead}>About Me</h3>
          <hr />
          <p style={styles.stylebody}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nisi
            veniam itaque quod. A adipisci ipsa eos magnam blanditiis sint est
            exercitationem similique incidunt hic. Non iusto distinctio esse
            aut? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi aliquid dolorem autem itaque maxime expedita tenetur
            suscipit, dolorum laborum pariatur consectetur adipisci enim
            quisquam fugiat tempora architecto distinctio ad possimus! Adipisci
            eaque minus sunt quibusdam, molestiae error illo laboriosam
            laudantium.
          </p>
        </div>
      </div>
    </>
  );
};

export default Author;
