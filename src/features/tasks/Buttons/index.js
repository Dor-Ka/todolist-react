import { useSelector, useDispatch } from "react-redux";
import { WrapedSection, Button } from "./styled";
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
} from "../taskSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <WrapedSection>
      {/* <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button> */}
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {tasks.some(({ done }) => done) && hideDone ? "Pokaż" : "Ukryj"}{" "}
            ukończone
          </Button>

          <Button
            disabled={tasks.every(({ done }) => done)}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </WrapedSection>
  );
};

export default Buttons;
