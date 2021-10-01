import dotenv from "dotenv";

import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Spacer from "../components/Spacer";
import emailjs from "emailjs-com";
dotenv.config();

const ContactScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const sendMessageHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={sendMessageHandler}>
        <div class="form-group">
          <label for="exampleInputFullName" class="form-label mt-4">
            Enter Full Name
          </label>
          <input
            name="from_name"
            type="text"
            value={fullName}
            class="form-control"
            id="exampleInputFullName"
            aria-describedby="nameHelp"
            placeholder="Enter your full name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-4">
            Email address
          </label>
          <input
            name="reply_to"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleTextarea" class="form-label mt-4">
            Enter Your Queries
          </label>
          <textarea
            name="message"
            class="form-control"
            id="exampleTextarea"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows="3"
            spellcheck="false"
            style={{ marginTop: "0px", marginBottom: "0px", height: "94px" }}
          ></textarea>
        </div>
        <Spacer />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactScreen;
