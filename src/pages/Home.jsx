import React, { useState } from "react";
import { Link } from "react-router-dom";
import myImage from "../images/guru.jpeg";
import mindron from "../images/mindron.png";
import dharavivegweb from "../images/dharavivegweb.png";
import dti from "../images/dti.jpeg";

export default function Home() {
  const [activeTab, setActiveTab] = useState("skills");

  // Contact form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const renderTabContent = () => {
    switch (activeTab) {
      case "skills":
        return (
          <ul className="list-disc list-inside text-gray-300 mt-4 max-w-3xl">
            <li>HTML , CSS , JavaScript , React.js , ASP.NET MVC , Firebase , Tailwind CSS</li>
            <li>Payment Gateway (Razorpay)</li>
            <li>SQL , MySQL & Firestore Databases</li>
            <li>C , C++ , Java</li>
          </ul>
        );
      case "education":
        return (
          <ul className="list-disc list-inside text-gray-300 mt-4 max-w-3xl">
            <li>Currently pursuing MSc-IT</li>
            <li>Bachelor's in Information Technology (2025)</li>
            <li>HSC (2022)</li>
            <li>SSC (2020)</li>
          </ul>
        );
      case "experience":
        return (
          <ul className="list-disc list-inside text-gray-300 mt-4 max-w-3xl">
            <li>Mindron Meditech: Full Stack Developer</li>
            <li>Final year project: Dharavi Veg Web</li>
            <li>First company app: DTI Demo</li>
          </ul>
        );
      default:
        return null;
    }
  };

  // Contact form submit handler (UPDATED)
  const API_URL = import.meta.env.VITE_API_URL || "";

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert(data.message || "Something went wrong");
    }
  } catch (err) {
    console.error(err);
    alert("Failed to send message");
  }
};


  return (
    <>
      {/* ====================== HOME SECTION ====================== */}
      <section
        id="home"
        className="w-full flex flex-col md:flex-row items-start justify-start px-6 md:px-20 pt-28 md:pt-28 bg-black min-h-[auto] md:min-h-screen"
      >
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <p className="text-kelly font-semibold text-3xl md:text-4xl">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-3 leading-tight">
            Rajaguru <span className="text-kelly">Sivakumar</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mt-3">a Full Stack Developer</h2>
                  </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={myImage}
            alt="Rajaguru"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-xl shadow-lg"
           onContextMenu={(e) => e.preventDefault()}

         />
        </div>
      </section>

      {/* ====================== ABOUT SECTION ====================== */}
      <section id="about" className="w-full px-6 md:px-20 pt-24 md:pt-24 text-left md:-mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-kelly">ABOUT ME</h2>
        <p className="mt-3 md:mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
Motivated BSc IT student with hands-on
experience in developing full-stack web
applications, Java GUI-based desktop
projects, and e-commerce platforms.
Seeking a role that offers opportunities for
learning and innovation.
        </p>
      </section>

      {/* ====================== TABS SECTION ====================== */}
      <section className="w-full px-6 md:px-20 mt-6 mb-20 text-left">
        <div className="flex gap-4">
          {["skills", "education", "experience"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                activeTab === tab
                  ? "bg-kelly text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-4">{renderTabContent()}</div>
      </section>

      {/* ====================== PROJECTS SECTION ====================== */}
      <section id="projects" className="w-full px-6 md:px-20 pt-20 -mt-20 mb-20 text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-kelly">PROJECTS</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src={mindron} alt="Mindron Meditech" className="w-full h-40 object-cover" 
              onContextMenu={(e) => e.preventDefault()}
/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Mindron Meditech</h3>
              <p className="text-gray-300 mb-2">
                Mindron Meditech was my first professional project, where I developed a corporate website for the company.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src={dharavivegweb} alt="Dharavi Veg Web" className="w-full h-40 object-cover"
              onContextMenu={(e) => e.preventDefault()}
 />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Dharavi Veg Web</h3>
              <p className="text-gray-300 mb-4">
                Dharavi Veg Web was my final year project where users can buy vegetables online.
              </p>
              <a
                href="https://dharavivegweb.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-kelly text-white rounded-md font-medium hover:opacity-90 transition"
              >
                View the Website
              </a>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src={dti} alt="DTI Demo" className="w-full h-40 object-contain"
              onContextMenu={(e) => e.preventDefault()}
 />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">DTI App</h3>
              <p className="text-gray-300 mb-4">
                DTI Demo was my first company app. It includes login and image capture features.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
  <Link
    to="/projects"
    className="px-8 py-3 bg-kelly text-white rounded-lg font-semibold hover:opacity-90 transition"
  >
    See More
  </Link>
</div>
      </section>

      {/* ====================== CONTACT SECTION ====================== */}
      <section id="contact" className="w-full px-6 md:px-20 pt-20 -mt-20 mb-20 text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-kelly">CONTACT</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="text-white flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-semibold text-kelly">Phone</h3>
              <p className="text-gray-300">+91 9082512315</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-kelly">Email</h3>
              <p className="text-gray-300">rajagurusivakumar1@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-kelly mb-2">Social Media</h3>
              <div className="flex items-center gap-5">
                <a href="https://github.com/rajagurusk" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/rajaguru-sivakumar-02824b259" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="w-8 h-8" />
                </a>
                <a href="https://www.instagram.com/logarajaguru" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-8 h-8" />
                </a>
              </div>
            </div>

            <a
              href="https://raw.githubusercontent.com/rajagurusk/Image/main/rajaguru%20sivakumarCV-2.pdf"
              download="Rajaguru-Sivakumar-CV.pdf"
              className="px-6 py-3 bg-kelly text-white rounded-lg font-semibold w-fit hover:opacity-90 transition"
            >
              Download CV
            </a>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-gray-300 text-sm">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Your Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Message</label>
                <textarea
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full mt-1 p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-kelly text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-black text-center py-6 border-t border-gray-800 mt-10">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Rajaguru Sivakumar • All Rights Reserved
        </p>
      </footer>
    </>
  );
}
