
import React from 'react';
import { Book, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  return (
    <section id="education" className="py-12 bg-secondary">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Book className="mr-2" size={24} />
          Education
        </h2>
        
        <div className="timeline-item">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">Bachelor of Technology - Computer Science and Engineering</h3>
                  <h4 className="font-medium text-primary">Dr. A.P.J. Abdul Kalam Technical University</h4>
                </div>
                <div className="mt-1 md:mt-0 text-sm text-muted-foreground">
                  <div>Lucknow, India</div>
                  <div>2019 - 2023</div>
                  <div className="flex items-center mt-1">
                    <Award size={16} className="mr-1" />
                    <span>GPA: 8.23</span>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium">Relevant Coursework:</p>
                <p className="text-sm mt-1">
                  Operating Systems, Data Structures, Software Engineering, Computer Networks, 
                  Cloud Computing, Web Mining, DBMS, NoSQL Databases, OOPS in Java, 
                  Python Programming, Design-Analysis of Algorithms
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
