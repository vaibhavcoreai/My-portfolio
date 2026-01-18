import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Type, Moon, Sun, ExternalLink, Github } from 'lucide-react';
import { projectsData } from './ProjectData';

type TextSize = 'small' | 'medium' | 'large';

export function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [textSize, setTextSize] = useState<TextSize>('medium');
  const [darkMode, setDarkMode] = useState(false);

  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project not found</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const textSizeClasses = {
    small: {
      heading: 'text-3xl md:text-4xl',
      subheading: 'text-xl md:text-2xl',
      body: 'text-sm',
      label: 'text-xs'
    },
    medium: {
      heading: 'text-4xl md:text-5xl',
      subheading: 'text-2xl md:text-3xl',
      body: 'text-base',
      label: 'text-sm'
    },
    large: {
      heading: 'text-5xl md:text-6xl',
      subheading: 'text-3xl md:text-4xl',
      body: 'text-lg',
      label: 'text-base'
    }
  };

  const currentSize = textSizeClasses[textSize];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-[#f5f5f0] text-black'
        }`}
    >
      {/* Fixed Controls Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 border-b-2 transition-colors duration-300 ${darkMode ? 'bg-black border-white' : 'bg-[#f5f5f0] border-black'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            className={`flex items-center gap-2 px-4 py-2 border-2 rounded-full transition-colors ${darkMode
              ? 'border-white hover:bg-white hover:text-black'
              : 'border-black hover:bg-black hover:text-white'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className={`${currentSize.label} tracking-[0.2em] uppercase`}>Back</span>
          </motion.button>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Text Size Controls */}
            <div className={`flex items-center gap-2 px-4 py-2 border-2 rounded-full ${darkMode ? 'border-white' : 'border-black'
              }`}>
              <Type className="w-4 h-4" />
              <button
                onClick={() => setTextSize('small')}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${textSize === 'small'
                  ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                  : darkMode ? 'hover:bg-white/20' : 'hover:bg-black/10'
                  }`}
              >
                A
              </button>
              <button
                onClick={() => setTextSize('medium')}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${textSize === 'medium'
                  ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                  : darkMode ? 'hover:bg-white/20' : 'hover:bg-black/10'
                  }`}
              >
                A
              </button>
              <button
                onClick={() => setTextSize('large')}
                className={`px-3 py-1 rounded-full text-base transition-colors ${textSize === 'large'
                  ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                  : darkMode ? 'hover:bg-white/20' : 'hover:bg-black/10'
                  }`}
              >
                A
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 border-2 rounded-full transition-colors ${darkMode
                ? 'border-white hover:bg-white hover:text-black'
                : 'border-black hover:bg-black hover:text-white'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`aspect-[16/9] mb-12 overflow-hidden ${darkMode ? 'border-2 border-white' : ''
              }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className={`flex gap-4 mb-6 ${currentSize.label}`}>
              <span className={`px-4 py-2 border-2 rounded-full tracking-[0.2em] uppercase ${darkMode ? 'border-white' : 'border-black'
                }`}>
                {project.category}
              </span>
              <span className={`px-4 py-2 border-2 rounded-full tracking-[0.2em] uppercase ${darkMode ? 'border-white' : 'border-black'
                }`}>
                {project.year}
              </span>
            </div>

            <h1 className={`${currentSize.heading} mb-6`}>
              {project.title}
            </h1>

            <p className={`${currentSize.body} leading-relaxed ${darkMode ? 'text-gray-300' : 'text-neutral-700'
              }`}>
              {project.description}
            </p>
          </motion.div>

          {/* Links Section */}
          {(project.link || project.github) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-12 flex flex-wrap gap-4"
            >
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-8 py-4 border-2 rounded-full tracking-[0.2em] uppercase transition-colors group ${darkMode
                    ? 'border-white hover:bg-white hover:text-black'
                    : 'border-black hover:bg-black hover:text-white'
                    }`}
                >
                  <span className={currentSize.label}>Live Demo</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-8 py-4 border-2 rounded-full tracking-[0.2em] uppercase transition-colors group ${darkMode
                    ? 'border-white hover:bg-white hover:text-black'
                    : 'border-black hover:bg-black hover:text-white'
                    }`}
                >
                  <span className={currentSize.label}>GitHub Repo</span>
                  <Github className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              )}
            </motion.div>
          )}

          {/* Project Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`grid md:grid-cols-2 gap-8 mb-16 pb-16 border-b-2 ${darkMode ? 'border-white/20' : 'border-black/20'
              }`}
          >
            <div>
              <p className={`${currentSize.label} tracking-[0.2em] uppercase mb-2 ${darkMode ? 'text-gray-400' : 'text-neutral-600'
                }`}>
                Learning Period
              </p>
              <p className={`${currentSize.body}`}>{project.duration}</p>
            </div>
            <div>
              <p className={`${currentSize.label} tracking-[0.2em] uppercase mb-2 ${darkMode ? 'text-gray-400' : 'text-neutral-600'
                }`}>
                Focus Area
              </p>
              <p className={`${currentSize.body}`}>{project.role}</p>
            </div>
          </motion.div>

          {/* Challenge Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className={`${currentSize.subheading} mb-6`}>
              Learning Objective
            </h2>
            <p className={`${currentSize.body} leading-relaxed ${darkMode ? 'text-gray-300' : 'text-neutral-700'
              }`}>
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className={`${currentSize.subheading} mb-6`}>
              Approach
            </h2>
            <p className={`${currentSize.body} leading-relaxed ${darkMode ? 'text-gray-300' : 'text-neutral-700'
              }`}>
              {project.solution}
            </p>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className={`${currentSize.subheading} mb-6`}>
              Progress & Outcomes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className={`p-6 border-2 ${darkMode ? 'border-white/40 bg-white/5' : 'border-black/20 bg-black/5'
                    }`}
                >
                  <p className={`${currentSize.body}`}>
                    {result}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className={`${currentSize.subheading} mb-6`}>
              Tools & Concepts
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                  className={`${currentSize.label} px-4 py-2 border-2 rounded-full tracking-[0.15em] uppercase ${darkMode
                    ? 'border-white/60 hover:bg-white hover:text-black'
                    : 'border-black/60 hover:bg-black hover:text-white'
                    } transition-colors cursor-default`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}