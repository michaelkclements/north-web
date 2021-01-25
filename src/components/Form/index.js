import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 400px;
`;

const Input = styled.input`
  box-sizing: border-box;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  margin: 10px 0;
  padding: 20px;
  width: 100%;
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  padding: 20px;
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #fff;
  color: #fff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 24px;
  padding: 10px 20px;
  margin: 10px 0;
`;

export default () => (
  <Form
    name="contact_george"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <Input placeholder="Your name" type="text" name="name" id="name" />
    <Input placeholder="Your email" type="text" name="email" id="email" />
    <Textarea placeholder="Your message" name="message" id="message" rows="6" />
    <Buttons>
      <Button type="submit" value="Send Message" className="special" />
      <Button type="reset" value="Clear" />
    </Buttons>
  </Form>
);
