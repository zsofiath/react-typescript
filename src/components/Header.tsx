import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const useStyles: any = makeStyles(()=>({
    typographyStyles: {
        flex:1,
        color: props => {
          return props ? 'red' : 'white'
        }
    }
}))
export const Header = () => {
    const classes = useStyles(false);
    
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Navbar</Typography>
        <DeleteTwoToneIcon />
      </Toolbar>
    </AppBar>
  );
};
