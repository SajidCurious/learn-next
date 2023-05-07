import React from "react";

const contact = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <form className="mt-16">
        <div className="email">
          <label for="exampleInputEmail1" className="mb-32">
            Email address
          </label>
          <br />
          <input
            type="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="password">
          <label for="exampleInputPassword1">Password</label>
          <br />
          <input type="password" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
