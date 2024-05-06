import { useSelector, useDispatch } from "react-redux";
import { WrapedSection, Button } from "./styled";
<<<<<<< HEAD
import { selectTasks, toggleHideDone, setAllDone } from "../../tasksSlice";
=======
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
} from "../../taskSlice";
>>>>>>> 14d44547e926aeebf6b4136e54614ba3b663b229

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <WrapedSection>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>

          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </WrapedSection>
  );
};

export default Buttons;
