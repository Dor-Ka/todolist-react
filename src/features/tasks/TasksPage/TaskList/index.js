import { useSelector, useDispatch } from "react-redux";
import { List, Item, Button, Content, StyledLink } from "./styled";
import { selectTasksByQuery, toggleTaskDone, removeTask, selectTasks, selectHideDone } from "../../tasksSlice";
import searchQueryParamsName from "../searchQueryParamsName";
import { useQueryParameter } from "../queryParameters";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamsName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button taskDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button remove onClick={() => dispatch( removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
