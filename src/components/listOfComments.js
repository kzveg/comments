import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getFirstData } from '../redux/actions';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    ulPadding: {
        padding: '-200px'
    },
    root: {
        width: '50%',
        maxWidth: '26ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const ListOfComments = () => {
    let url = 'https://jordan.ashton.fashion/api/goods/30/comments';
    const classes = useStyles();
    let comments;
    const dispatch = useDispatch();
    let items = useSelector(state => state.comments.items);

    useEffect(() => {
        dispatch(getFirstData(url));
    }, [dispatch])

    if (items !== undefined) {
        comments = items.data.map(el =>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar >
                        <AccountBoxIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={el.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                color="textPrimary"
                            >
                                {el.text}
                            </Typography>
                            {el.created_at.substring(0, 10)}
                        </React.Fragment>
                    }
                />
            </ListItem>
        )
    }

    return (
        <List className={classes.root}>
            {comments}
        </List>
    );
}



export default ListOfComments;