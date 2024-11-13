import AnimateOnView from "@/components/ui/AnimationOnView";
import YoutubePlayer from "@/components/about/sections-in-popup/YoutubePlayer";
import FlashingText from "@/components/ui/FlashingText";

export default function TableTennisSection() {
  return (
    <section className="flex items-center">
      <AnimateOnView>
        <YoutubePlayer />
      </AnimateOnView>
      {/* Video */}
      {/* Content */}
      <div className="content">
        <header className="self-center">
          <h4>Table Tennis</h4>
        </header>
        <AnimateOnView>
          <p>
            I push myself to the limit in this realm, constantly striving for
            better performance like a{" "}
            <b>
              <FlashingText>dedicated craftsman</FlashingText>
            </b>
            . I focus on every small{" "}
            <b>
              <FlashingText>detail</FlashingText>
            </b>{" "}
            with{" "}
            <b>
              <FlashingText>precision</FlashingText>
            </b>
            , starting by observing how my opponent moves. I predict the
            ball&apos;s curve based on its spin and speed, and then decide how
            to respond while keeping my overall <b>strategy</b> in mind. Whether
            playing smart with positioning or making a bold move with a powerful
            strike, all within a reaction window of 0.2 to 0.3 seconds, I thrive
            on the challenge. This activity has sharpened my{" "}
            <b>
              <FlashingText>focus</FlashingText>
            </b>
            , reflexes,{" "}
            <b>
              <FlashingText>self-awareness</FlashingText>
            </b>
            , and ability to{" "}
            <b>
              <FlashingText>handle pressure</FlashingText>
            </b>
            . It&apos;s improved my body control, physical fitness, and even
            sparked my{" "}
            <b>
              <FlashingText>creativity</FlashingText>
            </b>
            . The mindset I&apos;ve developed here naturally carries over into
            other areas of my life.
          </p>
        </AnimateOnView>
      </div>
    </section>
  );
}
