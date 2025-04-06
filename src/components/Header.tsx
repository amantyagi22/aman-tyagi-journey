
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="py-8 md:py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Aman Tyagi</h1>
            <p className="text-lg md:text-xl mb-4">Backend-Focused Software Engineer</p>
            <p className="text-sm md:text-base mb-4 max-w-2xl">
              I'm a backend-focused Software Engineer with a knack for building real-time, scalable systems that don't just work—they fly. 
              Specializing in Node.js, TypeScript, MongoDB, and distributed systems.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                <Mail size={16} />
                <span>amantyagi2k@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} />
                <span>+91-639-6952-072</span>
              </div>
            </div>
          </div>
          <div className="flex justify-start md:justify-end gap-3">
            <Button variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} className="mr-2" />
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
