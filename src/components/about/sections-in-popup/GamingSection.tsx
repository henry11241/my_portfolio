import GamingCarousel from "@/components/about/sections-in-popup/GamingCarousel";
import AnimateOnView from "@/components/ui/AnimationOnView";
import FlashingText from "@/components/ui/FlashingText";

export default function GamingSection() {
  return (
    <section>
      {/* Images */}
      <div className="image">
        <AnimateOnView>
          <GamingCarousel />
        </AnimateOnView>
      </div>
      {/* Content */}
      <div className="content">
        <header className="self-center">
          <h4>Gaming</h4>
        </header>
        <AnimateOnView>
          <p>
            For me, gaming isn&apos;t just a hobby—it&apos;s a way to{" "}
            <b>
              <FlashingText>connect with people</FlashingText>
            </b>
            , build skills, and keep life balanced. Whether playing as a team
            member, taking on the role of a <b>leader</b>, or acting as an{" "}
            <b>executor</b> in high-pressure moments, gaming offers a dynamic
            environment where I can sharpen my{" "}
            <b>
              <FlashingText>decision-making</FlashingText>
            </b>{" "}
            and{" "}
            <b>
              <FlashingText>adaptability</FlashingText>
            </b>
            . Beyond the game itself, it also serves as a social outlet,
            allowing me to relax and enjoy meaningful interactions, which help
            balance the demands of everyday life.
          </p>
        </AnimateOnView>
      </div>
    </section>
  );
}
