import React, { useState } from "react";
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

export default ({ submitted }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-george", ...formState }),
    })
      .then(() => {
        submitted();
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => setFormState({ [e.target.name]: e.target.value });

  return (
    <Form data-netlify="true" onSubmit={handleSubmit}>
      <Input
        placeholder="Your name"
        name="name"
        type="text"
        value={formState.name}
        onChange={handleChange}
      />
      <Input
        placeholder="Your email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
      />
      <Textarea
        placeholder="Your message"
        name="message"
        value={formState.message}
        onChange={handleChange}
      />
      <Buttons>
        <Button type="submit" />
      </Buttons>
    </Form>
  );
};
