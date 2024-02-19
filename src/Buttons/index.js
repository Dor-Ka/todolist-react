import { WrapedSection, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <WrapedSection>
            <Button onClick={toggleHideDone}>
                {tasks.some(({ done }) => done) && hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>

            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllDone}
            >
                Ukończ wszystkie
            </Button>
        </WrapedSection>
    )
);


export default Buttons;