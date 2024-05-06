import StyledSection from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <StyledSection
        title={task ? task.content : "nie znaleziono zadania..."}
        body={
          <>
            <strong>Ukończono:</strong> {task.done ? "tak" : "Nie"}
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;
