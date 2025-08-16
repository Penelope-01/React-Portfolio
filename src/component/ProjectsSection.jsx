import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Online Registration of Almuslim Boarding School",
        Description: "Online registration for new student at Almuslim Islamic Boarding School with SHA-256 algorithm to secure data.",
        image: "/Projects/Project1.png",
        tags: ["HTML/CSS", "PHP", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 1,
        title: "Cake Shop",
        Description: "Shopping cake website with interactive and freshy UI.",
        image: "/Projects/Project2.png",
        tags: ["HTML/CSS", "JavaScript", "Node.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 1,
        title: "Simple landing page of Coffe Roastery",
        Description: "A best landing page for Coffe Roastery shop with green and white theme",
        image: "/Projects/Project3.jpg",
        tags: ["HTML/CSS", "JavaScript", "Figma"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1 text-left">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4 text-justify">{project.Description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3 mb-5">
                                    <a href={project.demoUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.demoUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="#" className="cosmic-button flex items-center w-fit mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/> 
                </a>
            </div>
        </div>
    </section>
}