
import React from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Briefcase, Code, Book, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shape-decorator shape-blob bg-blue-500/5 w-96 h-96 -top-20 -right-20"></div>
        <div className="shape-decorator shape-circle bg-indigo-500/5 w-64 h-64 bottom-10 -left-20"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gradient">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>
        
        <Card className="border-none shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="absolute -left-4 -top-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-lg"></div>
          <div className="absolute right-10 bottom-10 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-xl"></div>
          
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 animate-fade-in">
                <h3 className="text-2xl font-bold mb-8 pb-2 border-b border-white/20">Contact Information</h3>
                
                <div className="space-y-6">
                  <a href="mailto:amantyagi2k@gmail.com" className="flex items-center group">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-100">Email</p>
                      <span className="group-hover:text-blue-200 transition-colors">amantyagi2k@gmail.com</span>
                    </div>
                  </a>
                  
                  <a href="tel:+916396952072" className="flex items-center group">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-100">Phone</p>
                      <span className="group-hover:text-blue-200 transition-colors">+91-639-6952-072</span>
                    </div>
                  </a>
                  
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                      <Github className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-100">GitHub</p>
                      <span className="group-hover:text-blue-200 transition-colors flex items-center">
                        GitHub Profile
                        <ExternalLink size={14} className="ml-2 opacity-70" />
                      </span>
                    </div>
                  </a>
                  
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                      <Linkedin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-100">LinkedIn</p>
                      <span className="group-hover:text-blue-200 transition-colors flex items-center">
                        LinkedIn Profile
                        <ExternalLink size={14} className="ml-2 opacity-70" />
                      </span>
                    </div>
                  </a>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/20">
                  <h4 className="font-medium mb-4">Quick Links</h4>
                  <div className="flex flex-wrap gap-3">
                    <a href="#experience" className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                      <Briefcase size={12} className="inline mr-1" /> Experience
                    </a>
                    <a href="#skills" className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                      <Code size={12} className="inline mr-1" /> Skills
                    </a>
                    <a href="#education" className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                      <Book size={12} className="inline mr-1" /> Education
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-7 p-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
                <h3 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-100">Send Me a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Doe" className="border-gray-200 focus:border-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="border-gray-200 focus:border-blue-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can I help you?" className="border-gray-200 focus:border-blue-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Write your message here..." 
                      className="min-h-32 border-gray-200 focus:border-blue-500" 
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full btn-animated bg-gradient-to-r from-blue-600 to-indigo-600">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
