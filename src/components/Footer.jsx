import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3374ff] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/Gokula1234kannan"
            className="hover:text-[#e6d8d8]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/gokula-kannan-j-353542268/"
            className="hover:text-[#e6d8d8]"
          >
            <FaLinkedin size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
