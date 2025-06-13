import SplitText from "@/components/SplitText";
import Waves from "@/components/Waves";
import ScrambledText from "@/components/ScrambledText";
import ScrollVelocity from "@/components/ScrollVelocity";
import FlowingMenu from "@/components/FlowingMenu";
import TextPressure from "@/components/TextPressure";

const Index = () => {
  const interestItems = [
    { 
      link: '#ai', 
      text: 'Artificial Intelligence', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
    },
    { 
      link: '#web-dev', 
      text: 'Web Development', 
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    },
    { 
      link: '#design', 
      text: 'UI/UX Design', 
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop'
    },
    { 
      link: '#mobile', 
      text: 'Mobile Development', 
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <Waves 
          lineColor="rgba(147, 51, 234, 0.3)"
          waveSpeedX={0.01}
          waveSpeedY={0.005}
          waveAmpX={50}
          waveAmpY={30}
          friction={0.95}
          tension={0.01}
        />
      </div>
      
      {/* Glass overlay for depth */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-12">
            {/* Main heading with split text animation */}
            <div className="space-y-6">
              <SplitText 
                text="Mahad Yousuf"
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
                delay={50}
                duration={0.8}
              />
              
              <SplitText 
                text="Full Stack Developer & UI/UX Designer"
                className="text-xl md:text-2xl text-purple-200/80 font-light tracking-wide"
                delay={30}
                duration={0.6}
              />
            </div>

            {/* Scrambled text for interactive element */}
            <div className="py-8">
              <ScrambledText 
                radius={120}
                duration={1.5}
                scrambleChars="01"
                className="text-lg md:text-xl text-white/70 hover:text-white transition-colors cursor-default"
              >
                Crafting digital experiences that matter
              </ScrambledText>
            </div>

            {/* Floating action buttons */}
            <div className="flex gap-6 justify-center">
              <button className="px-8 py-3 bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-lg text-white hover:bg-purple-600/30 transition-all duration-300 hover:scale-105">
                View Work
              </button>
              <button className="px-8 py-3 border border-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Contact Me
              </button>
            </div>
          </div>
        </section>

        {/* Skills Section with flowing text */}
        <section className="py-24">
          <div className="space-y-16">
            <SplitText 
              text="Skills & Technologies"
              className="text-4xl md:text-5xl font-bold text-center text-white"
            />
            
            <ScrollVelocity
              texts={[
                "React • TypeScript • Node.js • Python • JavaScript • HTML5 • CSS3 • Tailwind CSS",
                "Next.js • Express • MongoDB • PostgreSQL • Git • Docker • AWS • Figma • Adobe XD"
              ]}
              velocity={50}
              className="text-2xl md:text-3xl font-semibold text-purple-300/70"
            />
          </div>
        </section>

        {/* Interests Section with FlowingMenu */}
        <section className="py-24">
          <div className="space-y-16">
            <SplitText 
              text="My Interests"
              className="text-4xl md:text-5xl font-bold text-center text-white"
            />
            
            <div style={{ height: '600px', position: 'relative' }}>
              <FlowingMenu items={interestItems} />
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-24">
          <div className="space-y-16">
            <SplitText 
              text="Experience"
              className="text-4xl md:text-5xl font-bold text-center text-white"
            />
            
            <div className="max-w-4xl mx-auto space-y-12">
              {[
                {
                  title: "Senior Full Stack Developer",
                  company: "Tech Innovations Inc.",
                  period: "2023 - Present",
                  description: "Leading development of scalable web applications using React, Node.js, and cloud technologies."
                },
                {
                  title: "UI/UX Designer & Developer",
                  company: "Creative Solutions Ltd.",
                  period: "2021 - 2023", 
                  description: "Designed and developed user-centric interfaces, improving user engagement by 40%."
                },
                {
                  title: "Frontend Developer",
                  company: "StartupXYZ",
                  period: "2020 - 2021",
                  description: "Built responsive web applications and collaborated with design teams to implement pixel-perfect interfaces."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <span className="text-purple-300 font-medium">{item.period}</span>
                    </div>
                    <p className="text-xl text-purple-200">{item.company}</p>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="text-center space-y-12">
            <SplitText 
              text="Let's Build Something Amazing"
              className="text-4xl md:text-5xl font-bold text-white"
            />
            
            <div className="max-w-2xl mx-auto">
              <TextPressure 
                text="GET IN TOUCH"
                fontFamily="Inter"
                textColor="#ffffff"
                className="text-4xl md:text-6xl font-bold cursor-pointer"
                minFontSize={32}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
