import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import StyledSection from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";

function Tasks() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <StyledSection title="Dodaj nowe zadanie" body={<Form />} />
      <StyledSection
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
