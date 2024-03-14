import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { TasksForm, Input, Button } from "./styled";
import { addTask } from "../taskSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatach = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimedNewTaskContent = newTaskContent.trim();

        // if (trimedNewTaskContent !== "") {
        //     addNewTask(trimedNewTaskContent);
        // };
        dispatach(addTask({
            content: trimedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <TasksForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                name="tasks"
           />
            <Button>
                Dodaj zadanie
            </Button>
        </TasksForm>
    );
}

export default Form;
