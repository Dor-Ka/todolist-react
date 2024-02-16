import { useState, useRef } from "react";
import { TasksForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimedNewTaskContent = newTaskContent.trim();

        if (trimedNewTaskContent !== "") {
            addNewTask(trimedNewTaskContent);
        };
        setNewTaskContent("");

    };

    return (
        <TasksForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button
                onClick={() => inputRef.current.focus()}
            >
                Dodaj zadanie
            </Button>
        </TasksForm>
    );
}

export default Form;
