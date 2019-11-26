// Import React
// =========================================================
   import React from 'react';
// Import Material UI Styles
// =========================================================
   import { makeStyles } from '@material-ui/core/styles';
// Import Material UI Components
// =========================================================
   import { CssBaseline, Typography, Container, Link} from '@material-ui/core/';


// Styles
// =========================================================
    const useStyles = makeStyles(theme => ({
      root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '15vh',
      },
      main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
      },
      footer: {
        color: "#f7f7f7",
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: "#56585D",
        textAlign: 'center'
      },
    }));

function Copyright() {
  return (
     
    <Typography  justify="center" variant="body2" color="textSecondary">
      {' © '}
      <Link color="inherit" href="http://appbeware.com/">
        AppBeware
      </Link>{' 2019 | '}
      
 <Link color="inherit" href="../TermsConditions">
        Disclaimer
      </Link>

// Export StickyFooter
// =========================================================
  export default function StickyFooter() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
        <footer className={classes.footer}>
        <Container maxWidth="sm">
         
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
