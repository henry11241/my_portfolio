import Image, { StaticImageData } from "next/image";
import CourseCard from "@/components/CourseCard";
import course01 from "../../public/images/course01.png";
import course02 from "../../public/images/course02.png";
import course03 from "../../public/images/course03.png";
import course04 from "../../public/images/course04.png";
import course05 from "../../public/images/course05.png";
import course06 from "../../public/images/course06.png";

interface Course {
  img: StaticImageData; // Type for Next.js images
  href: string;
  courseName: string;
}

const courses: Course[] = [
  {
    img: course01,
    href: "https://www.udemy.com/course/the-web-developer-bootcamp",
    courseName: "The Web Developer Bootcamp 2024",
  },
  {
    img: course02,
    href: "https://www.udemy.com/course/git-and-github-bootcamp",
    courseName: "The Git & Github Bootcamp Course",
  },
  {
    img: course03,
    href: "https://www.udemy.com/course/javascript-beginners-complete-tutorial",
    courseName: "The Modern Javascript Bootcamp Course",
  },
  {
    img: course04,
    href: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass",
    courseName: "JavaScript Algorithms and Data Structures Masterclass",
  },
  {
    img: course05,
    href: "https://www.udemy.com/course/learn-typescript/",
    courseName: "Mastering TypeScript - 2024 Edition",
  },
  {
    img: course06,
    href: "https://www.udemy.com/course/modern-react-bootcamp",
    courseName: "The Modern React Bootcamp (Hooks, Context, NextJS, Router)",
  },
];

export default function UdemyCourses() {
  return (
    <div className="box alt">
      <div className="row gtr50 gtr-uniform">
        {courses.map(({ img, href, courseName }, index) => (
          <CourseCard href={href} key={index}>
            <Image src={img} alt={`Picture of ${courseName} Course`} />
          </CourseCard>
        ))}
      </div>
    </div>
  );
}
