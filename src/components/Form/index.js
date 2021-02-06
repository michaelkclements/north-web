import React, { useReducer } from "react";
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

const initialState = {
  name: "",
  email: "",
  message: "",
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

export default ({ submitted }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "north-contact", ...state }),
    })
      .then(() => {
        submitted();
      })
      .catch((error) => alert(error));
  };

  const { name, email, message } = state;

  return (
    <Form>
      <form
        name="north-contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="north-contact" />
        <Input
          placeholder="Your name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        />
        <Input
          placeholder="Your email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <Textarea
          placeholder="Your message"
          name="message"
          value={message}
          onChange={handleChange}
        />
        <Buttons>
          <Button type="submit" />
        </Buttons>
      </form>
    </Form>
  );
};
