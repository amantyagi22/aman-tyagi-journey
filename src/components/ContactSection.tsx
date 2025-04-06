
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
        
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="mr-3" size={20} />
                    <a href="mailto:amantyagi2k@gmail.com" className="hover:text-primary transition-colors">
                      amantyagi2k@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-3" size={20} />
                    <a href="tel:+916396952072" className="hover:text-primary transition-colors">
                      +91-639-6952-072
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="mr-3" size={20} />
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="mr-3" size={20} />
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="flex flex-col space-y-3">
                  <Button variant="outline" asChild>
                    <a href="#experience">View Experience</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#skills">View Skills</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#education">View Education</a>
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
