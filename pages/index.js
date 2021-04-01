import BrushStroke from "../components/BrushStroke";
import Page from "../components/Page";
import Section from "../components/section";

export default function Home() {
  return (
    <Page title="Home">
      <Section
        backgroundImage="/bg_columns.png"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <div width={1 / 2}>
          More than just a school
          <BrushStroke BrushStroke fill={"#310494"}>
            A Home
          </BrushStroke>
        </div>
      </Section>
      <Section
        backgroundImage="/49003931318_f68d9729f2_c.jpeg"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <div>
          <div>
            Monument Academy Public Charter School is one-of-a-kind Boarding
            School located in the nation's Capital.
          </div>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </Section>
      <Section background="secondary">
        <div>
          <div>
            Monument Academy Public Charter School is one-of-a-kind Boarding
            School located in the nation's Capital.
          </div>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </Section>
      <Section bg="white" title="landing" position="left center" bgSize="cover">
        <div>
          <div>
            Monument Academy Public Charter School is one-of-a-kind Boarding
            School located in the nation's Capital.
          </div>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </Section>
    </Page>
  );
}
