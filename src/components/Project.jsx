const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#3374ff]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#3374ff] font-extrabold text-[32px] mb-4">
              Weather Application
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              * Get instant access to live weather conditions and forecasts. *
              Extended Forecasts. Plan for the week ahead with long-range
              predictions. <br />
              *Technologies used in this Project: React.js
            </p>
            <a
              href="https://gokulweatherapp.netlify.app/"
              className="text-[#3374ff] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Biosta AI Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#3374ff] font-extrabold text-[32px] mb-4">
              CRUD App
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A CRUD App which i done with JavaScript.we can
              Create,Read,Update,Delete the information in the app.
            </p>
            <a
              href="https://gokulcrud.netlify.app/"
              className="text-[#3374ff] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#3374ff] font-extrabold text-[32px] mb-4">
              Book myshow clone
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              I have done just the UI of the Book my show webpage using the HTML
              and css and using the framework BOOTSTRAP
            </p>
            <a
              href="https://gokulshow.netlify.app/"
              className="text-[#3374ff] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>

          

        {/* Project 5 and 6 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          
        </div>
      </div>
    </div>
  );
};

export default Project;
