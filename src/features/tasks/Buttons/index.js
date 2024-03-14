import { useSelector, useDispatch } from "react-redux";
import { WrapedSection, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../taskSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    tasks.length > 0 && (
      <WrapedSection>
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
      </WrapedSection>
    )
  );
};

export default Buttons;
