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

export default ({ submitted }) => {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        "form-message": event.target.getAttribute("message"),
      }),
    })
      .then(() => submitted())
      .catch((error) => alert(error));
  };

  return (
    <Form
      data-netlify="true"
      name="contact-george"
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contactGeorge" />
      <Input placeholder="Your name" name="name" type="text" />
      <Textarea placeholder="Your message" name="message" type="text" />
      <Buttons>
        <Button type="submit" />
      </Buttons>
    </Form>
  );
};
