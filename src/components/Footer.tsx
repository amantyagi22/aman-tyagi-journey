import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Logo from "@/components/ui/logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Logo size="sm" variant="light" showText={false} />
              <span className="text-xl font-semibold ml-3">Aman Tyagi</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Software engineer passionate about creating powerful and elegant
              solutions to complex problems.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/amantyagi22"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-tyagi-700a06190/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:amantyagi2k@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <span className="inline-block px-4 py-2 bg-gray-800 text-sm font-medium rounded-full">
              Full-Stack Software Engineer
            </span>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Aman Tyagi. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
