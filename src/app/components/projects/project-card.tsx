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
import { Code, Globe, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const firstImage = project.images?.[0];
  const [showAllTags, setShowAllTags] = useState(false);
  const maxVisibleTags = 5;
  const hasMoreTags = project.tools.length > maxVisibleTags;
  const visibleTools = showAllTags
    ? project.tools
    : project.tools.slice(0, maxVisibleTags);

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
    <Card className="flex flex-col h-full justify-between border-none bg-[#19223f]  rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div>
        {project.videos?.map((item, index) =>
          item ? (
            <video key={index} src={item} controls />
          ) : (
            <div key={index} className="relative">
              {firstImage ? (
                <>
                  <Image
                    src={firstImage}
                    width={400}
                    height={192}
                    alt={project.name}
                    className="w-full h-48 object-cover object-top rounded-t-md"
                    key={index}
                  />
                  {isNewProject(project.date) && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg animate-pulse">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-semibold">NEW</span>
                    </div>
                  )}
                </>
              ) : (
                <div
                  key={index}
                  className="w-full h-48 bg-muted flex items-center justify-center rounded-t-md"
                >
                  <span className="text-muted-foreground">{project.name}</span>
                </div>
              )}
            </div>
          ),
        )}
        <CardHeader className=" max-sm:pl-6 max-sm:pb-3">
          <Link href={`/projects/${project.id}`}>
            <CardTitle className="text-xl text-white">{project.name}</CardTitle>
          </Link>
        </CardHeader>
        <CardContent>
          <p className="max-sm:text-base lg:text-lg text-muted-foreground line-clamp-3 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 items-center">
            {visibleTools.map((tool, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 max-sm:text-sm text-sm font-medium px-2 py-1 rounded dark:bg-blue-200 dark:text-blue-800"
              >
                {tool}
              </span>
            ))}
            {hasMoreTags && (
              <button
                onClick={() => setShowAllTags(!showAllTags)}
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium px-2 py-1 rounded transition-colors"
              >
                {showAllTags ? (
                  <>
                    <span>Show less</span>
                    <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    <span>+{project.tools.length - maxVisibleTags} more</span>
                    <ChevronDown className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
          </div>
        </CardContent>
      </div>

      <CardFooter className="flex justify-between pt-4">
        <Button
          className="custom-animated-button btn-indigo flex items-center gap-2 text-base max-sm:text-sm"
          disabled={!project.demo}
          variant="outline"
        >
          <Globe />
          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </Link>
        </Button>
        <Button
          variant="outline"
          className="custom-animated-button btn-indigo flex items-center gap-2 text-base max-sm:text-sm"
          disabled={!project.code}
        >
          <Code />
          <Link href={project.code} target="_blank" rel="noopener noreferrer">
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
