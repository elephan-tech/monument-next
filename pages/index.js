import Box from "../components/Box";
import Page from "../components/Page";
import Section from "../components/Section";

export default function Home() {
  return (
    <Page title="Home">
      <Section
        title="landing"
        backgroundImage="/monument_columns.png"
        position="left center"
      >
        <Box height="1000px">helllo</Box>
      </Section>
    </Page>
  );
}
