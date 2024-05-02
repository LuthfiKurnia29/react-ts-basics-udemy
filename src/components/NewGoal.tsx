import { FormEvent, useRef } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void; 
};

export default function NewGoal({onAddGoal}: NewGoalProps) {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();

        onAddGoal(enteredGoal, enteredSummary);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input type="text" ref={goal} id="goal" />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" ref={summary} id="summary" />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}