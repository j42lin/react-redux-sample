import { connect } from 'react-redux';
import Todos from '../components/Todos';
import {
    changeTodoText,
    submitTodo,
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
        }
    };
}
  
const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);
  

export default TodoList;
  