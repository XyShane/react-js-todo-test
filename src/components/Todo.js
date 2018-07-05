import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';
import Delete from './Delete';

const Todo = ({ onClick, completed, text, deleteTodo}) => (
  <div>
    <ListGroupItem
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}

    </ListGroupItem>
      <Delete onClick={deleteTodo}/>
    </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todo
