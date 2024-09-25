import Image, { StaticImageData } from "next/image";
import CourseCard from "@/components/CourseCard";
import traversymedia_pic01 from "../../public/images/traversymedia_pic01.png";
import traversymedia_pic02 from "../../public/images/traversymedia_pic02.png";


interface Course {
  img: StaticImageData; // Type for Next.js images
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
            <Image src={img} alt={`Picture of ${courseName} Course`} />
          </CourseCard>
        ))}
      </div>
    </div>
  );
}
