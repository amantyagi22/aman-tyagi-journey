import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shape-decorator shape-blob bg-white/5 w-96 h-96 -top-20 -right-20"></div>
        <div className="shape-decorator shape-circle bg-white/5 w-64 h-64 bottom-10 -left-20"></div>
        <div className="shape-decorator bg-white/5 w-32 h-32 rounded-xl top-40 right-40 rotate-12"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8 staggered-fade-in">
            <span className="inline-flex items-center px-3 py-1 bg-white/10 text-sm font-medium rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              Full-Stack Engineer
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Aman Tyagi
            </h1>

            <p className="text-2xl mb-6 font-medium text-blue-100">
              Software Engineer & Eager Learner
            </p>

            <p className="text-base md:text-lg mb-8 max-w-2xl text-blue-50/90 leading-relaxed">
              I'm a versatile software engineer who enjoys building full-stack
              applications with a strong foundation in backend technologies. I'm
              passionate about learning new technologies and solving complex
              problems with clean, efficient code.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                <Mail size={18} className="text-blue-200" />
                <span className="text-blue-50">amantyagi2k@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                <Phone size={18} className="text-blue-200" />
                <span className="text-blue-50">+91-639-6952-072</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                size="lg"
                className="btn-animated bg-white text-indigo-700 hover:bg-white/90"
                asChild
              >
                <a href="#contact">
                  Get in Touch
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-animated border-white/20 bg-white text-indigo-700 hover:bg-white/90"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden md:flex md:col-span-4 justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
              <div className="flex items-center justify-center gap-3 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl">
                <a
                  href="https://github.com/amantyagi22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-tyagi-700a06190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
                <a
                  href="mailto:amantyagi2k@gmail.com"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Mail size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
