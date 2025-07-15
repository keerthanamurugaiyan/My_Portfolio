import React from 'react';
import { FaTools } from 'react-icons/fa';
import lending from '../../assets/lendwise.jpg';
import foodApplication from '../../assets/Food-Delivery.webp';
import alwinDigital from '../../assets/alwin_digital.png';

const projects = [
  {
    title: "Lendwise – Smart Lending Platform UI",
    shortDesc: "A secure and intuitive lending platform UI built with React.",
    fullDesc:
      "A secure and intuitive lending platform interface built using ReactJS and Bootstrap. Includes modules for loan requests, approvals, and repayment tracking. Integrated API calls for seamless data flow and JWT-based user authentication. Features an admin panel for monitoring activities, user verification, and dispute handling.",
    image: lending,
    url: "#"
  },
  {
    title: "Alwin Digital - Branding Website",
    // title: "Alwin Digital – Modern Branding Website",
    shortDesc: "Responsive static site for a digital branding company.",
    fullDesc:
      "A custom digital branding website developed using ReactJS and Bootstrap for responsive layout and styling. Fully optimized for performance and user accessibility. Integrated React Icons, CSS animations, and Bootstrap utilities for a modern, mobile-first UI. Hosted on Firebase, with a strong focus on branding consistency and smooth user experience.",
    image: alwinDigital,
    url: "https://allwindigital-vadapalani.web.app"
  },
  {
    title: "Food Application - Dynamic Delivery UI",
    shortDesc: "React-based food delivery app with filterable UI and cart.",
    fullDesc:
      "A responsive food delivery UI built with React.js and Material-UI, featuring filterable categories, dynamic food cards, and cart management. Used Redux-Saga for smooth state handling and integrated Formik with validation. Secured with authentication, connected to RESTful APIs, and styled with pixel-perfect layouts using CSS, Bootstrap, and MUI.",
    image: foodApplication,
    url: "#"
  }
];

