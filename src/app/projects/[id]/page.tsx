import { projectsData } from "@/../utils/Data/projects-data";
import FeaturedProjects from "@/app/components/projects/_components/FeaturedProjects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Code, Globe, User, Cpu, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

const ProjectDetails = async ({ params }: Props) => {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen  text-white py-12 px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-white hover:text-red-500 transition-colors mb-8 group font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#050505] shadow-2xl mb-12">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.images?.[0] || "/placeholder/placeholder.png"}
              alt={project.name}
              fill
              className="object-cover opacity-20 blur-sm scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
            {/* Project Banner Image */}
            <div className="w-full lg:w-1/2 aspect-video relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src={project.images?.[0] || "/placeholder/placeholder.png"}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            {/* Project Header Info */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="secondary"
                  className="bg-red-500/10 text-red-500 hover:bg-black border-red-500/20 px-3 py-1 font-bold tracking-wider"
                >
                  {project.date || "2024"}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-red-950/20 text-red-400 hover:bg-black border-red-900/30 px-3 py-1 font-bold tracking-wider"
                >
                  {project.role}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-red-100 to-slate-400">
                {project.name}
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-medium italic">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                {project.demo && (
                  <Link href={project.demo} target="_blank">
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 h-auto text-sm rounded-xl shadow-lg shadow-red-600/20 transition-all hover:scale-105 active:scale-95 flex gap-2 font-bold uppercase tracking-widest">
                      <Globe className="w-5 h-5" />
                      Live Preview
                    </Button>
                  </Link>
                )}
                {project.code && (
                  <Link href={project.code} target="_blank">
                    <Button
                      variant="outline"
                      className="border-white/10 bg-white/5 hover:bg-red-950/20 hover:text-red-500 hover:border-red-500/30 text-white px-6 py-3 h-auto text-sm rounded-xl transition-all hover:scale-105 active:scale-95 flex gap-2 font-bold uppercase tracking-widest"
                    >
                      <Code className="w-5 h-5" />
                      View Source
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 flex flex-col gap-16">
            {/* Highlights */}
            <section className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold text-white">
                  Project Highlights
                </h2>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {project.highlights?.map((highlight, index) => (
                  <li
                    key={index}
                    className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-red-500/[0.03] hover:border-red-500/20 transition-all duration-300 flex gap-4"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-slate-300 text-lg leading-relaxed font-medium">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Gallery */}
            {project.images && project.images.length > 1 && (
              <section className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold text-white">
                    Visual Showcase
                  </h2>
                </div>
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.slice(1).map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group bg-[#050505]">
                          <Image
                            src={image}
                            alt={`${project.name} Screenshot ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 shadow-2xl opacity-80 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-red-600/20 border-red-600/30 hover:bg-red-600 text-white transition-all backdrop-blur-md" />
                  <CarouselNext className="right-4 bg-red-600/20 border-red-600/30 hover:bg-red-600 text-white transition-all backdrop-blur-md" />
                </Carousel>
              </section>
            )}
          </div>

          {/* Sidebar (Right) */}
          <aside className="flex flex-col gap-8">
            {/* Tech Stack Card */}
            <Card className="bg-[#050505]/20 border-white/10 rounded-3xl overflow-hidden sticky top-24 shadow-2xl">
              <CardContent className="p-8 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Technologies
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-1.5 bg-white/5 border-white/10 text-slate-300 rounded-full hover:border-red-500/50 hover:bg-red-500/10 hover:text-white transition-all cursor-default font-semibold text-[11px] uppercase tracking-wider"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-900/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Project Details
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 font-medium">Role</span>
                      <span className="text-slate-300 font-bold uppercase tracking-widest text-[10px] bg-white/5 px-2 py-1 rounded-md">
                        {project.role}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 font-medium">
                        Completed
                      </span>
                      <span className="text-slate-300 font-bold">
                        {project.date || "2024"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Link href="/#contact" className="w-full">
                    <Button className="w-full bg-red-600/10 border border-red-600/20 hover:bg-red-600 hover:text-white py-6 rounded-xl text-red-500 font-bold uppercase tracking-widest text-xs transition-all duration-300 group flex gap-2 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                        Discuss This Project
                      </span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Similar Projects */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                Explore More Work
              </h2>
              <p className="text-slate-400 text-lg font-medium">
                Deep dive into other high-performance solutions.
              </p>
            </div>
            <Link
              href="/#projects"
              className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm hover:text-red-400 transition-colors flex items-center gap-2 group"
            >
              View Full Archive{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
          <FeaturedProjects />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
