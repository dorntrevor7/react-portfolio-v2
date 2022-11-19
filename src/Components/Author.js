import { Image, Form, Button } from "react-bootstrap";

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
    formContain: {
      borderRadius: "10px",
      marginBottom: "80px",
      padding: "30px",
      backgroundColor: "rgba(254, 254, 254, 0.55)",
    },
    formStyleHead: {
      textShadow: "2px 2px #fad67b",
    },
  };
  return (
    <>
      <div>
        <Image
          style={styles.image}
          src="https://avatars1.githubusercontent.com/u/59455474?s=460&u=714ce59b4e66094f8f5c06a49bbeb7a292541188&v=4"
          alt="Picture of Trevor Dorn"
          roundedCircle
        />
        <div style={styles.contain}>
          <h3 style={styles.stylehead}>About Me</h3>
          <hr />
          <p style={styles.stylebody}>
            Full Stack Web Developer and graduate from the University of Arizona
            Coding Bootcamp. Learned and developed skills for JavaScript, React,
            CSS, HTML, and Java ​to ensure my clients have an absolute advantage
            over their competition resulting by designing new and captivating
            experiences​. Team leader while being a teammate, competitive and a
            quick learner. E​quipped with soft skills like working
            collaboratively, managing time, and being innovative with a team to
            ensure optimal results for user-centered and technology-centered
            designs.
          </p>
        </div>
      </div>
      <div style={styles.formContain}>
        <h3 style={styles.formStyleHead}>Contact</h3>
        <hr />
        <Form>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              I will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Author;
