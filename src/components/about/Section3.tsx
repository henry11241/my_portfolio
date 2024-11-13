import AnimateOnView from "@/components/ui/AnimationOnView";
import FlashingText from "@/components/ui/FlashingText";

export default function Section2() {
  return (
    <section id="two">
      <div className="inner">
        <AnimateOnView>
          <header className="major">
            <h2>Skills and Progress</h2>
          </header>
          <p>
            I&apos;ve been self-taught for about three years, mainly focusing on
            fully understanding the courses I took. Starting with the basics of{" "}
            <b>
              <FlashingText>HTML</FlashingText>
            </b>
            ,{" "}
            <b>
              <FlashingText>CSS</FlashingText>
            </b>
            , and{" "}
            <b>
              <FlashingText>JavaScript</FlashingText>
            </b>
            , I learned how to use tools like{" "}
            <b>
              <FlashingText>VS Code</FlashingText>
            </b>
            , the{" "}
            <b>
              <FlashingText>terminal</FlashingText>
            </b>
            , and{" "}
            <b>
              <FlashingText>GitHub</FlashingText>
            </b>
            . I then advanced to topics like{" "}
            <b>
              <FlashingText>TypeScript</FlashingText>
            </b>{" "}
            for type checking,{" "}
            <b>
              <FlashingText>React</FlashingText>
            </b>{" "}
            for front-end frameworks, the{" "}
            <b>
              <FlashingText>MERN stack</FlashingText>
            </b>{" "}
            for full-stack development, and{" "}
            <b>
              <FlashingText>Next.js</FlashingText>
            </b>{" "}
            as a modern approach to building apps. I believe that only after
            having a solid knowledge foundation can I contribute effectively in
            a real-world job under time pressure, while also quickly picking up
            new technologies when needed in the future.
          </p>
          <ul className="actions">
            <li>
              <a href="/learning-path" className="button next">
                More Details in next page
              </a>
            </li>
          </ul>
        </AnimateOnView>
      </div>
    </section>
  );
}
