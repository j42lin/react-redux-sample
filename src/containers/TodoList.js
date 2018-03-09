import { connect } from 'react-redux';
import Todos from '../components/Todos';
import {
    deleteTodo,
} from '../actions';

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
};
  
const mapDispatchToProps = (dispatch) => {
    return {
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
  