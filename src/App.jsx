import { useEffect, useState } from "react";
import "./App.css";
import { Menu, X } from "feather-icons-react/build/IconComponents";
import ecommerce from "./assets/ecommerce.png";
import zuitt from "./assets/zuitt.png";
import secuna from "./assets/secuna.png";
import logo from "./assets/leologo.png";
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App max-w-[100vw] min-h-[100vh]">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
const Navbar = () => {
  const [animate, setAnimate] = useState("closed");
  const animateVariant = {
    closed: {
      right: "-100%",
      opacity: 1,
    },
    open: {
      x: "0",
      opacity: 1,
    },
  };
  const handleOpenNavbar = () => {
    setAnimate("open");
  };
  const handleCloseNavbar = () => {
    setAnimate("closed");
  };
  return (
    <div className="navbar h-[8vh] bg-white flex items-center justify-between px-4 z-[999999] sm:px-10 relative">
      <div className="flex items-center gap-4">
        <div className="w-10">
          <img src={logo} />
        </div>
        <h4 className="secular text-medium">LEONELL CRUZ</h4>
      </div>

      <div className="md:hidden">
        <Menu onClick={handleOpenNavbar} />
        <motion.ul
          className="fixed right-0 bg-yellow top-0 w-[40%] h-[100vh] p-10 flex flex-col gap-4"
          initial={{ x: "280px", opacity: 1 }}
          animate={animate}
          variants={animateVariant}
          transition={{ type: "spring", duration: 0.8, bounce: 0 }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <X
            className="absolute right-[20px] top-[20px]"
            onClick={handleCloseNavbar}
          />
        </motion.ul>
      </div>
      <ul className="hidden md:flex gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

const Landing = () => {
  const [animate, setAnimate] = useState("end");
  useEffect(() => {
    setTimeout(() => {
      if (animate === "start") {
        setAnimate("end");
      } else {
        setAnimate("start");
      }
    }, 1000);
  }, [animate]);
  const animateVariant = {
    start: {
      y: "15px",
      opacity: 1,
    },
    end: {
      y: 0,
      opacity: 0,
    },
  };
  return (
    <div className="landing h-[92vh] flex flex-col items-center justify-center text-center px-4 z-[1] relative">
      <div className="flex flex-col justify-between h-full pt-40 pb-10">
        <div className="relative flex flex-col gap-6 items-center">
          <h1 className="secular">HEY, I'M LEONELL CRUZ</h1>
          <p className="text-medium max-w-[500px]">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <button className="w-[200px] mx-auto">PROJECTS</button>
        </div>
        <div>
          <div className="relative w-6 h-9 border-[3px] border-[#444] rounded-[30px] py-1 mx-auto">
            <motion.div
              className="w-[6px] h-[6px] bg-[#444] rounded-[50%] mx-auto"
              initial={{ y: 0, opacity: 1 }}
              animate={animate}
              variants={animateVariant}
              transition={{ type: "spring", duration: 0.8 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const frontend = [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "React Native",
    "Jest.Js",
    "NextJs",
    "Vite",
    "Material UI",
    "SASS",
    "TailwindCSS",
    "Bootstrap",
    "Axios",
    "Redux",
    "Redux Toolkit",
    "Framer-Motion",
  ];
  const backend = [
    "Node JS",
    "ExpressJs",
    "MongoDb",
    "Bcrypt",
    "JWTTokens",
    "Javascript",
  ];
  const others = [
    "Git",
    "Postman",
    "Heroku",
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ];
  return (
    <div className="py-20 px-4 lg:flex sm:px-20 md:px-20 2xl:px-[300px] gap-20 bg-[#ededed]">
      <div className="max-w-[500px] mx-auto">
        <div className="lg:w-fit">
          <Title title="About Me" />
        </div>
        <p className="text-center my-10 text-small lg:text-start">
          Hello! My name is Leonell Cruz and I love things that require
          creativity and logical skills. I previously worked as a Special
          Education Teacher back in 2016 after i finished my degree. Ever since,
          graphic design has always piqued my interest that is why i also worked
          as a part-time graphic designer. But as time progress I discovered
          that i have a lot more potential than just design, therefore I decided
          to level up my game and become a Web Developer.
        </p>
      </div>
      <div>
        <h3 className="secular mb-4">My Skills</h3>
        <div className="flex flex-col gap-10">
          <div>
            <h4 className="mb-3 font-[500] text-darkGrey">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {frontend.map((item, index) => {
                return <Skills item={item} />;
              })}
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-[500] text-darkGrey">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {backend.map((item, index) => {
                return <Skills item={item} />;
              })}
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-[500] text-darkGrey">Other Tools</h4>
            <div className="flex flex-wrap gap-2">
              {others.map((item, index) => {
                return <Skills item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const ecommerceTools = [
    "React Js",
    "NodeJS",
    "ExpressJS",
    "MongoDb",
    "Postman",
    "VS Code",
    "Framer-motion",
  ];
  return (
    <div className="py-20 px-4 sm:px-20 md:px-20 2xl:px-[300px] overflow-hidden">
      <Title title="Projects" />
      <div className="text-center mt-10 flex flex-col gap-10 flex-wrap lg:flex-row justify-center items-center">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h4 className="font-[500] text-medium">Ecommerce Website</h4>
          <p className="text-small max-w-[600px] mx-auto">
            This is a capstone project I made during my botcamp with Zuitt
            wherin I used ReactJS for the frontend, NodeJS and Express JS for
            backend and MongoDB as the database.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {ecommerceTools.map((item, index) => {
              return (
                <SmallSkills
                  key={index}
                  item={item}
                />
              );
            })}
          </div>

          <div>
            <img
              src={ecommerce}
              className="project mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h4 className="font-[500] text-medium">Zuitt Clone Website</h4>
          <p className="text-small max-w-[600px] mx-auto">
            Functional Website wherein you can choose and book a web development
            course that you prefer to learn. Also built using ReactJS and other
            Javascript Tools and Frameworks.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {ecommerceTools.map((item, index) => {
              return (
                <SmallSkills
                  key={index}
                  item={item}
                />
              );
            })}
          </div>

          <div>
            <img
              src={zuitt}
              className="project mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h4 className="font-[500] text-medium">Cyber Security Platform</h4>
          <p className="text-small max-w-[600px] mx-auto">
            Functional Website wherein you can choose and book a web development
            course that you prefer to learn. Also built using ReactJS and other
            Javascript Tools and Frameworks.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {ecommerceTools.map((item, index) => {
              return (
                <SmallSkills
                  key={index}
                  item={item}
                />
              );
            })}
          </div>

          <div>
            <img
              src={secuna}
              className="project mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = (prop) => {
  return (
    <div className="cursor-pointer bg-[#fff] w-fit px-4 text-[12px] py-2 text-darkGrey rounded-[5px] hover:translate-y-[-4px] transition">
      {prop.item}
    </div>
  );
};

const SmallSkills = (prop) => {
  return (
    <div className="cursor-pointer bg-[#f1f1f1] w-fit px-2 py-1 text-[12px] text-darkGrey rounded-[5px] hover:translate-y-[-4px] transition">
      {prop.item}
    </div>
  );
};

const Title = (prop) => {
  return (
    <div className="flex justify-center">
      <div className="relative flex justify-center pb-3">
        <h2 className="secular">{prop.title}</h2>
        <div className="w-[30px] h-[6px] bg-yellow  absolute bottom-0 rounded-[5px]"></div>
      </div>
    </div>
  );
};

const Contact = () => {
  const tx = document.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute(
      "style",
      "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
    );
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  }
  const [value, setValue] = useState("");
  return (
    <div className="relative overflow-hidden">
      <div className="bg-[#e1e1e1] py-20 px-4">
        <div>
          <Title title="CONTACT" />
          <div className="bg-[white] shadow p-6 rounded-[10px] max-w-[500px] flex flex-col mx-auto gap-6 mt-10">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Message</label>
              <textarea></textarea>
            </div>
            <div className="flex justify-end">
              <button className="w-[130px]">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
