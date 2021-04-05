import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
 heading: {
  backgroundImage: ({decoration}) => decoration ? "url('/brush2.png')": 'none',
  backgroundPosition: "bottom left",
  backgroundRepeat: "no-repeat",
  backgroundSize: "80% auto",
  fontFamily: "'Segoe UI', Roboto, sans-serif",
  fontWeight: "bold",
  minHeight: 120
 }
}))

export default useStyles;