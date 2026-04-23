import { Layers, Monitor, Server, Smartphone } from "lucide-react";
import Accordion from "./Accordion";
import LetterGlitch from "./LetterGlitch";

const Description = () => {
    return (
        <section className="w-full flex flex-col md:flex-row md:items-stretch justify-center px-8 sm:px-16 md:px-32 lg:px-48 py-16 md:py-24 gap-8 md:gap-16">
            <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-4xl font-medium text-white mb-4">What I do?</h2>
                <Accordion
                    items={[
                        {
                            icon: Monitor,
                            label: "Web Development",
                            content: ["...", "..."],
                        },
                        {
                            icon: Smartphone,
                            label: "Mobile Development",
                            content: ["...", "..."],
                        },
                        {
                            icon: Layers,
                            label: "UI/UX Design & Prototyping",
                            content: ["...", "..."],
                        },
                        {
                            icon: Server,
                            label: "Backend & APIs",
                            content: ["...", "..."],
                        },
                    ]}
                />
            </div>
            <div className="flex-1 my-auto">
                <LetterGlitch
                    glitchColors={["#7c3aed", "#6d28d9", "#5b21b6"]}
                    glitchSpeed={80}
                    centerVignette={false}
                    outerVignette={true}
                    smooth={true}
                />
            </div>
        </section>
    );
};

export default Description;
