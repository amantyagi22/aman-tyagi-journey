
import React from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Briefcase, Code, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss how I can bring my expertise to your team
          </p>
        </div>
        
        <Card className="border-none shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="absolute -left-4 -top-4 w-20 h-20 bg-primary/10 rounded-full blur-lg"></div>
          <div className="absolute right-10 bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
          
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-6 pb-2 border-b">Contact Information</h3>
                
                <div className="space-y-4">
                  <a href="mailto:amantyagi2k@gmail.com" className="flex items-center group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <span className="group-hover:text-primary transition-colors">amantyagi2k@gmail.com</span>
                  </a>
                  
                  <a href="tel:+916396952072" className="flex items-center group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <Phone className="text-primary" size={18} />
                    </div>
                    <span className="group-hover:text-primary transition-colors">+91-639-6952-072</span>
                  </a>
                  
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <Github className="text-primary" size={18} />
                    </div>
                    <span className="group-hover:text-primary transition-colors">GitHub Profile</span>
                    <ExternalLink size={14} className="ml-2 opacity-70" />
                  </a>
                  
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="text-primary" size={18} />
                    </div>
                    <span className="group-hover:text-primary transition-colors">LinkedIn Profile</span>
                    <ExternalLink size={14} className="ml-2 opacity-70" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6 pb-2 border-b">Quick Navigation</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button variant="outline" size="lg" className="justify-start" asChild>
                    <a href="#experience">
                      <Briefcase size={18} className="mr-2" />
                      Experience
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="justify-start" asChild>
                    <a href="#skills">
                      <Code size={18} className="mr-2" />
                      Skills
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="justify-start" asChild>
                    <a href="#education">
                      <Book size={18} className="mr-2" />
                      Education
                    </a>
                  </Button>
                  <Button className="justify-start" size="lg" asChild>
                    <a href="mailto:amantyagi2k@gmail.com">
                      <Mail size={18} className="mr-2" />
                      Email Me
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
