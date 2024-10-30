import Image from "next/image";
import CodeLearningPathTitle from "@/../../public/images/titles/CodeLearningPathTitle.svg";
import styles from "./ShimmerText.module.css";

const shimmerEffect =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_4s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/90 before:to-transparent";

export default function shimmer() {
  return (
    <h1>
      <div
        className={`hidden md:block ${shimmerEffect} ${styles.title} relative flex w-full overflow-hidden`}
      >
        {/* Code Learning Path */}
        <Image
          src={CodeLearningPathTitle}
          alt="Code Learning Path Title"
          className="opacity-40"
        />
      </div>
    </h1>
  );
}
