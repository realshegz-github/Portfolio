import React from "react";
import Input from "../../Component/Form/Input";
import { Fade } from "react-reveal";
import {
  Container,
  HeaderBox,
  ContactWrapper,
  TextBox,
  Button,
  Box,
  InputBox,
} from "./ContactElement";

const Contact = () => {
  return (
    <Box>
      <ContactWrapper id="contact">
        <HeaderBox>
          <h1>Contact Me</h1>
        </HeaderBox>
        <Container>
          <Fade duration={2500} left>
            <TextBox>
              <h1>
                Do you have a Project? <br />I would love to help.
              </h1>
              <p>
                abiodun_segun10@yahoo.com <br />
                +234 810 997 0175
              </p>
            </TextBox>
          </Fade>
          <Fade duration={2500} right>
            <InputBox>
              <p> Get in touch with me here...</p>
              <Input type="text" placeholder="Email" />
              <Input type="email" placeholder="Enter you mail address" />
              <Input type="text" placeholder="Tell us about your project..." />
              <Button>Send request</Button>
            </InputBox>
          </Fade>
        </Container>
      </ContactWrapper>
    </Box>
  );
};

export default Contact;
