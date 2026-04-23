import Github from "../icons/Github";
import Gmail from "../icons/Gmail";
import Linkedin from "../icons/Linkedin";
import Silk from "./Silk";
import SocialButton from "./SocialButton";

const techStack = [
    {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
];

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center text-center">
            {/* Background */}
            <div className="absolute inset-0">
                <Silk
                    speed={5}
                    scale={1}
                    color="#7B7481"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>

            <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
                <div className="relative z-10 flex-1 flex items-center px-8 sm:px-16 lg:px-24 pt-24 pb-8">
                    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="flex flex-col gap-6">
                            <p className="text-white/50 text-sm sm:text-base tracking-widest uppercase font-light">
                                Hi, I'm Juliano Aleixo
                            </p>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight">
                                Software
                                <br />
                                Engineer
                            </h1>

                            <div className="flex items-center gap-3 mt-2">
                                <SocialButton href="#">
                                    <Linkedin />
                                </SocialButton>
                                <SocialButton href="#">
                                    <Github />
                                </SocialButton>
                                <SocialButton href="#">
                                    <Gmail />
                                </SocialButton>
                            </div>
                        </div>

                        <div className="flex items-center lg:justify-end">
                            <p className="text-white/60 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-md font-light">
                                Transforming ideas into interactive and seamless
                                digital experiences with cutting-edge{" "}
                                <span className="text-violet-400 font-normal">
                                    frontend development
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>

                {/* <Slider /> */}
            </div>
        </section>
    );
};

export default Hero;
