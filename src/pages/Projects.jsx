// src/pages/Projects.jsx
import React, { useState, useEffect } from "react";
import mindron from "../images/mindron.png";
import dharavivegweb from "../images/dharavivegweb.png";
// import dti from "../images/dti.jpeg"; // optional small image for DTI
import ironmanVideo from "../images/ironman.mp4"; // your Ironman video

const projects = [
  {
    name: "Mindron Meditech",
    image: mindron,
    description:
      "Mindron Meditech was my first professional project, where I developed a business/corporate website tailored to the client’s needs. Technologies used: HTML, CSS, JavaScript, React.js.",
    moreContent:
      "I developed the Mindron Meditech website using React.js along with HTML, CSS, and JavaScript, and used Node.js as the backend framework. The website represents the Mindron Meditech company, which provides various high-rated medical equipment like ECG, CTG, etc. It has 4 main pages:\n\n1. Home Page: Showcases main products, company highlights, and insights.\n2. About Us: Provides detailed information about the company.\n3. Products Page: Displays all products sold by the company along with their information.\n4. Contact Page: Shows company location and includes a form to submit queries.\n\nFor submitting the contact form directly to email, I used NodeMailer.",
  },
  {
    name: "Dharavi Veg Web",
    image: dharavivegweb,
    description:
      "Dharavi Veg Web was my final year project, where users can browse and purchase vegetables online securely. Technologies used: React.js, Firebase, Tailwind CSS.",
    moreContent:
      "In this project, users first register with their details (name, email, address, etc.), which are sent to the admin. After registration, users log in to access the product catalog and add items to the cart. Once products are added, users can proceed to payment using Razorpay. After payment, the admin receives a notification with product details, delivery address, and payment status. If the delivery address is serviceable, the admin accepts the order; otherwise, the admin rejects it and refunds the amount. This ensures a smooth e-commerce experience with proper admin control and payment management.",
  },
  {
    name: "DTI App",
    description:
      "DTI Demo was my first company app. It includes login, homepage, and captures 6 images which are saved on the device. Technologies used: Kotlin, Android Studio.",
    moreContent:
      "I developed DTI Demo in Kotlin. The app captures 6 images at frequent intervals and stores them on the device. It is used for diamond testing to determine the quality and type of diamond (CVD, HPHT, or natural). Additional features include local storage and a clean UI design for smooth user experience. GitHub: https://github.com/rajagurusk/dti-demo",
  },
  {
    name: "Ironman",
    video: ironmanVideo,
    description:
      "Ironman project was developed in Semester 2 for the Computer Graphics subject. Written in C++, the project shows Ironman flying above buildings drawn using rectangles and lines.",
    moreContent:
      "This project demonstrates basic 2D graphics using Turbo C++. Ironman flies above a city skyline, where buildings are drawn using rectangles and lines. The project helped me understand object movements, coordinate systems, and rendering in C++ graphics.",
    isVideo: true,
  },
  {
    name: "Courier Service",
    image: null,
    description:
      "Courier Service was a desktop application developed in my 2nd year using Java. It allows users to input their name, contact number, email, product details, quantity, and more. Technologies used: Java, JDBC, and database integration.",
    moreContent:
      "This project is an advanced Java desktop application. It connects to a database using JDBC to store and retrieve courier information. I also created a JAR file so the application can be run by double-clicking it. The project helped me understand Java GUI development, database connectivity, and deploying Java applications.",
    imageClass: "w-full md:w-1/2",
  },
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-black text-white flex flex-col min-h-screen">
      <div className="px-6 md:px-20 py-20 flex-grow pt-28 md:pt-28">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-kelly">My</span> <span className="text-white">Projects</span>
        </h1>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {project.isVideo ? (
                <video
                  src={project.video}
                  className="w-full md:w-1/2 h-auto rounded-xl shadow-lg object-cover"
                  controls
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.name}
                  className={
                    project.imageClass || "w-full md:w-1/2 h-auto rounded-xl shadow-lg object-cover"
                  }
                />
              )}

              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-kelly mb-4">
                  {project.name}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {expandedIndex === index && (
                  <p className="text-gray-400 mb-4 whitespace-pre-line">{project.moreContent}</p>
                )}
                {project.moreContent && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="px-4 py-2 bg-kelly text-white rounded-md font-semibold hover:opacity-90 transition"
                  >
                    {expandedIndex === index ? "View Less" : "View More"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-black text-center py-6 border-t border-gray-800 mt-10">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Rajaguru Sivakumar • All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
