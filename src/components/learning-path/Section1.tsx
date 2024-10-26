import AnimateOnView from "../ui/AnimationOnView";
import FlashingText from "../ui/FlashingText";

export default function Section1() {
  return (
    <section id="one">
      <div className="inner">
        <AnimateOnView>
          <header className="major">
            <h1>Code Learning Path</h1>
          </header>
          <h2>Rough start</h2>
          <p>
            In my first year, when I decided to become a software engineer, I
            enrolled in a course taught in <b>Chinese</b>. This caused a lot of
            difficulties because I couldn&apos;t fully grasp the basic concepts
            due to the{" "}
            <b>
              <FlashingText>language barrier</FlashingText>
            </b>
            . I understood the logical parts while following the course, but
            when it came to writing code from scratch for assignments, I got
            stuck. I couldn&apos;t make any progress without reading the answers
            first.
          </p>
          <p>
            As the course advanced, I had to read more and more documents in
            addition to the course materials, all of which were written in
            English. Due to my lack of foundational knowledge and limited
            English reading experience, I found it difficult to keep up. I tried
            repeating the course a few times but didn&apos;t make much progress.
            I realized I needed an alternative approach, so I found a
            highly-rated course on{" "}
            <b>
              <FlashingText>Udemy</FlashingText>
            </b>{" "}
            and started from scratch, this time in{" "}
            <b>
              <FlashingText>English</FlashingText>
            </b>
            .
          </p>
        </AnimateOnView>
      </div>
    </section>
  );
}
