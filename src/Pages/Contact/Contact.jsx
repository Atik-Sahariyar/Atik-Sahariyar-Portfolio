import { useTheme } from "../../Hooks/useTheme";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const { darkMode } = useTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i0wspad",
        "template_ej8rsc4",
        form.current,
        "0RtYPKUiBbPZd8TQY"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          Swal.fire({
            icon: "success",
            title: "Message Sent",
            text: "Your message has been sent successfully!",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className={`mt-8 ${
        darkMode ? "bg-gray-800 text-gray-100 " : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-4 pt-5 text-center">Contact Me</h2>
      <div className=" flex flex-col md:flex-row">
        <div className=" flex-1 md:my-20 mx-5 md:mx-8">
          <p className=" mb-4">{`Feel free to drop me a message, and I'll get back to you as soon as possible!`}</p>
          <p className=" mb-4">{`As a web developer, I'm excited to hear from you and discuss any inquiries or collaboration opportunities!`}</p>
        </div>
        <div className=" flex-1 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`max-w-md mx-auto mt-8 p-6 rounded-lg shadow-md `}
          >
            <div className="mb-4">
              <label className="block ">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="user_name"
                required
                className={`border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none ${
                  darkMode
                    ? "focus:border-blue-500 text-white bg-gray-800"
                    : "focus:border-blue-500 bg-white"
                }`}
              />
            </div>
            <div className="mb-4">
              <label className="block ">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="user_email"
                required
                className={`border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none ${
                  darkMode
                    ? "focus:border-blue-500 text-white bg-gray-800"
                    : "focus:border-blue-500 bg-white"
                }`}
              />
            </div>
            <div className="mb-4">
              <label className="block ">Message</label>
              <textarea
                placeholder="Type your message"
                name="message"
                required
                className={`border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none ${
                  darkMode
                    ? "focus:border-blue-500 text-white bg-gray-800"
                    : "focus:border-blue-500 bg-white"
                }`}
              />
            </div>
            <span className=" flex justify-center">
              <input
                type="submit"
                className={`px-4 py-2  rounded-md hover:bg-blue-600 transition duration-300 ${
                  darkMode
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
                value="Send Message"
              />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
