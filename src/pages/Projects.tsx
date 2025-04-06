import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Globe, Star } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  type: "Frontend" | "Backend" | "Full Stack";
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  features: string[];
  image?: string;
  pairedWith?: number; // ID of the paired project
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 3,
      title: "ChatStream AI Interface",
      description:
        "A modern chat interface with real-time WebSocket communication, dark mode and syntax highlighting.",
      longDescription:
        "A sleek, modern chat interface built with Next.js and React, featuring WebSocket integration for real-time communication. This project provides a clean, responsive user interface for interacting with AI models.",
      type: "Frontend",
      techStack: [
        "Next.js 14",
        "TypeScript",
        "Custom CSS",
        "React Markdown",
        "Syntax Highlighter",
        "WebSockets",
      ],
      demoUrl: "https://chat-ai-frontend-six.vercel.app/",
      repoUrl: "https://github.com/amantyagi22/chat-ai-frontend",
      features: [
        "Dark/Light mode support",
        "Real-time chat interface",
        "Responsive design",
        "Clean, modern UI",
        "Custom CSS animations",
        "Markdown support",
        "Code syntax highlighting",
        "TypeScript for type safety",
        "Next.js App Router",
        "Modern project structure",
        "Environment variable configuration",
        "Vercel deployment ready",
      ],
      pairedWith: 4,
    },
    {
      id: 4,
      title: "ChatStream AI Backend",
      description:
        "A high-performance Go backend with WebSockets and Hugging Face AI integration.",
      longDescription:
        "A robust Go backend service that powers the ChatStream AI interface. This service handles chat interactions via WebSockets and integrates with Hugging Face's model API to provide real-time AI responses.",
      type: "Backend",
      techStack: [
        "Go 1.21+",
        "Fiber Framework",
        "WebSockets",
        "Hugging Face API",
        "Docker",
        "RESTful API",
      ],
      repoUrl: "https://github.com/amantyagi22/chat-ai-backend",
      features: [
        "High-performance Go backend",
        "Secure API endpoints",
        "Hugging Face model integration",
        "Real-time chat processing",
        "RESTful API design",
        "Docker containerization",
        "CORS support",
        "Request validation",
        "Structured logging",
        "Environmental configuration",
        "HTTP status code handling",
        "Modular project structure",
      ],
      pairedWith: 3,
    },
    {
      id: 1,
      title: "Task Management Application",
      description:
        "A modern task management app with Next.js 14, real-time updates, and Tailwind CSS.",
      longDescription:
        "A sleek and modern task management application built with Next.js 14, featuring real-time updates, GraphQL integration, and a beautiful UI powered by Tailwind CSS.",
      type: "Frontend",
      techStack: [
        "Next.js 14",
        "React 19",
        "TypeScript",
        "GraphQL",
        "TanStack Query",
        "Tailwind CSS",
        "Heroicons",
      ],
      demoUrl: "https://task-management-six-chi.vercel.app/",
      repoUrl: "https://github.com/amantyagi22/task-management",
      features: [
        "Create, edit, and delete tasks",
        "Mark tasks as complete/incomplete",
        "Real-time updates with React Query",
        "Inline editing with optimistic updates",
        "Next.js 14 with App Router",
        "Type-safe GraphQL with Codegen",
        "TanStack Query for state management",
        "Tailwind CSS for styling",
        "TypeScript for type safety",
        "GraphQL Code Generation",
        "React Query DevTools",
        "Hot Module Replacement",
      ],
      pairedWith: 2,
    },
    {
      id: 2,
      title: "Task Management API",
      description: "A GraphQL API service for tasks with real-time updates.",
      longDescription:
        "A GraphQL API service for managing tasks with real-time updates, built with modern technologies and best practices.",
      type: "Backend",
      techStack: [
        "Node.js",
        "Express",
        "GraphQL",
        "Apollo Server",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
        "Render",
      ],
      repoUrl: "https://github.com/amantyagi22/task-management-server",
      features: [
        "Create new tasks",
        "List all tasks",
        "Get task details",
        "Update task title",
        "Mark tasks as complete/incomplete",
        "Delete tasks",
        "Input validation for empty titles",
        "Automatic UUID generation for tasks",
        "Timestamp tracking (created/updated)",
        "Automatic database migrations",
        "Connection pooling",
        "GraphQL API with type safety",
        "Error handling",
        "CORS enabled",
        "Real-time updates",
        "Structured response format",
      ],
      pairedWith: 1,
    },
  ];

  // Group projects by pairing
  const getProjectPairs = () => {
    const pairs: Project[][] = [];
    const processedIds = new Set<number>();

    projects.forEach((project) => {
      if (processedIds.has(project.id)) return;

      processedIds.add(project.id);

      if (project.pairedWith) {
        const pairedProject = projects.find((p) => p.id === project.pairedWith);
        if (pairedProject) {
          processedIds.add(pairedProject.id);
          pairs.push([project, pairedProject]);
        } else {
          pairs.push([project]);
        }
      } else {
        pairs.push([project]);
      }
    });

    return pairs;
  };

  const projectPairs = getProjectPairs();

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="shape-decorator shape-blob bg-blue-500/5 w-96 h-96 -top-20 -right-20"></div>
            <div className="shape-decorator shape-circle bg-indigo-500/5 w-64 h-64 bottom-10 -left-20"></div>
          </div>

          <div className="container relative z-10">
            <div className="space-y-16">
              {projectPairs.map((pair, pairIndex) => (
                <div
                  key={`pair-${pairIndex}`}
                  className={`mb-12 ${
                    pair.length > 1
                      ? "relative p-8 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/30 to-indigo-50/30 shadow-sm"
                      : ""
                  }`}
                >
                  {pair.length > 1 && (
                    <div className="flex items-center justify-center mb-6">
                      <div className="h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent w-full max-w-md"></div>
                      <div className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium mx-4 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
                        {pair[0].title.split(" ")[0]} Application
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent w-full max-w-md"></div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pair.map((project) => (
                      <Card
                        key={project.id}
                        className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col h-[320px]"
                        onClick={() => openProjectModal(project)}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <Badge
                              variant={
                                project.type === "Frontend"
                                  ? "default"
                                  : project.type === "Backend"
                                  ? "secondary"
                                  : "outline"
                              }
                              className={`mb-2 ${
                                project.type === "Backend"
                                  ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                                  : project.type === "Frontend"
                                  ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                                  : ""
                              }`}
                            >
                              {project.type}
                            </Badge>
                            <Star className="text-yellow-400" size={20} />
                          </div>
                          <CardTitle className="text-xl">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-1 mb-1">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow py-2">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="bg-gray-100"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-3 mt-auto">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                          <div className="flex gap-2">
                            {project.repoUrl && (
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                asChild
                              >
                                <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Github size={16} />
                                </a>
                              </Button>
                            )}
                            {project.demoUrl && (
                              <Button
                                size="sm"
                                className="bg-gray-900 text-white hover:bg-gray-800 hover:shadow-sm hover:translate-y-[-1px] transition-all font-medium px-3 border border-gray-800/10"
                                asChild
                              >
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Globe size={16} className="mr-2" /> Live
                                  Preview
                                </a>
                              </Button>
                            )}
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  {pair.length > 1 && (
                    <div className="flex justify-center mt-4">
                      <p className="text-sm bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-medium">
                        Frontend and backend working together as one solution
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Dialog open={!!selectedProject} onOpenChange={closeProjectModal}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <div className="flex items-center gap-2">
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <Badge
                  variant={
                    selectedProject.type === "Frontend"
                      ? "default"
                      : selectedProject.type === "Backend"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {selectedProject.type}
                </Badge>
              </div>
              <DialogDescription>
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="md:col-span-2">
                <h4 className="font-medium text-gray-900 mb-2">Features</h4>
                <ScrollArea className="h-[200px] rounded-md border p-4">
                  <ul className="list-disc list-inside space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-gray-100"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <DialogFooter className="flex justify-between items-center sm:justify-between">
              <div className="text-sm text-gray-500">
                Project ID: {selectedProject.id}
              </div>
              <div className="flex gap-2">
                {selectedProject.repoUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  </Button>
                )}
                {selectedProject.demoUrl && (
                  <Button
                    size="sm"
                    className="bg-gray-900 text-white hover:bg-gray-800 hover:shadow-sm hover:translate-y-[-1px] transition-all font-medium px-3 border border-gray-800/10"
                    asChild
                  >
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={16} className="mr-2" /> Live Preview
                    </a>
                  </Button>
                )}
              </div>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default Projects;
