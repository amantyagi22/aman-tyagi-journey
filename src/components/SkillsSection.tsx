
import React from 'react';
import { Code, Database, Server, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = {
    languages: ['JavaScript', 'TypeScript', 'Go', 'C++', 'Java', 'Python', 'SQL', 'Bash'],
    libraries: ['Node.js', 'Next.js', 'React.js'],
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Kubernetes', 'Docker', 'AWS', 'Terraform', 'Redis', 'Elasticsearch']
  };

  return (
    <section id="skills" className="py-12 bg-secondary">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Code className="mr-2" size={20} />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap">
                {skills.languages.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Terminal className="mr-2" size={20} />
                Libraries & Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap">
                {skills.libraries.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Database className="mr-2" size={20} />
                <Server className="mr-2" size={20} />
                Technologies & Infrastructure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap">
                {skills.technologies.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
