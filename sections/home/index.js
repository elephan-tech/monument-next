import Academics from './Academics';
import Boarding from './Boarding';
import Donate from './Donate';
import ExtendedDayLearning from './ExtendedDayLearning';
import Home from './Home';
import LearnMore from './LearnMore';
import Markers from './Markers';
import Mission from './Mission';
import Moments from './Moments';
import Sports from './Sports';
import WellBeing from './WellBeing';

export default [
  {title: 'More Than a School, A Home', component: Home,  props:{
    backgroundImage:"/bg_columns.png",
  backgroundPosition:"center",
  backgroundSize:"cover",
  topMargin: true
  }, styles: {}, order:1 },
  {title: 'Learn More', component:LearnMore ,  props:{
    backgroundImage:"/bg_home_section2.jpeg",
    backgroundPosition:"center",
    backgroundSize:"cover"
  }, styles: {}, order:2 },
  {title: 'Mission', component: Mission,  props:{
    background: 'secondary'
  }, styles: {}, order: 3},
  {title: 'Academics', component: Academics, props:{}, styles: {}, order:4},
  {title: 'Family Style Boarding', component: Boarding,  props:{}, styles: {}, order:5},
  {title: 'Well Being', component: WellBeing,  props:{}, styles: {}, order:6 },
  {title: 'Extended Day Learning', component:ExtendedDayLearning ,  props:{}, styles: {}, order:7 },
  {title: 'Markers', component: Markers,  props:{}, styles: {}, order:8 },
  {title: 'Sports', component: Sports,  props:{}, styles: {}, order: 9},
  {title: 'Moments', component: Moments,  props:{}, styles: {}, order:10 },
  {title: 'Donate', component: Donate,  props:{}, styles: {}, order:11},
]