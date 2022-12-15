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
          src="https://media.licdn.com/dms/image/C5603AQEkjKUcvqLTAA/profile-displayphoto-shrink_400_400/0/1653262712594?e=1676505600&v=beta&t=7hYbL7EJuM2sMMaKGTL6h09zhzL8sUiJ3NesiRrMoRc"
          alt="Picture of Trevor Dorn"
          roundedCircle
        />
        <div style={styles.contain}>
          <h3 style={styles.stylehead}>About Me</h3>
          <hr />
          <p style={styles.stylebody}>
            As a Full-Stack Developer, I strive to take pride in my work. In
            2018, I decided to start my coding career, starting in Java and then
            went on to the University of Arizona to graduate with a professional
            certificate in 2020 for Full-Stack Developing using all the
            technical skills featured below. After I graduated, I tutored
            students around the nation to achieve their certificates and just
            completed my second cohort for the University of Arizona, Full-Stack
            Development.
          </p>
        </div>
      </div>
    </>
  );
};

export default Author;
