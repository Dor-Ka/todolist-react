import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./taskSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak...");
  }
}

export function* watchFetchExampleTasks() {
  console.log("saga jest podłączona");
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}
