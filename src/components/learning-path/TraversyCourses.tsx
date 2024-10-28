"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import CourseCard from "@/components/ui/CourseCard";
import traversymedia_pic01 from "@/../../public/images/traversymedia_pic01.png";
import traversymedia_pic02 from "@/../../public/images/traversymedia_pic02.png";

interface Course {
  img: StaticImageData;
  href: string;
  courseName: string;
}

const courses: Course[] = [
  {
    img: traversymedia_pic01,
    href: "https://www.traversymedia.com/Modern-React-Front-To-Back-Course",
    courseName: "React Front To Back Course",
  },
  {
    img: traversymedia_pic02,
    href: "https://www.traversymedia.com/mern-stack-from-scratch",
    courseName: "MERN Stack From Scratch",
  },
];

export default function TraversyCourses() {
  return (
    <div className="box alt">
      <div className="row gtr50 gtr-uniform">
        {courses.map(({ img, href, courseName }, index) => (
          <CourseCard href={href} key={index}>
            <motion.div
              className="overflow-hidden rounded shadow-lg md:rounded-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src={img} alt={`Picture of ${courseName} Course`} />
            </motion.div>
          </CourseCard>
        ))}
      </div>
    </div>
  );
}
