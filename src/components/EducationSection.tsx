
import React from 'react';
import { Book, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and relevant coursework
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="timeline-item">
            <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between mb-5">
                  <div>
                    <h3 className="font-semibold text-lg text-primary">Bachelor of Technology - Computer Science and Engineering</h3>
                    <h4 className="font-medium text-foreground">Dr. A.P.J. Abdul Kalam Technical University</h4>
                  </div>
                  <div className="mt-3 md:mt-0 text-sm">
                    <div className="flex items-center gap-1 mb-1 text-muted-foreground">
                      <Calendar size={14} className="text-muted-foreground/70" />
                      <span>2019 - 2023</span>
                    </div>
                    <div className="flex items-center mt-1 text-primary">
                      <Award size={16} className="mr-1" />
                      <span className="font-medium">GPA: 8.23</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/40 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                  <p className="text-sm leading-relaxed">
                    Operating Systems, Data Structures, Software Engineering, Computer Networks, 
                    Cloud Computing, Web Mining, DBMS, NoSQL Databases, OOPS in Java, 
                    Python Programming, Design-Analysis of Algorithms
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
