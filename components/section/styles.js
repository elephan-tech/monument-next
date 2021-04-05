import { height } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { makeStyles, styled } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6), 
    flexGrow: 1,
    height: "80vh",
    display: "flex",
    background: ({background} ,props) => console.log({props})  || theme.palette[background || 'light'].main,
    backgroundImage: ({backgroundImage}) =>  backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: ({backgroundSize}) => backgroundSize || 'cover',
    backgroundPosition: ({backgroundPosition})=> backgroundPosition || "center",
    marginTop: ({topMargin}) => topMargin ? 100 : 'auto',
    height: ({height}) => height || '80vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));
