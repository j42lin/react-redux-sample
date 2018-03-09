import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { changeTodoText } from '../actions';

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
    };
}
  
const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);
  

export default TodoList;
  