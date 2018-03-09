import { connect } from 'react-redux';
import Todos from '../components/Todos';
import {
    changeTodoText,
    submitTodo,
    deleteTodo,
} from '../actions';

const mapStateToProps = (state) => {
    return {
        todoText: state.todoText,
        todos: state.todos,
    }
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        changeTodoText: (text) => {
            dispatch(changeTodoText(text));
        },
        submitTodo: (text) => {
            dispatch(submitTodo(text));
            dispatch(changeTodoText(''));
        },
        deleteTodo: (index) => {
            dispatch(deleteTodo(index));
        }
    };
}
  
const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);
  

export default TodoList;
  