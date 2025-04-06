
import React from 'react';
import Header from '@/components/Header';
import SkillsSection from '@/components/SkillsSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary/10 rounded-lg blur-lg"></div>
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              
              <div className="relative glass-card p-8 rounded-xl border border-muted bg-card shadow-xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <Avatar className="h-56 w-56 shadow-xl border-4 border-white">
                      <AvatarImage src="/lovable-uploads/189a6c35-3ca7-46e0-9701-090082def1c9.png" alt="Aman Tyagi" className="object-cover" />
                      <AvatarFallback>AT</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                    <p className="text-base md:text-lg mb-4 leading-relaxed">
                      I'm a passionate software engineer with both frontend and backend expertise. My journey has included working across various startups like Playo, Teal India, and Recruit CRM, where I've had the opportunity to build and optimize features across the full technology stack.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Whether it's architecting microservices, enhancing search functionality, or building intuitive user interfaces, I love tackling challenging problems with clean code and thoughtful design. I'm always eager to learn new technologies and expand my skill set.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-12">
                <a 
                  href="#skills" 
                  className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="mb-2">Explore my skills</span>
                  <ArrowDown className="animate-bounce" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <SkillsSection />
        <ExperienceTimeline />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
