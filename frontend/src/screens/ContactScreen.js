import React from "react";
import { Button, Form } from "react-bootstrap";
import Spacer from "../components/Spacer";
const ContactScreen = () => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Thank yous");
        }}
      >
        <div class="form-group">
          <label for="exampleInputFullName" class="form-label mt-4">
            Enter Full Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputFullName"
            aria-describedby="nameHelp"
            placeholder="Enter your full name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            class="form-control"
            id="exampleTextarea"
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
