import AnimateOnView from "@/components/ui/AnimationOnView";
import Popup from "./Popup";
import GamingSection from "./sections-in-popup/GamingSection";
import TableTennisSection from "./sections-in-popup/TableTennisSection";
import PersonalGrowthSection from "./sections-in-popup/PersonalGrowthSection";
import FlashingText from "@/components/ui/FlashingText";

export default function Section3() {
  return (
    <section id="three">
      <div className="inner">
        <AnimateOnView>
          <header className="major">
            <h2>Beyond Coding</h2>
          </header>
          <p>
            During my school days, I developed a strong interest in{" "}
            <b>
              <FlashingText>table tennis</FlashingText>
            </b>{" "}
            and <b>gaming</b>. This passion motivated me to seek information
            online, which in turn improved my English reading and comprehension
            skills. I learned how to train effectively, stick to a plan, and
            work hard to achieve better performance in these hobbies. This
            pursuit has positively impacted my life in many ways, enhancing my
            physical fitness,{" "}
            <b>
              <FlashingText>concentration</FlashingText>
            </b>
            , and reflexes, as well as my mental skills in{" "}
            <b>
              <FlashingText>critical thinking</FlashingText>
            </b>
            ,{" "}
            <b>
              <FlashingText>problem solving</FlashingText>{" "}
            </b>
            and{" "}
            <b>
              <FlashingText>handling pressure</FlashingText>
            </b>
            . When I hit a roadblock, I turn to additional resources like{" "}
            <b>books</b> and <b>podcasts</b> for guidance. Although my
            self-taught journey spans various topics, they all interconnect and
            evolve, much like a spider&apos;s web.
          </p>
          <ul className="actions">
            <li>
              <Popup title="Beyond Coding">
                {/* Spotlights */}
                <section className="spotlights w-full">
                  {/* Table Tennis section */}
                  <TableTennisSection />

                  {/* Gaming section */}
                  <GamingSection />

                  {/* Personal Growth section */}
                  <PersonalGrowthSection />
                </section>
              </Popup>
            </li>
          </ul>
        </AnimateOnView>
      </div>
    </section>
  );
}
