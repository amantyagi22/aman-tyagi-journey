import React from "react";
import { Book, Award, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shape-decorator shape-blob bg-indigo-500/5 w-96 h-96 -bottom-20 -left-20"></div>
        <div className="shape-decorator shape-circle bg-blue-500/5 w-64 h-64 top-40 -right-20"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gradient">
            Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            My academic journey and foundation in computer science
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <Card className="saas-card border-none shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4">
                    <Book className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Bachelor of Technology
                  </h3>
                  <p className="text-blue-100">
                    Computer Science and Engineering
                  </p>

                  <div className="mt-8 space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-blue-200" />
                      <span>2019 - 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-200" />
                      <span>Uttar Pradesh, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-blue-200" />
                      <span className="font-medium">GPA: 8.23/10</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-semibold text-xl text-gray-800">
                      Dr. A.P.J. Abdul Kalam Technical University
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      asChild
                    >
                      <a
                        href="https://aktu.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} className="mr-1" /> Visit
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-3 text-gray-700">
                      Relevant Coursework:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                        <span className="text-gray-800 text-sm">
                          Data Structures & Algorithms
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span className="text-gray-800 text-sm">
                          Operating Systems
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span className="text-gray-800 text-sm">
                          Software Engineering
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-gray-800 text-sm">
                          Computer Networks
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                        <span className="text-gray-800 text-sm">
                          Cloud Computing
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        <span className="text-gray-800 text-sm">
                          DBMS & NoSQL
                        </span>
                      </div>
                    </div>

                    <p className="mt-6 text-gray-600">
                      Gained comprehensive knowledge in computer science
                      fundamentals, advanced programming concepts, and software
                      design principles. Participated in various technical
                      projects and hackathons.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
