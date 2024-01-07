import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github, linkedin } from "../assets";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Contact = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTopButton && window.pageYOffset > 400) {
        setShowScrollTopButton(true);
      } else if (showScrollTopButton && window.pageYOffset <= 400) {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTopButton]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "peiman zhiani",
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAILJS_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you! I will get back to you after reviewing your message."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("There was an error sending your email. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-[5px]"
      >
        <h3 className={styles.sectionHeadText}>Get In Touch.</h3>

        <div className="flex justify-between items-center mb-1 mt-5">
          <a
            href="https://www.linkedin.com/in/peiman-zhiani/" // Replace with your LinkedIn URL
            className="flex items-center justify-center bg-black hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded"
            style={{ width: "49%" }}
          >
            <img src={linkedin} alt="LinkedIn" className="w-4 h-4 mr-2 mb-1" />
            LinkedIn
          </a>
          <a
            href="https://www.github.com/peyz21" 
            className="flex items-center justify-center bg-black hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded"
            style={{ width: "49%" }}
          >
            <img src={github} alt="GitHub" className="w-6 h-6 mr-2" />
            GitHub
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Adam Smith"
              className="bg-secondary py-4 px-6 placeholder:text-gray-600 text-white rounded-[5px] outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="abc@zmail.com"
              className="bg-secondary py-4 px-6 placeholder:text-gray-600 text-white rounded-[5px] outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hey, Your website rocks!"
              className="bg-secondary py-4 px-6 placeholder:text-gray-600 text-white rounded-[5px] outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-secondary py-3 px-12 rounded-[5px] outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-green text-white font-bold py-2 px-4 rounded-[5px] flex items-center justify-center"
          style={{ width: "40px", height: "40px" }}
        >
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[10px] border-b-white"></div>
        </button>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
