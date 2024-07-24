import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons/TasksListButtons";
import ExampleTasksButton from "./Buttons/ExampleTasksButton";
import StyledSection from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <StyledSection
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<ExampleTasksButton />}
      />
      <StyledSection 
      title="Wyszukiwarka" 
      body={<Search />} />
      <StyledSection
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
