import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import ProfilePhoto from "./images/rutuja.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks, Resume } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_25', 'template_7k1rtup', form.current, '_2MYompX54Lgq-4c8')
      .then((result) => {
          alert("Message sent successfully!");
      }, (error) => {
          alert("Something went wrong. Please try again.");
      });

    e.target.reset();
  };

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        {/* Navigation bar */}
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">Rutuja Kaklij</p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Home</a>
              <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">About</a>
              <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Projects</a>
              <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Contact</a>

              <a href={Resume.link} className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100  ease-in-out">Download</a>
            </div>

            <motion.div whileTap={{ scale: 0.5 }} className="block md:hidden ml-auto cursor-pointer" onClick={() => setIsActive(!isActive)}>
              <IoMenu className="text-2xl text-textBase" />
            </motion.div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={() => setIsActive(false)}>Home</a>
                <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={() => setIsActive(false)}>About</a>
                <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={() => setIsActive(false)}>Projects</a>
                <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={() => setIsActive(false)}>Contact</a>

                <motion.a whileTap={{ scale: 0.8 }} href={Resume.link} className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100  ease-in-out" onClick={() => setIsActive(false)}>Download</motion.a>
              </motion.div>
            )}
          </div>
        </nav>

        {/* 3d design */}
        <div id="home" className="m-5"></div>
        <div className="relative">
          <Spline scene="https://draft.spline.design/1SIsKQFH-TVtEI-0/scene.spline" />
          <div className="absolute bottom-0 w-full justify-center items-center flex">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl"></div>
            <p className="text-textBase">Press and drag to orbit</p>
          </div>
        </div>

        {/* Main Section */}
        <main className="w-[80%] mt-5">
          {/* About section */}
          <section id="about" className="m-5"></section>
          <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24">
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
                <img className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg" src={ProfilePhoto} alt="user profile" />
              </div>
            </div>

            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-slate-200 text-center">
                Dedicated and adaptable professional with a Bachelor of Engineering in Computer Science. Skilled in HTML, CSS, Core Java, and MySQL. Eager to contribute to meaningful software projects and grow as a developer in a dynamic environment.
              </p>
              <p className="text-lg text-slate-400 mt-5 text-center">Find my CV below!</p>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="w-full md:w-auto relative mt-6 inline-flex items-center 
                  justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium 
                  text-gray-900 rounded-lg group bg-gray-900 bg-gradient-to-br from-green-400 to-blue-600 
                  group-hover:from-green-400 group-hover:to-blue-600 hover:text-white 
                  dark:text-white focus:ring-4 focus:ring-green-200 
                  dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg 
                  hover:dark:shadow-teal-800/80"
              >
                <a
                  href="https://drive.usercontent.google.com/u/0/uc?id=1RvzQNeuzIudmKAPAb7UJ7QTjwjtxqDcU&export=download"
                  className="w-full relative px-5 py-2.5 
                    transition-all ease-in duration-75 bg-white dark:bg-gray-900 
                    rounded-md group-hover:bg-opacity-0"
                  download
                >
                  Download
                </a>
              </motion.button>

            </div>
          </section>

          {/* Experience */}
          <h2 className="text-3xl text-slate-200 font-semibold my-8 text-center">
            Experience
          </h2>
          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {Experience && Experience.map((item) => (
                <VerticalTimelineElement key={item.id} className="vertical-timeline-element--work" contentStyle={{ background: "#1f1f28", color: "white", borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }} contentArrowStyle={{ borderRight: "7px solid rgb(21, 24, 31)" }} date={item.date} iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }} icon={item.iconsSrc}>
                  <h3 className="vertical-timeline-element-title font-bold text-slate-100">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle italic text-slate-400">{item.location}</h4>
                  <p className="text-slate-300">{item.description}</p>
                  <p className="text-slate-400">{item.techStack}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </section>

          {/* Projects */}
          <section id="projects" className="m-3"></section>
            <h2 className="text-3xl text-slate-200 font-semibold mb-12 text-center">
              Projects
            </h2>
          <section className="flex flex-wrap items-center justify-around my-24 gap-6">
            {Projects && Projects.map((item) => (
              <div key={item.id} className="border border-zinc-800 rounded-lg p-4 min-w-[275px] md:max-w-[320px] hover:border-zinc-600 hover:scale-105 duration-100 ease-in-out mb-5 bg-[#1f1f28] text-textBase shadow-lg shadow-gray-900 hover:text-[white]">
                <p className="text-md text-slate-300 text-ellipses font-medium uppercase text-center text-[inherit]">{item.title}</p>
                <p className="text-sm text-slate-400 my-2">{item.description}</p>
                <span className="block text-sm text-slate-400 capitalize cursor-pointer">{item.techStack?.join(", ")}</span>
              </div>
            ))}
          </section>

          {/* Contact */}
          <form ref={form} onSubmit={sendEmail} className="text-gray-300 font-medium w-11/12 flex flex-col m-auto my-4">
            <p className="text-center text-3xl p-4">Contact</p>

            <label className="flex flex-col text-xl">Name:
              <input type="text" name="user_name" required className="h-14 font-medium text-black rounded-md px-4 bg-gray-300" />
            </label>

            <label className="flex flex-col py-7 text-xl">Email:
              <input type="email" name="user_email" required className="h-14 font-medium text-black rounded-md px-4 bg-gray-300" />
            </label>

            <label className="flex flex-col py-2 text-xl">Message:
              <textarea name="message" rows="5" required className="font-medium text-black rounded-md p-4 bg-gray-300"></textarea>
            </label>

            <div className="float-right">
              <button type="submit" className="rounded-lg outline outline-offset-2 outline-gray-500 bg-slate-800 mt-3 w-1/6 float-right h-10">
                Submit
              </button>
            </div>
          </form>


          {/* Social */}
          <section className="flex flex-col items-center justify-center w-full mt-16" id="social">
            <p className="text-2xl text-gray-400 font-medium capitalize">Follow me on</p>
            <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
              {SocialLinks && SocialLinks.map((item) => (
                <motion.a whileTap={{ scale: 0.8 }} href={item.link} key={item.id} className="w-full md:w-auto px-3 md:px-8 py-4 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-5 shadow-sm shadow-stone-600 hover:scale-105" target="_blank" rel="noreferrer">
                  {item.iconSrc}
                  <p className="text-lg text-textBase font-medium">{item.name}</p>
                </motion.a>
              ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
