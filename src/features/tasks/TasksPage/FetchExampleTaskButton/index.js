import { useDispatch, useSelector } from "react-redux";
import { fatchExampleTasks, selectLoading } from "../../tasksSlice";
import { Button } from "../TaskList/styled";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button disabled={loading} onClick={() => dispatch(fatchExampleTasks())}>
            {
                loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
            }
        </Button>
    );
};