import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string,
  description: string,
  id: number,
};

export default function App()
{
  const[goals, setGoals] = useState<CourseGoal[]>([]);

  // function to handle add goals
  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  // function to handle delete goals
  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src:  goalsImg, alt: 'A List Of Goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  )
}