import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ChevronUp, Facebook, Github, Linkedin, Menu, Twitter, X, Youtube } from 'feather-icons-react/build/IconComponents';
import ecommerce from './assets/ecommerce.png';
import zuitt from './assets/zuitt.png';
import secuna from './assets/secuna.png';
import logo from './assets/leologo.png';
import { motion } from 'framer-motion';
import { useIntersection } from './useIntersection';

function App() {
  const [animate, setAnimate] = useState('closed');
  const animateVariant = {
    closed: {
      right: '-100%',
      opacity: 1,
    },
    open: {
      x: '0',
      opacity: 1,
    },
  };
  const handleOpenNavbar = (prop) => {
    setAnimate('open');
  };
  const handleCloseNavbar = () => {
    setAnimate('closed');
  };

  const refHome = useRef();
  const refAbout = useRef(null);
  const refProjects = useRef();
  const refContact = useRef();

  const inViewport = useIntersection(refHome);

  useEffect(() => {
    console.log('test', inViewport);
  }, [inViewport]);


  return (
    <div className="App max-w-[100vw] min-h-[100vh]">
      <Navbar>
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10">
            <img src={logo} />
          </div>
          <h4 className="chivo text-large font-[600]">LeonellCruz.<span className='text-blue font-[700] secular'>_</span></h4>
        </div>

        <div className="md:hidden">
          <Menu onClick={handleOpenNavbar} />
          <motion.ul
            className="fixed right-0 bg-yellow top-0 w-[40%] h-[100vh] p-10 flex flex-col gap-4"
            initial={{ x: '280px', opacity: 1 }}
            animate={animate}
            variants={animateVariant}
            transition={{ type: 'spring', duration: 0.8, bounce: 0 }}
          >
            <li
              onClick={() => {
                refHome.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                refAbout.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                refProjects.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                refContact.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </li>
            <X className="absolute right-[20px] top-[20px]" onClick={handleCloseNavbar} />
          </motion.ul>
        </div>
        <ul className="hidden md:flex gap-8">
          <li
            onClick={() => {
              refHome.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              refAbout.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              refProjects.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              refContact.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </li>
        </ul>
      </Navbar>
      <div ref={refHome}>
        <Landing />
      </div>
      <div ref={refAbout}>
        <About />
      </div>
      <div ref={refProjects}>
        <Projects />
      </div>
      <div ref={refContact}>
        <Contact />
      </div>
      <Footer />
      <motion.div
        className="hidden md:block fixed top-[30%] bg-[black] min-w-[50px] min-h-[60px] shadow-contact p-4 z-[9999999] opacity-[.6] rounded-r-[5px]"
        initial={{ opacity: 0, x: '-10px' }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ type: 'spring', duration: 1.5, bounce: 0 }}
      >
        <div className="flex flex-col items-center gap-6">
          <Linkedin color="#fff" className="socials-icon" onClick={() => window.open('https://www.linkedin.com/in/leonellcruz/')} />
          <Twitter color="#fff" className="socials-icon" onClick={() => window.open('')} />
          <Youtube color="#fff" className="socials-icon" onClick={() => window.open('https://www.youtube.com/@leonellcruz6948')} />
          <Github color="#fff" className="socials-icon" onClick={() => window.open('https://github.com/leonellcruz7')} />
          <Facebook color="#fff" className="socials-icon" onClick={() => window.open('https://www.facebook.com/leonell.b.cruz')} />
        </div>
      </motion.div>
      {!inViewport ? <motion.div
        className="fixed cursor-pointer bottom-[20px] right-[20px] bg-yellow p-3 rounded-[5px] shadow-contact z-[99999] onHover"
        initial={{ opacity: 0, y: '30px' }}
        animate={{ opacity: .85, y: 0 }}
        transition={{ type: 'spring', duration: .3, bounce: 0 }}
        whileHover={{ y: -10 }}
        onClick={() => {
          refHome.current?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronUp color="#fff" />
      </motion.div> : <></>}

    </div>
  );
}

export default App;
const Navbar = (prop) => {
  const [animate, setAnimate] = useState('closed');
  const animateVariant = {
    closed: {
      right: '-100%',
      opacity: 1,
    },
    open: {
      x: '0',
      opacity: 1,
    },
  };
  const handleOpenNavbar = () => {
    setAnimate('open');
  };
  const handleCloseNavbar = () => {
    setAnimate('closed');
  };
  return <div className="navbar fixed h-[60px] bg-white flex items-center justify-between px-4 z-[999999] sm:px-10 w-full">{prop.children}</div>;
};

const Landing = (prop) => {
  const [animate, setAnimate] = useState('end');
  useEffect(() => {
    setTimeout(() => {
      if (animate === 'start') {
        setAnimate('end');
      } else {
        setAnimate('start');
      }
    }, 1000);
  }, [animate]);
  const animateVariant = {
    start: {
      y: '15px',
      opacity: 1,
    },
    end: {
      y: 0,
      opacity: 0,
    },
  };
  return (
    <div className="landing h-[100vh] flex flex-col items-center justify-center text-center px-4 z-[1] relative">
      <div className="flex flex-col justify-between h-full pt-[350px] pb-10">
        <div className="relative flex flex-col gap-6 items-center">
          <h1 className="secular lg:text-[5vw]">HEY, I'M LEONELL CRUZ</h1>
          <p className="text-medium max-w-[500px]">
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
          </p>
          <button className="w-[200px] mx-auto" onClick={() => window.open('')}>View Resume</button>
        </div>
        <div>
          <div className="relative w-6 h-9 border-[3px] border-[#444] rounded-[30px] py-1 mx-auto">
            <motion.div
              className="w-[6px] h-[6px] bg-[#444] rounded-[50%] mx-auto"
              initial={{ y: 0, opacity: 1 }}
              animate={animate}
              variants={animateVariant}
              transition={{ type: 'spring', duration: 0.8 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const frontend = [
    'HTML',
    'CSS',
    'Javascript',
    'ReactJS',
    'React Native',
    'Jest.Js',
    'NextJs',
    'Vite',
    'Material UI',
    'SASS',
    'TailwindCSS',
    'Bootstrap',
    'Axios',
    'Redux',
    'Redux Toolkit',
    'Framer-Motion',
    'Storybook'
  ];
  const backend = ['Node JS', 'ExpressJs', 'MongoDb', 'Bcrypt', 'JWTTokens', 'Javascript', 'Firebase'];
  const others = ['Git', 'Postman', 'Heroku', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator'];



  return (
    <div className="py-20 px-4 lg:flex sm:px-20 md:px-20 2xl:px-[300px] gap-20 bg-[#ededed]">
      <div className="max-w-[500px] mx-auto">
        <div className="lg:w-fit">
          <Title title="About Me" />
        </div>
        <p className="text-center my-10 text-small lg:text-start">
          I'm a <strong>Frontend Web Developer</strong>  building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects section</strong> . <br /> <br />

          I also like sharing content related to the stuff that I have learned over the years in <strong> Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <strong className='text-blue cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/leonellcruz/')}>Linkedin</strong>  where I post useful content related to Web Development and Programming <br /> <br />

          I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
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
  const ecommerceTools = ['React Js', 'NodeJS', 'ExpressJS', 'MongoDb', 'Postman', 'VS Code', 'Framer-motion'];

  const secunaTools = ['ReactJs', 'HTML', 'SASS', 'CSS', 'Javascript', 'Framer-motion', 'TailwindCss']
  return (
    <div className="py-20 px-4 sm:px-20 md:px-20 2xl:px-[300px] overflow-hidden">
      <Title title="Projects" />
      <div className="text-center mt-10 flex flex-col gap-10 flex-wrap lg:flex-row justify-center items-center">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h4 className="font-[500] text-medium">Ecommerce Website</h4>
          <p className="text-small max-w-[600px] mx-auto">
            This is a capstone project I made during my botcamp with Zuitt wherin I used ReactJS for the frontend, NodeJS and Express JS for backend
            and MongoDB as the database.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {ecommerceTools.map((item, index) => {
              return <SmallSkills key={index} item={item} />;
            })}
          </div>

          <div>
            <img src={ecommerce} className="project mx-auto" />
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h4 className="font-[500] text-medium">Zuitt Clone Website</h4>
          <p className="text-small max-w-[600px] mx-auto">
            Functional Website wherein you can choose and book a web development course that you prefer to learn. Also built using ReactJS and other
            Javascript Tools and Frameworks.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {ecommerceTools.map((item, index) => {
              return <SmallSkills key={index} item={item} />;
            })}
          </div>

          <div>
            <img src={zuitt} className="project mx-auto" />
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h4 className="font-[500] text-medium">Cyber Security Platform</h4>
          <p className="text-small max-w-[600px] mx-auto">
            A Cyber Security Platform which I created along with 2 of my co-developers from SECUNA. It is basically a platforms that Security Researchers or Hackers use in reporting bugs from other company's web applications.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {secunaTools.map((item, index) => {
              return <SmallSkills key={index} item={item} />;
            })}
          </div>

          <div>
            <img src={secuna} className="project mx-auto" />
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
  const tx = document.getElementsByTagName('textarea');
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute('style', 'height:' + tx[i].scrollHeight + 'px;overflow-y:hidden;');
    tx[i].addEventListener('input', OnInput, false);
  }

  function OnInput() {
    this.style.height = 0;
    this.style.height = this.scrollHeight + 'px';
  }
  const [value, setValue] = useState('');
  return (
    <div className="relative overflow-hidden">
      <div className="landing bg-[#fff] px-4">
        <div className="relative py-10">
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

const Footer = () => {
  return (
    <div className="py-10 px-4 sm:px-20 md:px-20 2xl:px-[300px] bg-[black]">
      <div className="flex flex-col md:flex-row justify-between border-b-[1px] border-[#444] pb-8 gap-4">
        <div className='order-2'>
          <h3 className="secular text-white mb-5">LEONELL CRUZ</h3>
          <p className="text-white text-small max-w-[500px]">
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
          </p>
        </div>
        <div className="order-1">
          <h3 className="secular text-white mb-5">SOCIAL</h3>
          <div className="flex gap-4">
            <Linkedin color="#fff" className="socials-icon" onClick={() => window.open('https://www.linkedin.com/in/leonellcruz/')} />
            <Twitter color="#fff" className="socials-icon" onClick={() => window.open('')} />
            <Youtube color="#fff" className="socials-icon" onClick={() => window.open('https://www.youtube.com/@leonellcruz6948')} />
            <Github color="#fff" className="socials-icon" onClick={() => window.open('https://github.com/leonellcruz7')} />
            <Facebook color="#fff" className="socials-icon" onClick={() => window.open('https://www.facebook.com/leonell.b.cruz')} />
          </div>
        </div>
      </div>
    </div>
  );
};
