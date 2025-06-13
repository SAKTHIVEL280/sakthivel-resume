import FlowingMenu from "@/components/FlowingMenu";
import { GradientText } from "@/components/ui/gradient-text";

const interests = [
  {
    link: "#generative-ai",
    text: "Generative AI",
    image: "https://images.unsplash.com/photo-1677497418394-581977b13c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    link: "#machine-learning",
    text: "Machine Learning",
    image: "https://images.unsplash.com/photo-1518770660439-464c4c52ef31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    link: "#natural-language-processing",
    text: "Natural Language Processing",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
  },
  {
    link: "#computer-vision",
    text: "Computer Vision",
    image: "https://images.unsplash.com/photo-1515879218367-8466d9148dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    link: "#robotics",
    text: "Robotics",
    image: "https://images.unsplash.com/photo-1576766529448-c8245bc79193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    link: "#quantum-computing",
    text: "Quantum Computing",
    image: "https://images.unsplash.com/photo-1662193495700-4caecd3f6558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const Index = () => {
  return (
    <div className="container relative py-8">
      <div className="grid gap-10 items-start">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <GradientText>
              Current Interests
            </GradientText>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exploring the intersection of AI, creativity, and innovation through hands-on projects and continuous learning
          </p>
        </div>
        <div className="w-full relative rounded-xl overflow-hidden shadow-2xl">
          <FlowingMenu items={interests} />
        </div>
      </div>
    </div>
  );
};

export default Index;
