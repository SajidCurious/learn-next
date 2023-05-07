import React from "react";

const contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-16 flex flex-col">
        <div>
          <div className="email mb-6">
            <label for="exampleInputEmail1" className="text-xl">
              Email address
            </label>
            <br />
            <input
              type="email"
              className="mt-1 border border-black p-1 rounded-md"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="password">
            <label for="exampleInputPassword1" className="text-xl">
              Password
            </label>
            <br />
            <input
              type="password"
              className="mt-1 p-1 border border-black rounded-md"
              id="exampleInputPassword1"
            />
          </div>
          <div className="textarea flex flex-col mt-4">
            <label for="floatingTextarea2">Elaborate Your Concern</label>
            <textarea
              className="mt-1 border border-black rounded-md p-2"
              id="floatingTextarea2"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 text-xl text-white font-semibold border border-black rounded-md bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
