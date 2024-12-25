import React from "react";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "44f8750b-251e-4e1f-b235-473559c18c01");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Feel free to reach out to me for collaborations, freelance work, or
          just to say hi! I'm always open to new opportunities and ideas.
        </p>
        <div className="flex justify-center space-x-4 text-2xl">
          <a
            href="chaudharypiyush596@gmail.com"
            className="text-teal-400 hover:text-teal-300"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-chaudhary-b9826229a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/piyush1740x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/piyush_up_gkp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="p-6 mt-8 mx-auto max-w-lg bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl text-white font-bold text-center mb-4">
          Contact Me
        </h1>
        <form onSubmit={onSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-lg py-3 px-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded-lg py-3 px-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows="5"
            required
            className="w-full rounded-lg py-3 px-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <p className="text-center text-teal-400 mt-4">{result}</p>
      </div>
    </div>
  );
};

export default Contact;
