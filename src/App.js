import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import StyledSection from "./Section";
import Header from "./Header";
import { useTasks } from "./useTasks";
import { Container } from "./Container/styled";

function App() {
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
          <Tasks
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

export default App;
