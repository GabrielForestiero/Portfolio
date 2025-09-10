import { motion, easeOut } from 'framer-motion';
import { useState, type SetStateAction } from 'react';
import {
    Code, Database, Server,
    Palette, GitBranch,
    Wrench,
    ChevronLeft, ChevronRight
} from 'lucide-react';

// Componente SkillCard extraído y modificado para usar los logos
type Skill = { name: string; logo: string; };
type SkillCategory = {
    category: string;
    icon: React.ElementType;
    color: string;
    bgColor: string;
    borderColor: string;
    iconColor: string;
    skills: Skill[];
};

interface SkillCardProps {
    category: SkillCategory;
    categoryIndex: number;
    itemVariants: any;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, categoryIndex, itemVariants }) => {
    return (
        <motion.div
            className={`group relative bg-gray-900/50 backdrop-blur-sm border ${category.borderColor} rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-${category.color}-400/20 min-h-[320px]`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
        >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
                <motion.div
                    className={`w-12 h-12 ${category.bgColor} border ${category.borderColor} rounded-lg flex items-center justify-center ${category.iconColor}`}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    <category.icon className="w-6 h-6" />
                </motion.div>
                <div>
                    <h3 className={`text-lg font-mono font-semibold text-white group-hover:${category.iconColor} transition-colors`}>
                        {category.category}
                    </h3>
                </div>
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                    <motion.div
                        key={skillIndex}
                        className={`group/skill flex items-center gap-3 p-3 ${category.bgColor} border ${category.borderColor} rounded-lg hover:bg-opacity-20 transition-all duration-300`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                    >
                        <motion.div
                            className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                className="w-6 h-6 object-contain"
                                style={{
                                    filter: skill.name === 'Next.js' || skill.name === 'GitHub' || skill.name === 'Express' || skill.name === 'Vercel' || skill.name === 'MongoDB' ? 'invert(1)' : 'none'
                                }}
                            />
                        </motion.div>
                        <span className="text-white font-mono text-sm font-medium flex-grow">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Status indicator */}
            <motion.div
                className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full"
                animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: categoryIndex * 0.3
                }}
            />
        </motion.div>
    );
};

const SkillsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const skillCategories = [
        {
            category: 'Frontend',
            icon: Code,
            color: 'cyan',
            bgColor: 'bg-cyan-400/10',
            borderColor: 'border-cyan-400/30',
            iconColor: 'text-cyan-400',
            skills: [
                {
                    name: 'React.js',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                },
                {
                    name: 'Next.js',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                },
                {
                    name: 'Angular',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
                },
            ]
        },
        {
            category: 'Estilos / UI',
            icon: Palette,
            color: 'pink',
            bgColor: 'bg-pink-400/10',
            borderColor: 'border-pink-400/30',
            iconColor: 'text-pink-400',
            skills: [
                {
                    name: 'Tailwind CSS',
                    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
                },
                {
                    name: 'Sass',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
                },
                {
                    name: 'Styled Components',
                    logo: 'https://styled-components.com/logo.png'
                }
            ]
        },
        {
            category: 'Backend',
            icon: Server,
            color: 'green',
            bgColor: 'bg-green-400/10',
            borderColor: 'border-green-400/30',
            iconColor: 'text-green-400',
            skills: [
                {
                    name: 'Node.js',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                },
                {
                    name: 'Express',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
                },
                {
                    name: 'Java',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
                },
            ]
        },
        {
            category: 'Base de datos',
            icon: Database,
            color: 'blue',
            bgColor: 'bg-blue-400/10',
            borderColor: 'border-blue-400/30',
            iconColor: 'text-blue-400',
            skills: [
                {
                    name: 'MongoDB',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                },
                {
                    name: 'MySQL',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
                },
                {
                    name: 'PostgreSQL',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
                }
            ]
        },
        {
            category: 'Herramientas',
            icon: Wrench,
            color: 'orange',
            bgColor: 'bg-orange-400/10',
            borderColor: 'border-orange-400/30',
            iconColor: 'text-orange-400',
            skills: [
                {
                    name: 'Docker',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                },
                {
                    name: 'Postman',
                    logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
                },
                {
                    name: 'JWT',
                    logo: 'https://jwt.io/img/pic_logo.svg'
                },
            ]
        },
        {
            category: 'DevOps / Control de Versión',
            icon: GitBranch,
            color: 'purple',
            bgColor: 'bg-purple-400/10',
            borderColor: 'border-purple-400/30',
            iconColor: 'text-purple-400',
            skills: [
                {
                    name: 'GitLab',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'
                },
                {
                    name: 'GitHub',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
                },
                {
                    name: 'Linux',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
                }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: easeOut }
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === skillCategories.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? skillCategories.length - 1 : prev - 1
        );
    };

    const goToSlide = (index: SetStateAction<number>) => {
        setCurrentSlide(index);
    };

    return (
        <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background con efectos cyberpunk */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-black"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: '50px 50px'
                        }}
                    />
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {Array.from({ length: 15 }, (_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 0.8, 0.3],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                className="max-w-7xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Header */}
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6"
                        style={{
                            textShadow: '0 0 20px rgba(138, 43, 226, 0.3)',
                        }}
                    >
                        <span className="text-white">&gt;</span>
                        <span className="text-purple-400 ml-2">HABILIDADES</span>
                        <span className="text-cyan-400"> TÉCNICAS</span>
                        <motion.span
                            className="text-cyan-400 ml-1"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            █
                        </motion.span>
                    </motion.h2>

                    <div className="flex items-center justify-center gap-6 mb-6">
                        <motion.div
                            className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent max-w-32"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.div
                            className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-400 to-transparent max-w-32"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </div>
                </motion.div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <SkillCard
                            key={categoryIndex}
                            category={category}
                            categoryIndex={categoryIndex}
                            itemVariants={itemVariants}
                        />
                    ))}
                </div>

                {/* Mobile/Tablet Carousel */}
                <div className="lg:hidden relative">
                    {/* Carousel Container */}
                    <div className="relative overflow-hidden rounded-xl">
                        <motion.div
                            className="flex transition-transform duration-300 ease-out"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`
                            }}
                        >
                            {skillCategories.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="w-full flex-shrink-0 px-2">
                                    <SkillCard
                                        category={category}
                                        categoryIndex={categoryIndex}
                                        itemVariants={itemVariants}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-6">
                        <motion.button
                            onClick={prevSlide}
                            className="flex items-center justify-center w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-purple-400/30 rounded-lg text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>

                        {/* Dots Indicator */}
                        <div className="flex gap-2">
                            {skillCategories.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                        ? 'bg-purple-400 shadow-lg shadow-purple-400/50'
                                        : 'bg-gray-600 hover:bg-gray-500'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={nextSlide}
                            className="flex items-center justify-center w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-purple-400/30 rounded-lg text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>

                    {/* Category Counter */}
                    <div className="text-center mt-4">
                        <span className="text-gray-400 font-mono text-sm">
                            {currentSlide + 1} / {skillCategories.length}
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default SkillsSection;