import AnimateOnView from "@/components/ui/AnimationOnView";
import TraversyCourses from "./TraversyCourses";
import FlashingText from "@/components/ui/FlashingText";

export default function Section3() {
  return (
    <section id="three">
      <div className="inner">
        <AnimateOnView>
          <h2>Exploring More</h2>
          <p>
            When I took the React course mentioned earlier, I noticed that React
            was transitioning from class components to function components at
            that time, but the course didn&apos;t cover this shift yet. I looked
            for other resources and found a YouTube video titled{" "}
            <a
              href="https://www.youtube.com/watch?v=u72H_zZzkcw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>&quot;Web Development in 2023 - A Practical Guide.&quot;</b>
            </a>{" "}
            After watching the video, I gained a better understanding of the
            modern web development environment. As a result, I decided to take
            both a{" "}
            <b>
              <FlashingText>React</FlashingText>
            </b>{" "}
            course and a{" "}
            <b>
              <FlashingText>MERN stack</FlashingText>
            </b>{" "}
            course to explore these more modern approaches for building{" "}
            <b>
              <FlashingText>full-stack</FlashingText>
            </b>{" "}
            apps.
          </p>
        </AnimateOnView>
        <AnimateOnView>
          <TraversyCourses />
        </AnimateOnView>
      </div>
    </section>
  );
}
