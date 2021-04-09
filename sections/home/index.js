import Academics from "./Academics";
import Boarding from "./Boarding";
import Donate from "./Donate";
import ExtendedDayLearning from "./ExtendedDayLearning";
import Hero from "./Hero";
import LearnMore from "./LearnMore";
import Markers from "./Markers";
import Mission from "./Mission";
import Moments from "./Moments";
import Sports from "./Sports";
import WellBeing from "./WellBeing";

export default [
  {
    title: "More Than a School, A Home",
    component: Hero,
    props: {
      backgroundImage: "images/bg_columns.png",
      backgroundPosition: "top center",
      backgroundSize: "cover",
      topMargin: true,
      type: "hero",
    },
    styles: {},
    order: 1,
  },
  {
    title: "Learn More",
    component: LearnMore,
    props: {},
    styles: {},
    order: 2,
  },
  {
    title: "Mission",
    component: Mission,
    props: {
      backgroundImage: "images/yellow-background.png",
      backgroundPosition: "top center",
      backgroundSize: "cover",
    },
    styles: {},
    order: 3,
  },
  { title: "Academics", component: Academics, props: {}, styles: {}, order: 4 },
  {
    title: "Family Style Boarding",
    component: Boarding,
    props: {},
    styles: {},
    order: 5,
  },
  {
    title: "Well Being",
    component: WellBeing,
    props: {},
    styles: {},
    order: 6,
  },
  {
    title: "Extended Day Learning",
    component: ExtendedDayLearning,
    props: {},
    styles: {},
    order: 7,
  },
  {
    title: "Markers",
    component: Markers,
    props: {},
    styles: {},
    order: 8,
  },
  { title: "Sports", component: Sports, props: {}, styles: {}, order: 9 },
  {
    title: "Moments",
    component: Moments,
    props: {
      background: "secondary",
    },
    styles: {},
    order: 10,
  },
  { title: "Donate", component: Donate, props: {}, styles: {}, order: 11 },
];
