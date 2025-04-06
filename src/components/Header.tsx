
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <span className="inline-block px-3 py-1 bg-white/20 text-sm font-medium rounded-full mb-4 backdrop-blur-sm">
              Backend Specialist
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Aman Tyagi</h1>
            <p className="text-xl mb-5 font-medium text-primary-foreground/90">
              Backend-Focused Software Engineer
            </p>
            <p className="text-base md:text-lg mb-6 max-w-2xl text-primary-foreground/80 leading-relaxed">
              I'm a backend-focused Software Engineer with a knack for building real-time, scalable systems that don't just work—they fly. 
              Specializing in Node.js, TypeScript, MongoDB, and distributed systems.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <Mail size={18} />
                <span>amantyagi2k@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <Phone size={18} />
                <span>+91-639-6952-072</span>
              </div>
            </div>
          </div>
          <div className="flex justify-start md:justify-end gap-3">
            <Button variant="secondary" size="lg" className="shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