const Projects = () => {
  return (

    // <section className="bg-[#f9fafb] py-10 px-6">
    //   <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">Projects</h2>

    //   <p className="text-center text-gray-600 text-md mb-10 max-w-2xl mx-auto italic">
    //     A small collection of the things I’ve built — each one a step in my journey!{" "}
    //     <FaTools className="inline align-middle mb-1 text-yellow-600 text-lg" />
    //   </p>

    //   <div id="projects" className="w-full bg-[#E4D4F2] min-h-screen py-16 px-6 flex justify-center items-center">
    //     <div className="max-w-7xl flex flex-wrap justify-center gap-8">

          // {projects.map((project, i) => (
          //   <div key={i}>

          //     {/* 👇 LAPTOP VIEW (Floating Image + Hover Effect) */}

          //     <div className="relative bg-white rounded-2xl shadow-xl w-[280px] xxl:w-[300px] overflow-visible transition-all duration-300 hover:h-[450px] h-[270px] group hidden lg:block">

          //       {/* Floating Image — match card width adjustment */}
          //       <div className="absolute -top-16 left-3 w-[255px] xxl:w-[300px] h-[140px] xxl:h-[160px] shadow-lg z-10 rounded-2xl overflow-hidden">
          //         <img
          //           src={project.image}
          //           alt={project.title}
          //           className="w-full h-full object-cover rounded-2xl"
          //         />
          //       </div>

          //       {/* Content Section */}
          //       <div className="relative top-24 text-center px-4 h-[110px] flex flex-col justify-center items-center">

          //         {/* Default View */}
          //         <div className="transition-all duration-300 group-hover:opacity-0">
          //           <h3 className="text-xl font-semibold text-cyan-700 mb-1 mt-10">{project.title}</h3>
          //           <p className="text-sm text-gray-600 italic mt-3">{project.shortDesc}</p>
          //           {project.url && project.url !== "#" && (
          //             <a
          //               href={project.url}
          //               target="_blank"
          //               rel="noopener noreferrer"
          //               className="text-cyan-500 text-sm font-medium underline hover:text-cyan-400 transition mt-1 inline-block"
          //             >
          //               Visit Website →
          //             </a>
          //           )}
          //         </div>

          //         {/* Hover View */}
          //         <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
          //           <h3 className="text-xl font-semibold text-cyan-700 mb-1 mt-60">{project.title}</h3>
          //           <p className="text-md p-5 text-gray-700 mb-2">{project.fullDesc}</p>
          //           {project.url && project.url !== "#" && (
          //             <a
          //               href={project.url}
          //               target="_blank"
          //               rel="noopener noreferrer"
          //               className="text-cyan-600 font-semibold underline hover:text-cyan-400 transition"
          //             >
          //               Visit Website →
          //             </a>
          //           )}
          //         </div>
          //       </div>
          //     </div>

          //     {/*  MOBILE + TABLET VIEW (NO image, Only long description) */}
          //     <div className="bg-white rounded-2xl shadow-xl w-[100%] md:w-[310px] p-5 flex flex-col gap-3 lg:hidden">
          //       {/* Image - hide only in mobile */}
          //       <img
          //         src={project.image}
          //         alt={project.title}
          //         className="w-full h-[170px] object-cover rounded-xl hidden sm:block"
          //       />

          //       <h3 className="text-xl font-semibold text-cyan-700">{project.title}</h3>
          //       <p className="text-md text-gray-700">{project.fullDesc}</p>

          //       {project.url && project.url !== "#" && (
          //         <a
          //           href={project.url}
          //           target="_blank"
          //           rel="noopener noreferrer"
          //           className="text-cyan-600 mt-3 font-semibold underline hover:text-cyan-400 transition"
          //         >
          //           Visit Website →
          //         </a>
          //       )}
          //     </div>

          //   </div>
          // ))}
    //     </div>
    //   </div>
    // </section>

    

<section className=" py-20 px-6">
  <div className="w-full flex justify-center">
    <div
      id="projects"
      className="w-full max-w-7xl bg-[#E4D4F2] rounded-2xl py-16 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">Projects</h2>

      <p className="text-center text-gray-600 text-md mb-10 max-w-2xl mx-auto italic">
        A small collection of the things I’ve built — each one a step in my journey!{" "}
        <FaTools className="inline align-middle mb-1 text-yellow-600 text-lg" />
      </p>

      <div className="w-full flex flex-wrap justify-center gap-8 lg:mt-20">
           {projects.map((project, i) => (
            <div key={i}>


              <div className="relative bg-white rounded-2xl shadow-xl w-[280px] xxl:w-[300px] overflow-visible transition-all duration-300 hover:h-[510px] h-[270px] group hidden lg:block">

                <div className="absolute -top-16 left-3 w-[255px] xxl:w-[300px] h-[140px] xxl:h-[160px] shadow-lg z-10 rounded-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="relative top-24 text-center px-4 h-[110px] flex flex-col justify-center items-center">

                  <div className="transition-all duration-300 group-hover:opacity-0">
                    <h3 className="text-xl font-semibold text-cyan-700 mb-1 mt-10">{project.title}</h3>
                    <p className="text-sm text-gray-600 italic mt-3">{project.shortDesc}</p>
                    {project.url && project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 text-sm font-medium underline hover:text-cyan-400 transition mt-3 inline-block"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>

                  <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                    <h3 className="text-xl font-semibold text-cyan-700 mb-1 mt-70">{project.title}</h3>
                    <p className="text-md p-5 text-gray-700">{project.fullDesc}</p>
                    {project.url && project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 font-semibold underline hover:text-cyan-400 transition"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl w-[100%] md:w-[310px] p-5 flex flex-col gap-3 lg:hidden">
              
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[170px] object-cover rounded-xl hidden sm:block"
                />

                <h3 className="text-xl font-semibold text-cyan-700">{project.title}</h3>
                <p className="text-md text-gray-700">{project.fullDesc}</p>

                {project.url && project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 mt-3 font-semibold underline hover:text-cyan-400 transition"
                  >
                    Visit Website →
                  </a>
                )}
              </div>

            </div>
          ))}

      </div>
    </div>
  </div>
</section>

  );
};

export default Projects;
