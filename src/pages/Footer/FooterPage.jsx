import * as React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import { useStyles } from './FooterStyles';


function FooterPage() {
    const classes = useStyles();
    return (
     <Box component="footer" className={classes.footer}>
        <Box className={classes.container}>
            <Box className={classes.footerFlex}>
                <Box>
                    <Link className={`${classes.logo} ${classes.link}`} to='/'>
                        User<Box component='span' className={classes.logoWhite}>Info</Box>
                    </Link>
                </Box>
                <Box className={classes.footerSubmit}>
                    <Box component='span' className={classes.footerSubmitText}>Subscribe to the newsletter</Box>
                    <Box>
                        <label htmlFor="submit-mail"></label>
                        <input className={classes.footerSubmitInput} type="email" name="submit-mail" id="submit-mail" placeholder="E-mail" />
                        <button className={classes.footerSubmitBtn} type="submit">Sign up</button>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}

export default FooterPage;