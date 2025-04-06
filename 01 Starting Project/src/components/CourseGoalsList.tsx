import CourseGoal from "./CourseGoal"
import { type CourseGoals as ObjGoal } from "../App"
type CourseGoalsListProps = {
  goals: ObjGoal[];
  onDeleteGoal:(id:number) => void
  }
export default function CourseGoalsList ({goals , onDeleteGoal}: CourseGoalsListProps){
    return (
        <ul>
        {goals.map((goal) => (
        <li key={goal.id}> 
          <CourseGoal id={goal.id} title= {goal.title} onDelete={onDeleteGoal}>
           <p>{goal.description}</p>
          </CourseGoal>
        </li>
        ))}
      </ul>
    )
}