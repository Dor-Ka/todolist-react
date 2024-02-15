import { useState, useRef } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input ref={inputRef}
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button
                onClick={() => inputRef.current.focus()}
                className="form__button"
            >Dodaj zadanie</button>
        </form>
    );
}

export default Form;
