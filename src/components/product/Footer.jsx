import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black py-2 px-4 hover:bg-violet-600">
      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/hember-mart%C3%ADnez-de-la-cruz-575ab0148/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            className="text-white mx-2 hover:text-gray-500 transition duration-300 transform hover:scale-110 focus:scale-110 mr-6 mt-6"
            size={35}
          />
        </a>
        <a
          href="https://github.com/hmartinezdc"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub
            className="text-white mx-2 hover:text-gray-500 transition duration-500 transform hover:scale-110 focus:scale-110 mt-6"
            size={35}
          />
        </a>
      </div>
      <p className="text-center text-white  font-bold mt-10">
        © marHem - 2023
      </p>
    </footer>
  );
}

export default Footer;
