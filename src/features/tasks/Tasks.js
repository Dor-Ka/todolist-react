import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import StyledSection from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";
import { Container } from "../../common/Container/styled";

function Tasks() {
  const { 
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    toggleHideDone,
    hideDone,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <StyledSection
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <StyledSection
        title="Lista zadań"
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
