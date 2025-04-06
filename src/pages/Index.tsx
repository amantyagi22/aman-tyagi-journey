
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
