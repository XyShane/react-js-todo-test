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

## Reducers
### reducers/index.js
> line 6: modified ...todos to todos:

### reducers/todos.js
> line 15: passed in the rest of the todos parameters by adding ...todo

# Additions
This section describes the additional feature(s) added to the application.

## Delete To do
