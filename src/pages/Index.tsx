
import React from 'react';
import Header from '@/components/Header';
import SkillsSection from '@/components/SkillsSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Over the past few years, I've worked across startups like Playo, Teal India, and Recruit CRM—shipping features fast, 
                optimizing performance, and leading backend efforts with tools like Node.js, TypeScript, MongoDB, Redis, and AWS.
              </p>
              <p className="text-lg">
                Whether it's architecting microservices, enhancing search with Atlas Search, or building developer-first tools, 
                I'm always chasing impact, learning fast, and building with care.
              </p>
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
