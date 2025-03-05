"use client"
import ProjectBox from "./projectBox";

const projects = [
  { image: "/project1.jpg", title: "SpeakEasy", description: "An application + speech model fine-tuned on public speaking data for real-time confidence estimation." },
  { image: "/project2.jpg", title: "Panorama Generator", description: "Creates a panorama by stitching multiple images using FAST/Harris Corner Detection." },
  { image: "/project3.jpg", title: "Neural Network Verifier", description: "Guarantees robustness of a network to input perturbations." },
  { image: "/complex.jpg", title: "Complex Root Visualizer", description: "An application to visualize the number of iterations needed to find a complex root using Newton's method." },
];

export default function ProjectGrid() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-[85%] md:w-[80%] xl:w-[70%]">
        {projects.map((project, index) => (
          <ProjectBox key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
