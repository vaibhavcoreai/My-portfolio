import { motion } from 'motion/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { learningJourneyData } from './ProjectData';
import { ProjectCardTransition } from './ProjectCardTransition';
import { ArrowLeft } from 'lucide-react';

export function JourneyPage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [clickedProject, setClickedProject] = useState<{ id: string; title: string } | null>(null);
    const navigate = useNavigate();

    const handleProjectClick = (e: React.MouseEvent, projectId: string, projectTitle: string) => {
        e.preventDefault();
        setClickedProject({ id: projectId, title: projectTitle });

        // Navigate after animation starts
        setTimeout(() => {
            navigate(`/project/${projectId}`);
        }, 600);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="bg-[#f5f1e8] text-black min-h-screen relative"
        >
            {/* Project card transition overlay */}
            <ProjectCardTransition
                projectTitle={clickedProject?.title}
                isActive={!!clickedProject}
            />

            {/* Fixed Navigation Bar */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1e8] border-b-2 border-black/10"
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Back Button */}
                    <motion.button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-xs tracking-[0.2em] uppercase">Home</span>
                    </motion.button>

                    {/* Logo */}
                    <a href="/" className="text-sm tracking-[0.2em] uppercase">
                        VM
                    </a>
                </div>
            </motion.div>

            {/* Main Content */}
            <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
                <div className="max-w-6xl w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Header */}
                        <div className="mb-16">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-sm tracking-[0.3em] uppercase mb-4 text-neutral-600"
                            >
                                Portfolio
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-5xl md:text-6xl mb-6"
                            >
                                Learning Journey
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg text-neutral-600 max-w-2xl"
                            >
                                My path in Data Science and Machine Learning, from foundations to advanced concepts.
                            </motion.p>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid md:grid-cols-2 gap-12">
                            {learningJourneyData.map((project, index) => (
                                <Link
                                    key={project.id}
                                    to={`/project/${project.id}`}
                                    onClick={(e) => handleProjectClick(e, project.id, project.title)}
                                >
                                    <motion.div
                                        className="cursor-hover group relative"
                                        data-cursor-text="VIEW"
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        {/* Image Container */}
                                        <div className="aspect-[4/3] bg-neutral-200 overflow-hidden mb-4 relative">
                                            <motion.img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover grayscale"
                                                animate={{
                                                    scale: hoveredIndex === index ? 1.05 : 1,
                                                    filter: hoveredIndex === index ? 'grayscale(0%)' : 'grayscale(100%)',
                                                }}
                                                transition={{ duration: 0.6 }}
                                            />

                                            {/* Overlay */}
                                            <motion.div
                                                className="absolute inset-0 bg-black"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>

                                        {/* Project Info */}
                                        <div className="space-y-2">
                                            <h3 className="text-2xl">
                                                {project.title}
                                            </h3>

                                            <div className="flex gap-6 text-sm text-neutral-600">
                                                <span>{project.category}</span>
                                                <span>{project.year}</span>
                                            </div>
                                        </div>

                                        {/* Hover Indicator */}
                                        <motion.div
                                            className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{
                                                opacity: hoveredIndex === index ? 1 : 0,
                                                scale: hoveredIndex === index ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <svg
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </motion.div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}
