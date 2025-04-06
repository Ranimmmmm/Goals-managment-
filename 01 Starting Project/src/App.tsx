import { useState } from "react";
import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import CourseGoalsList from "./components/CourseGoalsList";
export   type CourseGoals = {
  title: string;
  description:string;
  id: number;
}
export default function App() {
  const [goals,setGoals] = useState<CourseGoals[]>([])
  function handleAddGoal(){
    setGoals(prevGoals => {
      const newGoal: CourseGoals = {
        id: Math.random(),
        title: 'learn react ',
        description: 'learn it in depth!'
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
      <button onClick={handleAddGoal} >Add a goal</button>
      <CourseGoalsList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
