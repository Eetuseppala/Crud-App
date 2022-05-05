import React from 'react';
import { Card, CardActions, CardMedia, Typography, CardContent, IconButton } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card} elevation={15}>
            <CardContent>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).calendar()}</Typography>
            </CardContent>
            <CardMedia className={classes.media} image={post.selectedFile}/>
            <div className={classes.overlay2}>
                <IconButton color='primary' size='small' onClick={() => {setCurrentId(post._id)}}>
                    <EditIcon fontSize='small' />
                </IconButton>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
                <Typography className={classes.details} variant='body1' gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize='small' />
                    &nbsp;
                    {post.likeCount}
                </IconButton>
                <IconButton size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small' />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post;