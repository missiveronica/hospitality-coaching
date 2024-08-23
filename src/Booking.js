import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Booking () {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    return (
        <div> 
        <section id ="bookNow">
            <div className="bookingContainer">
                <h2>BOOK NOW</h2>
                </div>
                <div className='formBox'>
    <h4>Please fill out the form and we will contact you within 24 hours </h4>
                </div>
<div className='formFrame'>
<Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control required
           type="text"
           placeholder="Enter your name"/> 
           <Form.Control.Feedback type="invalid">
            Please provide your name.  
              </Form.Control.Feedback>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Enter your email" />
          <Form.Control.Feedback type="invalid">
            Please provide your valid email.  
              </Form.Control.Feedback>

        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Select our Service</Form.Label>
          <Form.Select defaultValue="All-Encompassing Pathway">
            <option>All-Encompassing Pathway</option>
            <option>Pathway Alignment</option>
            <option>One Of A Kind Pathway</option>
            <option>Open Pathway</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Comments</Form.Label>
        <Form.Control placeholder="Insert your comments" />
      </Form.Group>

      
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check required
         type="checkbox"
         label="Agree to all terms and conditions."
         feedback="You must agree before submitting."
         feedbackType="invalid" />
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
</div>


         </section>

         </div>

    )
}

export default Booking;


