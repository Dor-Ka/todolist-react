import { List, Item, Button, Content } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Button
          taskDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </Button>

        <Content done={task.done}>
          {task.content}
        </Content>

        <Button
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </Item>
    ))}
  </List >
);

export default TaskList;