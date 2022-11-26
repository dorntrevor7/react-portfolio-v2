import { Image, Form, Button } from "react-bootstrap";
function Contact() {
  const styles = {
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
    <div style={styles.formContain}>
      <h3 style={styles.formStyleHead}>Contact</h3>
      <Form>
        <Form.Group controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            I will never share your email with anyone else. TM
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <br />
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
