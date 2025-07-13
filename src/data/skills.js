import { Database, Monitor, Rocket, Server } from "lucide-react";

const frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "NextJS",
];

const backend = ["Java", "Spring Boot", "Spring Security", "NestJS"];

const dataBases = ["MySQL", "MariaDB", "PostgreSQL", "MongoDB"];

const devops = ["Docker", "Git", "GitHub"];

export const skillCategories = [
  {
    name: "Frontend",
    skills: frontend,
    color: "from-blue-500 to-cyan-400",
    textColor: "text-blue-300",
    border: "border-blue-500/30",
    icon: Monitor,
    hoverColor: "hover:text-blue-400",
  },
  {
    name: "Backend",
    skills: backend,
    color: "from-green-500 to-emerald-400",
    textColor: "text-green-300",
    border: "border-green-500/30",
    icon: Server,
    hoverColor: "hover:text-green-400",
  },
  {
    name: "Databases",
    skills: dataBases,
    color: "from-indigo-600 to-slate-500",
    textColor: "text-indigo-300",
    border: "border-indigo-500/30",
    icon: Database,
    hoverColor: "hover:text-indigo-400",
  },
  {
    name: "DevOps",
    skills: devops,
    color: "from-orange-500 to-red-400",
    textColor: "text-orange-300",
    border: "border-orange-500/30",
    icon: Rocket,
    hoverColor: "hover:text-orange-400",
  },
];
