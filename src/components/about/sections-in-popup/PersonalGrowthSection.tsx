import AnimateOnView from "@/components/ui/AnimationOnView";
import Image from "next/image";
import books from "../../../../public/images/books.png";
import FlashingText from "@/components/ui/FlashingText";

export default function PersonalGrowthSection() {
  return (
    <section>
      {/* Images */}
      <div className="image">
        <AnimateOnView>
          <Image
            src={books}
            alt="Image for Personal Growth"
            data-position="center center"
          />
        </AnimateOnView>
      </div>
      {/* Content */}
      <div className="content">
        <header className="self-center">
          <h4>Personal Growth</h4>
        </header>
        <AnimateOnView>
          <p>
            I&apos;ve always had a{" "}
            <b>
              <FlashingText>curiosity</FlashingText>
            </b>{" "}
            and a drive to{" "}
            <b>
              <FlashingText>learn more</FlashingText>
            </b>{" "}
            whenever I discover a better way to approach something. Over time,
            I&apos;ve explored a wide range of topics, from <b>economics</b> and{" "}
            <b>psychology</b> to <b>nutrition</b> and <b>body training</b>. I
            spend countless hours researching through books and videos on
            subjects that interest me, then actively apply what I&apos;ve
            learned to my daily life.
          </p>
        </AnimateOnView>
      </div>
    </section>
  );
}
