import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Sections() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether the animation should only occur once
      mirror: true,
    });
  }, []);

  return (
    <div className="scroll-smooth">
      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center snap-start overflow-hidden"
        data-aos="fade-up" // Add fade-up animation
      >
        <img
          src="/rmvbgprofilepicture.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 object-cover object-top"
        />
        <h1 className="text-4xl font-bold">Daniel 'Imran</h1>
        <p className="mt-2 text-lg">Full Stack Developer & Tech Enthusiast</p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen flex flex-col justify-center items-center text-center snap-start overflow-hidden"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-base md:text-lg px-4 md:px-10">
          Hi, I'm Daniel 'Imran, a passionate software engineering student with
          a lifelong love for technology. My journey into the tech world began
          at an early age, inspired by my father, who introduced me to the
          fascinating world of computers. I am currently pursuing a Bachelor's
          degree in Computer Science, specializing in Software Engineering, at
          the International Islamic University Malaysia. I love dabbling in all
          kinds of technologies, from programming languages and frameworks to
          project management, software design architecture, testing, blockchain,
          UI/UX, data structures, networks, and cybersecurity. While some of
          these I've delved deeply into, others I'm exploring at a foundational
          level, driven by curiosity and a desire to learn. Beyond academics,
          I'm actively involved in cybersecurity awareness initiatives and enjoy
          creating challenging CTF (Capture The Flag) competitions to engage and
          educate the community. Staying updated with the latest tech trends and
          participating in forums are some of my favorite activities, allowing
          me to constantly learn and share insights with like-minded
          enthusiasts. With a strong foundation and a curious mind, With a
          strong foundation and a curious mind, I&apos;m always eager to explore
          new challenges and contribute to impactful technological
          advancements.m always eager to explore new challenges and contribute
          to impactful technological advancements.
        </p>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="h-screen flex flex-col justify-center items-center text-center snap-start overflow-hidden"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex space-x-8 max-w-full overflow-x-auto px-4 overflow-hidden">
          {[
            {
              category: "Languages",
              skills: [
                "JavaScript",
                "Python",
                "Java",
                "C++",
                "SQL",
                "Dart",
                "PHP",
                "C#",
              ],
            },
            {
              category: "Web Tech",
              skills: [
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "RESTful APIs",
                "Bootstrap",
                "Tailwind CSS",
                "HTML5",
              ],
            },
            {
              category: "Databases",
              skills: ["MongoDB", "MySQL", "PostgreSQL"],
            },
            {
              category: "Tools",
              skills: ["Git", "Docker", "Cloudflare", "Linux"],
            },
            {
              category: "Concepts",
              skills: [
                "OOP",
                "REST APIs",
                "Software Design Pattern",
                "Software Design Architecture",
                "Blockchain",
                "UI/UX",
                "Data Structures",
                "Cybersecurity",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-lg rounded-lg p-8 text-left text-white min-w-[200px] shrink-0"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold mb-4">{item.category}</h3>
              <ul className="list-disc pl-5">
                {item.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen flex flex-col justify-center items-center text-center snap-start overflow-hidden"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              title: "Stealthify",
              stack: "Angular, Node.js, MongoDB, Express.js",
              description:
                "A data anonymization tool that helps add another layer of security to the stored data",
              github: "https://github.com/Ken69420/Stealthify.git",
              demo: "https://stealthify.dewn.org/homepage",
            },
            {
              title: "HMU",
              stack: "Node.js, Express.js, PostgreSQL",
              description: "Role based messaging system",
              github: "https://github.com/Ken69420/HMU.git",
            },
            {
              title: "MoodMix",
              stack: "Flask, Flutter",
              description: "AI powered music recommendation app",
              github: "https://github.com/Ken69420/MoodMix",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-lg rounded-lg p-8 text-left text-white w-full md:w-1/3 lg:w-1/4"
              data-aos="flip-left" // Add flip-left animation for project cards
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-400">{project.stack}</p>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="h-screen flex flex-col justify-center items-center text-center snap-start overflow-hidden"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
        <div
          className="bg-gray-900 shadow-lg rounded-lg p-8 text-left text-white max-w-lg"
          data-aos="fade-right" // Add fade-right animation
        >
          <h3 className="text-2xl font-bold mb-4">
            Bachelor of Computer Science
          </h3>
          <p className="text-lg text-gray-400">
            International Islamic University Malaysia, 2025
            <br />
            GPA: 3.52/4.0
          </p>
          <h4 className="text-xl font-bold mt-6">Related Coursework</h4>
          <ul className="list-disc pl-5 text-gray-300">
            <li>Data Structures and Algorithms</li>
            <li>Operating Systems</li>
            <li>Database Management Systems</li>
            <li>Software Engineering</li>
            <li>Web Development</li>
            <li>Artificial Intelligence</li>
          </ul>
        </div>
      </section>

      {/* Academic Papers Section */}
      <section
        id="papers"
        className="h-screen flex flex-col justify-center items-center text-center snap-start overflow-hidden"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Academic Papers</h2>
        <div className="flex space-x-8 max-w-full overflow-x-auto px-4 overflow-hidden">
          {[
            {
              title:
                "Enhancing Data Security Through Advanced Data Anonymization",
              link: "https://drive.google.com/file/d/1DE5qeM1dxSK43iCC4bgYOWxhvpnGLjRn/view",
              date: "November 2024",
              description:
                "Utilizing advanced data anonymization techniques to secure sensitive data",
            },
            {
              title: "Predicting Employment Rates in Malaysia",
              link: "https://drive.google.com/file/d/1RVGxJQFPgmB8vM72dBbPMGLbr42ZlziU/view",
              date: "December 2022",
              description:
                "Predictive model to understand the future employment rate in Malaysia.",
            },
            {
              title: "WaqtBot: Your Islamic Time Navigator",
              link: "https://drive.google.com/file/d/1pdqbQ9onxl9CXt8RBuuSvp5kGD1GpIZB/view",
              date: "March 2023",
              description:
                "Islamic Telegram chatbot that helps user by promptly reminding them of prayer times.",
            },
          ].map((paper, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-lg rounded-lg p-8 text-left text-white min-w-[300px]"
              data-aos="slide-up" // Add slide-up animation for paper cards
            >
              <h3 className="text-2xl font-bold">{paper.title}</h3>
              <p className="text-gray-400">{paper.date}</p>
              <p className="mt-2 text-gray-300">{paper.description}</p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex flex-col justify-center items-center text-center snap-start overflow-hidden"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">
          Let's Get In Touch
        </h2>
        <a
          href="mailto:dnielmranazam@gmail.com"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mb-4"
        >
          Send Email
        </a>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/daniel-imran-41a785242/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/dnielmran/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition-colors"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </section>
    </div>
  );
}
