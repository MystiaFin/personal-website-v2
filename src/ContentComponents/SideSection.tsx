"use client";
import StackIcons from "@/MinorComponents/StackIcons";
import { useRef } from "react";

interface Connection {
  name: string;
  icon: string;
  url: string;
}

const StacksList = [
  { name: "NextJS", icon: "/icons/nextjs.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
  { name: "NodeJS", icon: "/icons/nodejs.svg" },
  { name: "ExpressJS", icon: "/icons/expressjs.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Prisma", icon: "/icons/prisma.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
];

const ConnectionsList: Connection[] = [
  {
    name: "GitHub",
    icon: "/icons/github.svg",
    url: "https://github.com/mystiafin",
  },
  {
    name: "Instagram",
    icon: "/icons/instagram.svg",
    url: "https://instagram.com/mystiafin",
  },
  {
    name: "Discord",
    icon: "/icons/discord.svg",
    url: "https://discordapp.com/users/331269525989490688",
  },
  { name: "Email", icon: "/icons/mail.svg", url: "mailto:cytrsx01@gmail.com" },
];

const ConnectionButton = ({ conn }: { conn: Connection }) => {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (btnRef.current) {
      btnRef.current.style.setProperty("--x", `${x}px`);
      btnRef.current.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <a
      ref={btnRef}
      href={conn.url}
      target="_blank"
      rel="noopener noreferrer"
      className="connection-btn flex flex-col justify-center items-center w-24 h-24 relative overflow-hidden rounded-sm"
      onMouseMove={handleMouseMove}
    >
      <img
        src={conn.icon}
        alt={conn.name}
        className="w-8 h-8 mb-1 relative z-10"
      />
      <span className="text-sm relative z-10">{conn.name}</span>
    </a>
  );
};

export default function SideSection() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="ml-5 max-w-xs mt-5 border-r border-gray-900 mr-5 sticky top-0">
      {/* Intro */}
      <div className="ml-2">
        <h2 className="text-2xl font-extralight">This is,</h2>
        <h1 className="text-4xl font-light">MystiaFin</h1>
      </div>

      {/* Divider */}
      <div className="my-5 w-76 h-[1px] bg-black"></div>

      {/* Stacks */}
      <div className="ml-2">
        <p className="mb-4 text-md font-light">
          Full-stack Web Developer. <br />
          Mostly with these stacks:
        </p>
        <div className="flex flex-wrap gap-2">
          {StacksList.map((stack) => (
            <StackIcons key={stack.name} name={stack.name} icon={stack.icon} />
          ))}
        </div>
      </div>

      {/* Connections */}
      <div className="ml-2 mt-8">
        <h2 className="font-light text-lg mb-3">Connections:</h2>
        <div className="flex bg-[#1A1B1C] w-48 rounded-sm">
          <div className="grid grid-cols-2 mr-1 w-48">
            {ConnectionsList.map((conn) => (
              <ConnectionButton key={conn.name} conn={conn} />
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-500">© {currentYear} MystiaFin</p>
      </div>
    </main>
  );
}
