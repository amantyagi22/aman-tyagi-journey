
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const ExperienceTimeline = () => {
  const experiences: Experience[] = [
    {
      company: "Playo",
      position: "Software Engineer",
      location: "Bangalore",
      period: "Sep 2024 - Present",
      description: [
        "Engineered a real-time Leaderboard System using a dense ranking algorithm with tiered Redis caching, reducing response times from 4.5s to 50ms. Leveraged MongoDB aggregation pipelines for multi-filter support, including sports-specific and friends-only rankings.",
        "Executed live migration of chat functionality to SendBird, ensuring zero downtime. Integrated SendBird's platform APIs and seamlessly transferred active user data with full backend coverage.",
        "Integrated MongoDB Atlas Search with geospatial querying to optimize search operations, decreasing query latency from 4 seconds to under 1 second, significantly improving user experience.",
        "Designed and implemented a new User Information Collection system capturing metrics like joining year, games booked, and friends made. Migrated 600,000+ users' data from 3 collections within 50 minutes while ensuring data integrity."
      ],
      skills: ["Node.js", "MongoDB", "Redis", "SendBird", "TypeScript", "JavaScript", "Aggregation Framework", "Atlas Search", "System Design", "Performance Optimization"]
    },
    {
      company: "Teal India",
      position: "Software Developer Intern & Software Developer",
      location: "Bangalore",
      period: "Feb 2023 - Aug 2024",
      description: [
        "Developed an automated legal reporting framework, extracting data from diverse legal forms to generate over 350 reports per day, streamlining legal operations.",
        "Constructed real-time analytics dashboards using Socket.io and introduced sticky-session support for WebSocket scaling across distributed servers.",
        "Designed and launched a custom ReactJS library for PDF highlighting with OCR support and intuitive page navigation, enhancing legal document workflows.",
        "Refactored the core application architecture and reengineered compute-heavy logic, reducing processing latency by 50%. Employed Next.js SSR with advanced TypeScript patterns and modular Node.js microservices.",
        "Architected a frontend visualization framework using custom React hooks, enabling interactive dashboards that improved analytical insight and boosted user engagement by 25%"
      ],
      skills: ["React.js", "Node.js", "TypeScript", "Socket.io", "MongoDB", "PDF.js", "OCR", "Next.js", "System Architecture", "SSR", "Microservices", "Real-time Systems", "Data Visualization"]
    },
    {
      company: "Recruit CRM",
      position: "DevOps Engineer Intern",
      location: "Remote",
      period: "Oct 2022 - Jan 2023",
      description: [
        "Achieved a 75% increase in outbound traffic by enabling NAT Gateway Elastic IP whitelisting, improving platform accessibility and routing."
      ],
      skills: ["AWS", "Networking", "Infrastructure Optimization", "NAT Gateway", "System Configuration"]
    },
    {
      company: "Duckcart",
      position: "Software Engineer Intern",
      location: "Remote",
      period: "Aug 2022 - Sep 2023",
      description: [
        "Directed backend development efforts, leading the engineering team to design and deploy scalable services using Node.js and JavaScript, establishing a high-performance backend foundation."
      ],
      skills: ["Node.js", "JavaScript", "Leadership", "Team Coordination", "Backend Architecture", "Scalable Systems"]
    },
    {
      company: "Sarv",
      position: "Software Engineer Intern",
      location: "Remote",
      period: "Feb 2022 - Jul 2023",
      description: [
        "Reduced Elasticsearch query latency by 30% through advanced query optimization. Authored and published custom NPM packages to streamline common backend operations."
      ],
      skills: ["Elasticsearch", "Node.js", "NPM", "Backend Optimization", "Query Performance"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My career journey building scalable backends and real-time systems
          </p>
        </div>
        
        <div className="relative timeline-container">
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/40 to-primary/10"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item mb-10">
              <Card className="border-none shadow-lg overflow-hidden transition-all hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{exp.position}</h3>
                      <h4 className="font-medium text-foreground">{exp.company}</h4>
                    </div>
                    <div className="mt-2 md:mt-0 text-sm text-muted-foreground flex flex-col md:items-end">
                      <div className="flex items-center gap-1 mb-1">
                        <MapPin size={14} className="text-muted-foreground/70" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-muted-foreground/70" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 mt-4 space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm leading-relaxed">{item}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-5 pt-4 border-t border-border/40">
                    <p className="text-xs text-muted-foreground mb-2">Technologies Used:</p>
                    <div className="flex flex-wrap">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="skill-tag bg-primary/10 text-primary hover:bg-primary/20 transition-colors">{skill}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
