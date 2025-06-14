
import FlowingMenu from '@/components/FlowingMenu';

const InterestsSection = () => {
  const interests = [
    {
      link: '#',
      text: 'Building AI-Powered Tools & Assistants',
      image: 'https://picsum.photos/600/400?random=1'
    },
    {
      link: '#',
      text: 'Exploring Open-Source AI Projects',
      image: 'https://picsum.photos/600/400?random=2'
    },
    {
      link: '#',
      text: 'Editing with DaVinci Resolve',
      image: 'https://picsum.photos/600/400?random=3'
    },
    {
      link: '#',
      text: 'Designing Minimal UI Experiences',
      image: 'https://picsum.photos/600/400?random=4'
    }
  ];

  return (
    <section id="interests" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">My Interests</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of AI, creativity, and innovation through hands-on projects and continuous learning
          </p>
        </div>
        <div className="w-full relative rounded-xl overflow-hidden shadow-2xl">
          <FlowingMenu items={interests} />
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
