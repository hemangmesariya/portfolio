import React from "react";

const Contact = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center pt-0 bg-[#f5f5f5]">
      <form action="" className="flex flex-col max-w-[600px] w-full gap-2">
      <div className="text-center pb-4">
        <h1 className="font-bold text-3xl">Contact</h1>
      </div>
        <input type="text" className="p-3 focus:ring-6 ring-pink-300 ring-inset bg-gray-200" name="name" id="name" placeholder="Name" />
        <input type="email" className="p-3 bg-gray-200" name="email" id="email" placeholder="Email" />
        <textarea
          name="msg"
          id="msg"
          cols="30"
          className="p-3 bg-gray-200"
          placeholder="Message..."
          rows="10"
        ></textarea>
        <button type="submit" className="p-3 border px-8 py-3 my-8 mx-auto border-blue-50 bg-gray-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
