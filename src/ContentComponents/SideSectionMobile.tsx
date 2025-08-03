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

const MobileConnectionButton = ({ conn }: { conn: Connection }) => {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    if (btnRef.current) {
      btnRef.current.style.setProperty("--x", `${x}px`);
      btnRef.current.style.setProperty("--y", `${y}px`);
    }
  };

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
      className="connection-btn flex flex-col justify-center items-center w-20 h-20 relative overflow-hidden rounded-sm"
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
    >
      <img
        src={conn.icon}
        alt={conn.name}
        className="w-6 h-6 mb-1 relative z-10"
      />
      <span className="text-xs relative z-10">{conn.name}</span>
    </a>
  );
};

export default function MobileSideSection() {
  return (
    <div className="mb-8 px-4">
      {/* Intro */}
      <div className="text-center mb-6 mt-48">
        <h2 className="text-4xl font-extralight">This is,</h2>
        <h1 className="text-6xl font-light">MystiaFin</h1>
      </div>

      {/* Divider */}
      <div className="my-6 w-full h-[1px] bg-black"></div>

      {/* Stacks */}
      <div className="mb-6 mt-80">
        <p className="mb-4 text-md font-extralight text-center">
          Full-stack Web Developer. <br />
          Mostly with these stacks:
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {StacksList.map((stack) => (
            <StackIcons key={stack.name} name={stack.name} icon={stack.icon} />
          ))}
        </div>
      </div>

      {/* Connections */}
      <div className="mt-8 mb-80">
        <h2 className="font-light text-lg mb-3 text-center">Connections:</h2>
        <div className="flex justify-center">
          <div className="bg-[#1A1B1C] rounded-sm p-1">
            <div className="grid grid-cols-2 gap-1">
              {ConnectionsList.map((conn) => (
                <MobileConnectionButton key={conn.name} conn={conn} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
