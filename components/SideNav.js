"use client";

import { useState } from "react";

function SideNav() {
  const [activeItem, setActiveItem] = useState("home");
  return (
    <div className="flex flex-col gap-y-5 fixed right-9 bottom-10">
      <a
        href="#home"
        className={`h-4 w-4 rounded-full cursor-pointer ${
          activeItem === "home" ? "bg-orange" : "border border-primary"
        } `}
        onClick={() => setActiveItem("home")}
      />
      <a
        href="#about"
        className={`h-4 w-4 rounded-full cursor-pointer ${
          activeItem === "about" ? "bg-orange" : "border border-primary"
        } `}
        onClick={() => setActiveItem("about")}
      />
      <a
        href="#projects"
        className={`h-4 w-4 rounded-full cursor-pointer ${
          activeItem === "projects" ? "bg-orange" : "border border-primary"
        } `}
        onClick={() => setActiveItem("projects")}
      />
      <a
        href="#contact"
        className={`h-4 w-4 rounded-full cursor-pointer ${
          activeItem === "contact" ? "bg-orange" : "border border-primary"
        } `}
        onClick={() => setActiveItem("contact")}
      />
    </div>
  );
}

export default SideNav;
