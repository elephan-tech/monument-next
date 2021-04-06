import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import useStyles from './styles'
import { Grid } from '@material-ui/core';
import Image from "next/image";
import socials from "../../config/socials";


function Copyright({website}) {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="#fff">
      {'Copyright © '}
      <Link color="#fff" href="/"  className={classes.footerLink}>
        {website || 'company'}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Footer() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="xl"  className={classes.footerContainer}>
          <Grid className={classes.footerContainer}
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
          >
            <Grid className={classes.gridBox}>
              <h2 className={classes.footerTitle}>Contact Us</h2> 
              <p><i class="fas fa-map-marked-alt" style={{color:'#fec300'}}></i> 500 19th Street NE,<br></br> 
              Washington, DC 20002</p>
              <p><i class="fas fa-mobile" style={{color:'#fec300'}}></i> (202) 545-3180</p>
              <p>Fax: (202) 478-2824</p>
              <h2 className={classes.footerTitle}>Legal</h2>
              <Link href="/" display="block" className={classes.linkFooter}>
                <a>Privacy policy.</a>
              </Link>
            </Grid>
            <Grid className={classes.gridBox}>
              <h2 className={classes.footerTitle}>Quick Links</h2>
              <Link href="/" className={classes.linkFooter}>
                <a>About Us</a>
              </Link>
              <Link href="/" className={classes.linkFooter}>
                <a>Our Prgrams</a>
              </Link>
              <Link href="/" className={classes.linkFooter}>
                <a>Enrollment</a>
              </Link>
              <Link href="/" className={classes.linkFooter}>
                <a>Family Resources</a>
              </Link>          
              <Link href="/" className={classes.linkFooter}>
                <a>Careers</a>
              </Link>
            </Grid>
            <Grid className={classes.gridBox}>
            <Link url="/" component="div">
              <Image
                src="/monument_logo-short.png"
                alt="Monument Academy Logo"
                width={200}
                height={270}
                position="relative"
                style={{
                  maxWidth: '300px',
                  minWidth: '150px',
                  position: 'relative',
                }}
              />
            </Link>
            </Grid>
            <Grid className={classes.gridBox}>
              <h2 className={classes.footerTitle}>Stay Connected</h2>
              <div>
                {socials.map(({ name, url }) => (
                  <Link
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    color="inherit"
                    component="span"
                  >
                    <i className={`fab fa-${name}`} aria-hidden style={{fontSize: '30px',marginRight:'16px'}}/>
                  </Link>
                ))}
              </div>
            </Grid>
          </Grid>
          </Container>

          {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
          <div className={classes.darkerBlue}>          
            <Copyright website="Monument Academy" className={classes.linkFooter}/>
          </div>
        
      </footer>
  );
}