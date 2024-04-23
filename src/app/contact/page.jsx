"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ContactPage = () => {
  const text = "nominchuluun@gmail.com";
  return (
    <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-center text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl">
      nominchuluun@gmail.com <br /> <br /> +43 6647929129
    </div>
  );
};

export default ContactPage;
