import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: '16px',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    
  }, 
  footerContainer: {display:'flex',alignItems:'flex-start',width:'90%',margin:'auto',},
  footerGrid: {},
  footerTitle: {
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  linkFooter: {color:'#ffffff',display:'block',padding:'16px'},
  //'linkFooter&:visited': {color:'#ffffff'},
  gridBox: {padding:'16px',minWidth: '200px',},
  darkerBlue: {width:'100%',padding:'16px',textAlign:'center',color: '#ffffff!important',backgroundColor:'#02213B',}
}));

export default useStyles
