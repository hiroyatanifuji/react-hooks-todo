import React, { Component } from "react";
import PropTypes from "prop-types";

// material-ui関連
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  item: {
    backgroundColor: theme.palette.background.paper,
    width: "80%",
    height: 45,
    padding: 0,
    marginTop: 5,
    marginBottom: 5,
  },
  content: {
    padding: 0,
  }
})

const TodoItem = (props) => {
  const { key, todo, doneTodo, deleteTodo, classes } = props;
  return (
    <List key={key} className={classes.item}>
      <ListItem className={classes.content}>
        <ListItemIcon>
          <Checkbox onChange={() => doneTodo(todo.index)} checked={todo.done} color="secondary" />
        </ListItemIcon>
        <ListItemText primary={todo.title} />
        <ListItemSecondaryAction>
          <IconButton onClick={() => deleteTodo(todo.index)}>
            <DeleteIcon />
          </IconButton>
      </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default withStyles(styles)(TodoItem);