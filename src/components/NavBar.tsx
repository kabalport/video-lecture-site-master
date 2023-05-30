import { Box, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import IconButton from "@mui/material/IconButton";
import Logo from '../assets/REFA_LOGO.png';  // import the image

// import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles({
    dropdown: {
        position: 'relative',
        display: 'inline-block',
    },
    dropdownContent: {
        display: 'none',
        position: 'absolute',
        minWidth: '160px',
        zIndex: 1,
        backgroundColor: '#f9f9f9',
        padding: '12px 16px',
        borderRadius:  '5px',
        fontWeight: 500,
        lineHeight: '30px',
        justifyContent: 'center',
    },
    'dropdownContent a': {
        display: 'block',
        width: '100%',
        padding: '5px 0',
        textDecoration: 'none',
        color: 'black',
    },
    'dropdownContentShow': {
        display: 'block',
    },
    'dropdownContent a:hover': {
        color: '#61dafb',
    },
})

const NavBar = () => {
    const classes = useStyles();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
            <Box display="flex" flexDirection="row" alignItems="center">
                    <img src={Logo} alt="Logo" style={{marginLeft: '16px'}} />
                    <Typography style={{fontWeight: 700, fontSize: '19px', whiteSpace: "nowrap", marginLeft: '16px', letterSpacing: '-0.38px', lineHeight: '28px'}}>
                        부동산융합아카데미
                    </Typography>
            </Box>
            <Box
                className={classes.dropdown}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
            >

          <div className="dropdown">
              <Typography >
                  부동산융합아카데미
              </Typography>
              <Box className={`${classes.dropdownContent} ${dropdownOpen ? classes.dropdownContentShow : ''}`}>
                  <Link>부동산융합아카데미란</Link>
                  <Link>로드맵</Link>
              </Box>
              <Typography >
                  부동산융합아카데미
              </Typography>
              <Box className={`${classes.dropdownContent} ${dropdownOpen ? classes.dropdownContentShow : ''}`}>
                  <Link>부동산융합아카데미란</Link>
                  <Link>로드맵</Link>
              </Box>
              <Typography >
                  부동산융합아카데미
              </Typography>
              <Box className={`${classes.dropdownContent} ${dropdownOpen ? classes.dropdownContentShow : ''}`}>
                  <Link>부동산융합아카데미란</Link>
                  <Link>로드맵</Link>
              </Box>
          </div>


            </Box>
            <IconButton style={{ padding: 0 }}>
                <Box style={{ backgroundColor: '#0080fe', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/*<SearchIcon style={{ color: '#FFFFFF', width: '30px', height: '30px' }} />*/}
                </Box>
            </IconButton>
        </Box>
    );
}

export default NavBar;
