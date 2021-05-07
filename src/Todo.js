import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

import { ListItem, Checkbox, ListItemText, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState(false);

    return (
        <ListItem style={{height:"64px"}}>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/>:
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "" }}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}
