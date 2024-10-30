import AnimateOnView from "@/components/ui/AnimationOnView";
import FreeCodeCampLogo from "@/components/ui/FreeCodeCampLogo";
import MyApps from "./MyApps";
import FlashingText from "@/components/ui/FlashingText";

export default function Section4() {
  return (
    <section id="four">
      <div className="inner">
        <AnimateOnView>
          <h2>Read & Write</h2>
          <p>
            At this stage, I realized that I wouldn&apos;t improve if I just
            kept following courses. However, I still felt a bit lost when coding
            without instructions. Then I came across a website called
            <FreeCodeCampLogo />
            that helped me <b>break through</b> this barrier. It provides
            practice exercises based on written instructions, guiding me to
            write code from scratch. Through this process, my learning path
            shifted from listening and following to <b>reading</b> and{" "}
            <b>writing</b>.
          </p>
          <p>
            I tried using React with some frontend exercises, and that&apos;s
            when I discovered that create-react-app had become deprecated. The
            React official documentation recommended using{" "}
            <b>
              <FlashingText>Next.js</FlashingText>
            </b>{" "}
            with{" "}
            <b>
              <FlashingText>Tailwind CSS</FlashingText>
            </b>{" "}
            instead. This time, I decided to <b>read the documentation</b> for
            both Next.js and Tailwind CSS on my own, without following any
            courses, and built a few simple apps with them.
          </p>
        </AnimateOnView>
      </div>
      <AnimateOnView>
        <MyApps />
      </AnimateOnView>
    </section>
  );
}
