"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import MyAppsCard from "@/components/ui/CourseCard";
import random_quote_machine from "@/../../public/images/myApps/random-quote-machine.png";
import markdown_previewer from "@/../../public/images/myApps/markdown-previewer.png";
import drum_machine from "@/../../public/images/myApps/drum-machine.png";

interface MyApps {
  img: StaticImageData; // Type for Next.js images
  href: string;
  github: string;
  appName: string;
}

const myApps: MyApps[] = [
  {
    img: random_quote_machine,
    href: "https://random-quote-machine-mu-ten.vercel.app/",
    github: "https://github.com/henry11241/random-quote-machine",
    appName: "Random Quote Machine",
  },
  {
    img: markdown_previewer,
    href: "https://markdown-previewer-three-teal.vercel.app/",
    github: "https://github.com/henry11241/markdown-previewer",
    appName: "Markdown Previewer",
  },
  {
    img: drum_machine,
    href: "https://drum-machine-nu-beige.vercel.app/",
    github: "https://github.com/henry11241/drum-machine",
    appName: "Drum Machine",
  },
];

export default function MyApps() {
  return (
    <div className="flex justify-center">
      <div className="gtr50 gtr-uniform grid md:grid-cols-2 place-items-center">
        {myApps.map(({ img, href, github, appName }, index) => (
          <div
            className="m-4 xl:m-8 max-w-[460px] flex-col text-center xl:max-w-[560px]"
            key={index}
          >
            <MyAppsCard href={href} key={index}>
              <motion.div
                className="mx-6 overflow-hidden rounded shadow-lg md:rounded-xl lg:mx-2 xl:mx-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image src={img} alt={`Picture of ${appName} Course`} />
              </motion.div>
            </MyAppsCard>
            <a
              className="button small"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
