import AnimateOnView from "@/components/ui/AnimationOnView";
import UdemyCourses from "./UdemyCourses";
import FlashingText from "@/components/ui/FlashingText";

export default function Section2() {
  return (
    <section id="two">
      <div className="inner">
        <AnimateOnView>
          <h2>Lay a Wide Foundation</h2>
          <UdemyCourses />
        </AnimateOnView>
        <AnimateOnView>
          <p>
            I took these courses at a slow and steady pace, listening to the
            instructions word by word and following along with every line of
            code. At the same time, I describe the concepts I&apos;ve learned or
            discuss the problems I encounter while coding with{" "}
            <b>
              <FlashingText>ChatGPT</FlashingText>
            </b>{" "}
            to deepen my understanding and retain the information in the{" "}
            <b>
              <FlashingText>long term</FlashingText>
            </b>
            .
          </p>
        </AnimateOnView>
      </div>
    </section>
  );
}
