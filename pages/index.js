import { Page, Section } from "@components";
import homeSections from "../sections/home";

export default function Home() {
  return (
    <Page title="Home">
      {homeSections.map(({ title, component, props, styles }) => {
        return (
          <Section key={title} id={title} {...props} style={styles}>
            {component({ title })}
          </Section>
        );
      })}
    </Page>
  );
}
