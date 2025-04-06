
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
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies, languages, and tools I've mastered to build efficient, scalable systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 rounded-full blur-lg"></div>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Code className="mr-2 text-primary" size={20} />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap">
                {skills.languages.map(skill => (
                  <span key={skill} className="skill-tag bg-muted hover:bg-muted/80 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-primary/5 rounded-full blur-lg"></div>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Terminal className="mr-2 text-primary" size={20} />
                Libraries & Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap">
                {skills.libraries.map(skill => (
                  <span key={skill} className="skill-tag bg-muted hover:bg-muted/80 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2 border-none shadow-lg hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute right-10 bottom-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Database className="mr-2 text-primary" size={20} />
                <Server className="mr-2 text-primary" size={20} />
                Technologies & Infrastructure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap">
                {skills.technologies.map(skill => (
                  <span key={skill} className="skill-tag bg-muted hover:bg-muted/80 transition-colors">
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
