import React from 'react';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { QuestionAnswer } from '@mui/icons-material';
import { PostContainer } from './CardPostFeedStyles';
import { ArrowUpward } from '@mui/icons-material';
import { ArrowDownward } from '@mui/icons-material';
import { secondaryColor } from '../../constants/colors';

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <PostContainer sx={{ minWidth: 350, maxWidth: 750 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#9cb510" }} aria-label="recipe">
            M
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Madalena da Silva"
        subheader={post.createdAt}
      />
      {/* <CardMedia
        component={post.image}
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ArrowUpward />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          0
        </Typography>
        <IconButton aria-label="add to favorites">
          <ArrowDownward />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <QuestionAnswer />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </PostContainer>
  );
}

export default PostCard;