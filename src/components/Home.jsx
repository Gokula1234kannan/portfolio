import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#3374ff]">Gokula kannan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#3374ff]">I’m a</span>
            <Typewriter
              options={{
                strings: ["Developer.", "Problem Solver.", "Designer."],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Highly skilled MERN stack developer and Solidity developer with
            expertise in building scalable, secure, and user-friendly web
            applications and blockchain solutions. Proficient in designing and
            developing full-stack applications using MongoDB, Express.js,
            React.js, and Node.js, as well as crafting smart contracts and
            decentralized applications on Ethereum and other blockchain
            platforms. Strong problem-solving skills, a passion for innovation,
            and a commitment to delivering high-quality solutions in fast-paced
            environments
          </p>

          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#3374ff]" size={20} />
              <span>Tirunelveli</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#3374ff]" size={20} />
              <span>9698021250</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#3374ff]" size={20} />
              <span>gokulakann12345@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="bg-[#3374ff] px-5 py-2 rounded-2xl font-bold ">
            <a href="/resume.pdf">Download CV</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w-[55%] rounded-[50px]"
            src="/profile.jpg"
            alt="Profile"
          />
          ~
        </div>
      </div>
    </div>
  );
};

export default Home;
