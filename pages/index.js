import _camelCase from "lodash/camelCase;";
import Page from "../components/Page";
import Section from "../components/Section";
import homeSections from "../sections/home";

export default function Home() {
  console.log({ homeSections });
  return (
    <Page title="Home">
      {homeSections.map(({ title, component, props, styles }) => {
        return (
          <Section key={title} id={_camelCase(title)} {...props} style={styles}>
            {component({ title })}
          </Section>
        );
      })}
    </Page>
  );
}
