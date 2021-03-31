import Page from "../components/Page";
import Section from "../components/Section";
import { Box, Button } from "rebass";
import Image from "next/image";
import BrushStroke from "../components/BrushStroke";

export default function Home() {
  return (
    <Page title="Home">
      <Section
        title="landing"
        backgroundImage="/monument_columns.png"
        position="left center"
        bgSize="30%"
      >
        <Box width={1 / 2}>
          <Image src="/IMG_1905.png" layout="fill"></Image>
        </Box>
        <Box
          width={1 / 2}
          sx={{ color: "#042f54", fontWeight: "bold", fontSize: "4em" }}
        >
          More than just a school{" "}
          <BrushStroke BrushStroke fill={"#310494"}>
            A Home
          </BrushStroke>
        </Box>
      </Section>
      <Section
        title="landing"
        backgroundImage="/49003931318_f68d9729f2_c.jpeg"
        position="left center"
        bgSize="cover"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignSelf="flex-end"
          justifyContent="space-between"
          padding={16}
          flexGrow={1}
          width={"100%"}
        >
          <div>
            Monument Academy Public Charter School is one-of-a-kind Boarding
            School located in the nation's Capital.
          </div>
          <div>
            <Button>Learn More</Button>
          </div>
        </Box>
      </Section>
      <Section
        bg="yellow"
        title="landing"
        position="left center"
        bgSize="cover"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignSelf="flex-end"
          justifyContent="space-between"
          padding={16}
          flexGrow={1}
          width={"100%"}
        >
          <div>
            Monument Academy Public Charter School is one-of-a-kind Boarding
            School located in the nation's Capital.
          </div>
          <div>
            <Button>Learn More</Button>
          </div>
        </Box>
      </Section>
      <Section bg="white" title="landing" position="left center" bgSize="cover">
        <Box
          display="flex"
          flexDirection="row"
          alignSelf="flex-end"
          justifyContent="space-between"
          padding={16}
          flexGrow={1}
          width={"100%"}
        >
          <div>
            Monument Academy Public Charter School is one-of-a-kind Boarding
            School located in the nation's Capital.
          </div>
          <div>
            <Button>Learn More</Button>
          </div>
        </Box>
      </Section>
    </Page>
  );
}
