import { connect } from 'react-redux';
import Todo from '../components/Todo';
import {
    changeTodoText,
    submitTodo,
} from '../actions';

const mapStateToProps = (state) => {
    return {
        todoText: state.todoText,
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
    };
}
  
const TodoForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);
  

export default TodoForm;
  