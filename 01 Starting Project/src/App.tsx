import { useState } from "react";
import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import CourseGoalsList from "./components/CourseGoalsList";
import NewGoal from "./components/NewGoal";
export   type CourseGoals = {
  title: string;
  description:string;
  id: number;
}
export default function App() {
  const [goals,setGoals] = useState<CourseGoals[]>([])
  function handleAddGoal(goal:string, summary:string){
    setGoals(prevGoals => {
      const newGoal: CourseGoals = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return [...prevGoals,  newGoal]
    })
  }
  function handleDeleteGoal(id:number){
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }
  return (
    <main>
      <Header image={{src:goalsImg, alt:'a list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalsList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
