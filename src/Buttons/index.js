import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button onClick={toggleHideDone} className="buttons__button">
                {tasks.some(({ done }) => done) && hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>

            <button
                className="buttons__button" disabled={tasks.every(({ done }) => done)}
                onClick={setAllDone}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);


export default Buttons;