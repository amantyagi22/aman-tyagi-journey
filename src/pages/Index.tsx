import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import {
  ArrowDown,
  Code,
  Star,
  Zap,
  Users,
  Terminal,
  Database,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Ref for the floating animation elements
  const floatingRef = useRef<HTMLDivElement>(null);

  // Animation effect for floating elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingRef.current) return;

      const elements =
        floatingRef.current.querySelectorAll(".floating-element");

      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || "0.05");
        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;

        (
          el as HTMLElement
        ).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      <main className="flex-grow">
        {/* About Section with Stats */}
        <section id="about" className="py-20 relative">
          <div className="container">
            <div className="max-w-6xl mx-auto relative">
              {/* Decorative elements */}
              <div className="absolute -left-20 top-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="absolute -right-16 bottom-20 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>

              <div className="relative saas-card p-8 md:p-12 rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-2/5 flex justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl transform -translate-y-1/4"></div>
                    <div className="relative z-10">
                      <Avatar className="w-64 h-64 shadow-2xl border-4 border-white relative z-10 animate-float">
                        <AvatarImage
                          src="/assets/images/avatar.png"
                          alt="Aman Tyagi"
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl">
                          AT
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                    </div>
                  </div>

                  <div className="w-full md:w-3/5 animate-fade-in">
                    <h2 className="text-3xl font-bold mb-6 text-gradient">
                      About Me
                    </h2>
                    <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-700">
                      I'm a passionate software engineer with both frontend and
                      backend expertise. My journey has included working across
                      various startups like Playo, Teal India, and Recruit CRM,
                      where I've had the opportunity to build and optimize
                      features across the full technology stack.
                    </p>
                    <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-700">
                      Whether it's architecting microservices, enhancing search
                      functionality, or building intuitive user interfaces, I
                      love tackling challenging problems with clean code and
                      thoughtful design. I'm always eager to learn new
                      technologies and expand my skill set.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 staggered-fade-in">
                      <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg transform transition-all hover:scale-105 hover:shadow-md">
                        <Code className="text-blue-500 mb-2" size={28} />
                        <span className="text-2xl font-bold text-gray-800">
                          2+
                        </span>
                        <span className="text-sm text-gray-600">
                          Years Coding
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg transform transition-all hover:scale-105 hover:shadow-md">
                        <Star className="text-purple-500 mb-2" size={28} />
                        <span className="text-2xl font-bold text-gray-800">
                          20+
                        </span>
                        <span className="text-sm text-gray-600">Projects</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-indigo-50 rounded-lg transform transition-all hover:scale-105 hover:shadow-md">
                        <Zap className="text-indigo-500 mb-2" size={28} />
                        <span className="text-2xl font-bold text-gray-800">
                          5+
                        </span>
                        <span className="text-sm text-gray-600">
                          Technologies
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-pink-50 rounded-lg transform transition-all hover:scale-105 hover:shadow-md">
                        <Users className="text-pink-500 mb-2" size={28} />
                        <span className="text-2xl font-bold text-gray-800">
                          3+
                        </span>
                        <span className="text-sm text-gray-600">Companies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-16">
                <a
                  href="#skills"
                  className="flex flex-col items-center text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  <span className="mb-2">Explore my skills</span>
                  <ArrowDown className="animate-bounce" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <SkillsSection />
        <ExperienceTimeline />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
