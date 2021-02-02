import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.div`
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
    e.preventDefault();
    const form = contactForm.current;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute("name"), ...formState }),
    })
      .then((response) => {
        console.log(response);
        submitted();
      })
      .catch((error) => alert(error));
  };

  const contactForm = React.createRef();

  return (
    <Form>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        ref={contactForm}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <Input
          placeholder="Your name"
          name="name"
          type="text"
          value={formState.name}
          onChange={(e) =>
            setFormState({
              name: e.target.value,
              email: formState.email,
              message: formState.message,
            })
          }
        />
        <Input
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={(e) =>
            setFormState({
              name: formState.name,
              email: e.target.value,
              message: formState.message,
            })
          }
        />
        <Textarea
          placeholder="Your message"
          name="message"
          value={formState.message}
          onChange={(e) =>
            setFormState({
              name: formState.name,
              email: formState.email,
              message: e.target.value,
            })
          }
        />
        <Buttons>
          <Button type="submit" />
        </Buttons>
      </form>
    </Form>
  );
};
