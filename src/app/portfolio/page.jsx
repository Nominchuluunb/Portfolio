"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Horeca HERO",
    desc: "Das Horeca HERO Schulungprogramm für Onboarding und Compliance in Gastronomie und Hotellerie. Der Horeca HERO ist die innovative System-as-a-Service Lösung, die Dich dabei unterstützt, gesetzliche Vorschriften und Arbeitsabläufe effizient umzusetzen.",
    img: "https://portfolio.nominchuluun.eu/wp-content/uploads/2024/04/horeca-scaled.webp",
    link: "https://horeca-hero.com",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Film Nomad",
    desc: "Film Nomad, a film development program designed to support Mongolian filmmakers in bringing their stories to the screen. The program is dedicated to nurturing the talent and creativity of emerging and established filmmakers in Mongolia, providing them with the resources, training, and mentorship needed to develop their projects and advance their careers.",
    img: "https://portfolio.nominchuluun.eu/wp-content/uploads/2024/04/filmnomad.jpeg",
    link: "https://filmnomad.mn/en/home-en/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Alcatel Enjoy.Now",
    desc: "Enjoy.now is the essential app for Alcatel smartphone users. It’s full of tips and tricks to help you make the most of your device and enjoy the full Alcatel experience. But this app also delivers much, much more – think of enjoy.now as your personal gateway to exclusive offers, discounts and prizes.",
    img: "https://portfolio.nominchuluun.eu/wp-content/uploads/2024/04/enjoynow.jpg",
    link: "",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "TCL Mobile App",
    desc: "https://www.youtube.com/watch?v=RuNy1UvVh9k",
    img: "https://portfolio.nominchuluun.eu/wp-content/uploads/2024/04/tcl.jpg",
    link: "https://xd.adobe.com/view/03b6bb4d-e8d0-4e67-a351-fe9f4188433d-56e5",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-black text-white font-semibold m-4 rounded">
                      Open
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl">
          Thank you for visiting my portfolio!
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
