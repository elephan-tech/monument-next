import Page from "../components/Page";
import Section from "../components/Section";
import homeSections from '../sections/home';
import _ from 'lodash';

export default function Home() {
  console.log({homeSections})
  return (
    <Page title="Home">
      {homeSections.map(({title, component, props, styles})=> {
        return (
          <Section key={title} id={_.camelCase(title)}{...props} style={styles}>
           {component({title})}
          </Section>
      )
      } )}
    </Page>
  );
}
