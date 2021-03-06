import React from "react";
import {Container, Form, Input, TextArea, Button} from "semantic-ui-react";

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    nameError: false,
    emailError: false,
    subjectError: false,
    messageError: false
  }

  updateInputValue = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
    if(this.state.emailError) {
      if(this.state.email !== '') {
        this.state.emailError = false;
      }
    }
  }

  handleSubmit = () => {
    if(this.state.email === '') {
      this.state.emailError = true;
    }
  }

  render() {
    return(
      <Container classname='contact-container'>
        <Form>
          <Form.Field
            control={Input}
            name='name'
            label='Name'
            value={this.state.name}
            onChange={this.updateInputValue}
            placeholder='Name'
          />
          <Form.Field
            control={Input}
            name='email'
            label='Email'
            value={this.state.email}
            onChange={this.updateInputValue}
            placeholder='martinus490@gmail.com'
            error={
              this.state.emailError && {
                content: 'Please enter a valid email address',
                pointing: 'below',
              }
            }
          />
          <Form.Field
            control={Input}
            name='subject'
            label='Subject'
            value={this.state.subject}
            onChange={this.updateInputValue}
          />
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            name='message'
            label='Message'
            value={this.state.message}
            onChange={this.updateInputValue}
          />
          <Button onClick={this.handleSubmit}>Send</Button>
        </Form>
      </Container>
    )
  }
}

export default Contact