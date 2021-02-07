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

export default ({ submitted }) => {
  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: "", email: "", message: "" }
  );

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    updateState({ [e.target.name]: e.target.value });

    if (e.target.name === "message") {
      updateState({
        message: `${e.target.value}. Email sent from ${state.email}`,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactGeorge", ...state }),
    })
      .then(() => {
        submitted();
      })
      .catch((error) => alert(error));
  };

  return (
    <Form>
      <form
        name="contactGeorge"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contactGeorge" />
        <Input
          placeholder="Your name"
          name="name"
          type="text"
          onChange={handleChange}
        />
        <Input
          placeholder="Your email"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <Textarea
          placeholder="Your message"
          name="message"
          onChange={handleChange}
        />
        <Buttons>
          <Button type="submit" />
        </Buttons>
      </form>
    </Form>
  );
};
