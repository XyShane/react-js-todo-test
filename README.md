# react-js-todo-test
React JS Todolist test
This project is for a test on a React-Redux todolist app. There are several bugs that have to be addressed and a new feature to remove a todo should be implemented.

# Bugs

There are several bugs that have been fixed in order for the application to run as how it should be.
Below are the list of changes made and under which section of the application.

## Actions
### actions/index.js
>  line 4: nextTodoId+++ to nextTodoId++  
>  line 13: passed in the id parameter

## Components
### components/Footer.js
> line 14: corrected typo on VisibilityFilters.SHOW_COMPLETED

### components/TodoList.js
> line 22: added a required PropType text

## Containers
### containers/FilterLink.js
> line 6: changed == to ===
> line 10: changed to arrow function

### containers/AddTodo.js
> line 3: removed Input as it is unused. (minor bug)

## Reducers
### reducers/index.js
> line 6: modified ...todos to todos:

### reducers/todos.js
> line 15: passed in the rest of the todos parameters by adding ...todo

# Additions
This section describes the additional feature(s) added to the application.

## Delete To do
The test requires a new feature to be added to the Todo List which is the ability to delete individual todos.
In order to this, there are a number of steps to achieve it.

### Add New DeleteTodo Action
The first thing to do is to add a new action which would be used to change the state of our application into <br>Refer to <b>line 18 in actions/index.js</b>
>export const deleteTodo = id => ({
>  type: 'DELETE_TODO',
>  id
>})

The functions expects an id which is the id of the todo we want to delete.

### Add New Component for the Delete Button
Next, we need to add a delete button for each of the rows when a new todo is added. 

#### Create the component
To do that, I've created a new component called 'Delete'. This is just a button that receives an onClick as a parameter. <br> 
Refer to <b>components/Delete.js</b>

#### Render the component
Then we need to render it along with our todos. I've encapsulated the ListGroupItem in a div along with our new Delete component. Then I've added a new parameter "deleteTodo" which is the function that is called when the Delete button is clicked.
Refer to <b>line 6 in components/Todo.js</b>

#### Pass through the new parameter in TodoList
Lastly, I added the deleteTodo parameter which takes in the individual to ids for deletion in TodoList where each todo is created and added a new required Proptype deleteTodo. Refer to <b>components/TodoList.js</b>

### Map the dispatching of the deleteTodo function
Next, we need to dispatch our new action everytime we click on the Delete button. In order, to do this, we need to add it to mapDispatchToProps in our TodoList container. Refer to mapDispatchToProps <b>line 26 in containers/VisibleTodoList.js</b>

### Adding the functionality in the reducer
Finally, the functionality needs to be added in order to remove the actual todo. As reducers require functions to be pure, I've used Array.filter to create a copy of the array with the condition to only include todos where the todo.id does not match with the action.id. This would remove the todo where we clicked the Delete on from the state of our application. Refer to <b>line 18 in reducers/todos.js</b>




