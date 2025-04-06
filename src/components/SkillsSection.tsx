
import React from 'react';
import { Code, Database, Server, Terminal, Layout, Globe, Search, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = {
    languages: ['JavaScript', 'TypeScript', 'Go', 'C++', 'Java', 'Python', 'SQL', 'Bash'],
    frontend: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Material UI', 'Redux'],
    backend: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL', 'WebSockets'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'],
    infrastructure: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Microservices']
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Decorative shapes */}
      <div className="absolute top-0 inset-0 overflow-hidden">
        <div className="shape-decorator shape-blob bg-blue-500/5 w-96 h-96 -top-20 -left-20"></div>
        <div className="shape-decorator shape-circle bg-indigo-500/5 w-64 h-64 bottom-40 -right-20"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
            Expertise
          </span>
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gradient">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The technologies, languages, and tools I've mastered to build efficient, scalable systems and beautiful user experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in">
          <Card className="saas-card border-none shadow-lg overflow-hidden">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-500/5 rounded-full blur-lg"></div>
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center text-xl">
                <div className="p-2 rounded-lg bg-blue-50 mr-3">
                  <Code className="text-blue-600" size={24} />
                </div>
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap">
                {skills.languages.map(skill => (
                  <span key={skill} className="skill-tag bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="saas-card border-none shadow-lg overflow-hidden">
            <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-indigo-500/5 rounded-full blur-lg"></div>
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center text-xl">
                <div className="p-2 rounded-lg bg-indigo-50 mr-3">
                  <Layout className="text-indigo-600" size={24} />
                </div>
                Frontend
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap">
                {skills.frontend.map(skill => (
                  <span key={skill} className="skill-tag bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="saas-card border-none shadow-lg overflow-hidden">
            <div className="absolute right-8 top-10 w-16 h-16 bg-purple-500/5 rounded-full blur-xl"></div>
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center text-xl">
                <div className="p-2 rounded-lg bg-purple-50 mr-3">
                  <Terminal className="text-purple-600" size={24} />
                </div>
                Backend
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap">
                {skills.backend.map(skill => (
                  <span key={skill} className="skill-tag bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="saas-card border-none shadow-lg overflow-hidden">
            <div className="absolute left-10 bottom-8 w-14 h-14 bg-green-500/5 rounded-full blur-lg"></div>
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center text-xl">
                <div className="p-2 rounded-lg bg-green-50 mr-3">
                  <Database className="text-green-600" size={24} />
                </div>
                Databases
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap">
                {skills.databases.map(skill => (
                  <span key={skill} className="skill-tag bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="saas-card md:col-span-2 lg:col-span-1 border-none shadow-lg overflow-hidden">
            <div className="absolute right-10 bottom-10 w-20 h-20 bg-cyan-500/5 rounded-full blur-xl"></div>
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center text-xl">
                <div className="p-2 rounded-lg bg-cyan-50 mr-3">
                  <Server className="text-cyan-600" size={24} />
                </div>
                Infrastructure
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap">
                {skills.infrastructure.map(skill => (
                  <span key={skill} className="skill-tag bg-cyan-50 text-cyan-700 hover:bg-cyan-100 transition-colors">
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
