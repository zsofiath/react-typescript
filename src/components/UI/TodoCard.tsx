import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import CardHeader from '@mui/material/CardHeader';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blueGrey } from '@mui/material/colors';

export const TodoCard: React.FC = (props) => {
  return (
    <Card sx={{ maxWidth: 545 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="140"
        image="/contemplative-reptile.jpg"
        alt="green iguana"
      />
      {props.children}
    </Card>
  );
}