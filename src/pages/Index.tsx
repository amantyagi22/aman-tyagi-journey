
import React from 'react';
import Header from '@/components/Header';
import SkillsSection from '@/components/SkillsSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary/10 rounded-lg blur-lg"></div>
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              
              <div className="relative glass-card p-8 rounded-xl border border-muted bg-card shadow-xl">
                <p className="text-lg md:text-xl mb-6 leading-relaxed">
                  Over the past few years, I've worked across startups like Playo, Teal India, and Recruit CRM—shipping features fast, 
                  optimizing performance, and leading backend efforts with tools like Node.js, TypeScript, MongoDB, Redis, and AWS.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Whether it's architecting microservices, enhancing search with Atlas Search, or building developer-first tools, 
                  I'm always chasing impact, learning fast, and building with care.
                </p>
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
