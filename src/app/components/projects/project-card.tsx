"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectCardProps } from "@/Types/types";
import { ChevronUp, Code, ExternalLink, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const firstImage = project.images?.[0];
  const [showAllTags, setShowAllTags] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const maxVisibleTags = 5;
  const hasMoreTags = project.tools.length > maxVisibleTags;
  const visibleTools = showAllTags
    ? project.tools
    : project.tools.slice(0, maxVisibleTags);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Helper function to check if project is less than a month old
  const isNewProject = (dateString: string) => {
    if (!dateString) return false;

    try {
      const projectDate = new Date(dateString);
      const currentDate = new Date();
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(currentDate.getMonth() - 1);

      return projectDate >= oneMonthAgo && projectDate <= currentDate;
    } catch {
      return false;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative h-full"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.15), transparent 40%)`,
        }}
      />

      <Card className="relative flex flex-col h-full justify-between border border-white/10 bg-[#11152c]/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-pink-500/50 hover:shadow-pink-500/10">
        <div className="flex-1">
          <div className="relative overflow-hidden aspect-video">
            {project.videos?.[0] ? (
              <video
                src={project.videos[0]}
                className="w-full h-full object-cover"
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
            ) : firstImage ? (
              <Image
                src={firstImage}
                width={800}
                height={450}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">{project.name}</span>
              </div>
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#11152c] to-transparent opacity-60" />

            {isNewProject(project.date) && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-violet-600 text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg animate-pulse z-10">
                <Sparkles className="w-3 h-3 text-yellow-300" />
                <span className="text-[10px] font-bold tracking-wider">
                  NEW
                </span>
              </div>
            )}
          </div>

          <CardHeader className="p-6 pb-2">
            <Link
              href={`/projects/${project.id}`}
              className="group/title inline-block"
            >
              <CardTitle className="text-2xl font-bold text-white group-hover/title:text-pink-500 transition-colors flex items-center gap-2">
                {project.name}
                <ExternalLink className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-y-0 group-hover/title:translate-x-0 transition-all" />
              </CardTitle>
            </Link>
          </CardHeader>

          <CardContent className="px-6">
            <p className="text-slate-400 line-clamp-2 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {visibleTools.map((tool, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300 rounded-full hover:bg-white/10 hover:border-pink-500/30 transition-colors"
                >
                  {tool}
                </span>
              ))}
              {hasMoreTags && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllTags(!showAllTags);
                  }}
                  className="flex items-center gap-1 text-pink-400 hover:text-pink-300 text-[11px] font-semibold transition-colors pl-1"
                >
                  {showAllTags ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    `+${project.tools.length - maxVisibleTags}`
                  )}
                </button>
              )}
            </div>
          </CardContent>
        </div>

        <CardFooter className="p-6 pt-2 flex gap-4">
          <Link href={project.demo || "#"} target="_blank" className="flex-1">
            <Button
              className={`w-full h-10 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 ${
                project.demo
                  ? "bg-slate-800 hover:bg-pink-600 text-white hover:border-pink-500"
                  : "bg-slate-900 text-slate-600 cursor-not-allowed border-none"
              }`}
              disabled={!project.demo}
            >
              <Globe className="w-4 h-4" />
              Demo
            </Button>
          </Link>
          <Link href={project.code || "#"} target="_blank" className="flex-1">
            <Button
              className={`w-full h-10 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 ${
                project.code
                  ? "bg-slate-800 hover:bg-violet-600 text-white hover:border-violet-500"
                  : "bg-slate-900 text-slate-600 cursor-not-allowed border-none"
              }`}
              disabled={!project.code}
            >
              <Code className="w-4 h-4" />
              GitHub
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
