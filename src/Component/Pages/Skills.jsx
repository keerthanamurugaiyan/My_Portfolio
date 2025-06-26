import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiJavascript, SiReact, SiReduxsaga, SiGit, SiMui, SiPrimereact } from 'react-icons/si';
import { HiRocketLaunch } from 'react-icons/hi2';

const skills = [
  {
    name: 'HTML5',
    icon: <SiHtml5 className="text-orange-500 text-5xl" />,
    rating: 5,
    color: '#f97316',
    description: 'Strong foundation in semantic HTML, accessibility, and clean markup. Experienced in structuring scalable, SEO-friendly web pages.',
  },
  {
    name: 'CSS3',
    icon: <SiCss3 className="text-blue-500 text-5xl" />,
    rating: 4,
    color: '#3b82f6',
    description: 'Proficient in Flexbox, Grid, media queries, and responsive UI design. Capable of crafting pixel-perfect layouts for all screen sizes.',
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap className="text-purple-500 text-5xl" />,
    rating: 4.5,
    color: '#8b5cf6',
    description: 'Skilled in building responsive and mobile-first layouts using Bootstrap components and utility classes. Customized themes effectively.',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-cyan-500 text-5xl" />,
    rating: 4,
    color: '#06b6d4',
    description: 'Well-versed in Tailwind’s utility-first approach to rapidly develop clean and modern UIs. Experience with custom configurations and dark mode.',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    rating: 4,
    color: '#facc15',
    description: 'Solid understanding of ES6+, asynchronous programming, and DOM manipulation. Confident in building dynamic and interactive web apps.',
  },
  {
    name: 'React',
    icon: <SiReact className="text-cyan-400 text-5xl" />,
    rating: 4.5,
    color: '#06b6d4',
    description: 'Experienced with React hooks, component design, props/state, and context API. Focused on building scalable and reusable UI components.',
  },
  {
    name: 'Redux Saga',
    icon: <SiReduxsaga className="text-purple-400 text-5xl" />,
    rating: 4,
    color: '#a855f7',
    description: 'Efficient in managing complex side effects using Redux Saga. Familiar with watcher-worker patterns and real-time data handling.',
  },
  {
    name: 'Git',
    icon: <SiGit className="text-gray-700 text-5xl" />,
    rating: 3.5,
    color: '#6b7280',
    description: 'Comfortable with Git version control, branching strategies, and collaborative workflows. Regularly use GitHub for code reviews and version tracking.',
  },
  {
    name: 'Material UI',
    icon: <SiMui className="text-blue-400 text-5xl" />,
    rating: 3,
    color: '#0284c7',
    description: 'Capable of building enterprise-grade UIs with Material UI’s component library. Customization with themes and responsive design included.',
  },
  {
    name: 'PrimeReact',
    icon: <SiPrimereact className="text-purple-300 text-5xl" />,
    rating: 3,
    color: '#c084fc',
    description: 'Hands-on experience using PrimeReact components for rapid UI development. Suitable for data-heavy dashboards and form-intensive modules.',
  },
];

const renderStars = (rating, color) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} color={color} className="mx-0.5" />);
  }

  if (hasHalf) {
    stars.push(<FaStarHalfAlt key="half" color={color} className="mx-0.5" />);
  }

  while (stars.length < 5) {
    stars.push(<FaRegStar key={`empty-${stars.length}`} color={color} className="mx-0.5" />);
  }

  return <div className="flex mb-2">{stars}</div>;
};

const Skills = () => {
  return (
    <section className="bg-[#f9fafb] py-1 px-6 overflow-hidden">

      <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">My Skills</h2>

      <p className="text-center text-gray-600 text-md mb-10 max-w-2xl mx-auto italic">
        Building seamless, high-performing interfaces where design meets data and every interaction feels effortless!{" "}
        <HiRocketLaunch className="inline align-middle text-purple-600 text-xl" />
      </p>


      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {skills.map((skill, i) => (

          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: i % 2 === 0 ? -50 : 50,
              y: i % 3 === 0 ? -30 : 30,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, type: 'spring', stiffness: 100 }}
            // viewport={{ once: true, amount: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative bg-[#1f2937] text-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-between h-52 overflow-hidden group"
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const rotateY = ((x / rect.width) - 0.5) * 40;
              const rotateX = ((0.5 - y / rect.height)) * 40;
              card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            }}
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>

            {renderStars(skill.rating, skill.color)}
            <p className="text-sm">{skill.rating}/5</p>

            <div className="w-full h-2 rounded-full bg-gray-700 mt-2">
              <div
                className="h-full rounded-full"
                style={{ width: `${(skill.rating / 5) * 100}%`, backgroundColor: skill.color }}
              ></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center bg-[#1f2937] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            >
              <div className="mb-3">{skill.icon}</div>
              <p className="text-sm px-2">{skill.description}</p>
            </motion.div>

          </motion.div>
        ))}
      </div>
    </section>

  );
};

export default Skills;