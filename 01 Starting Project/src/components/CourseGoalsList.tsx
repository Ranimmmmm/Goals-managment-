import CourseGoal from "./CourseGoal"
import { type CourseGoals as ObjGoal } from "../App"
import InfoBox from "./InfoBox"
import { ReactNode } from "react";
type CourseGoalsListProps = {
  goals: ObjGoal[];
  onDeleteGoal:(id:number) => void
  }
export default function CourseGoalsList ({goals , onDeleteGoal}: CourseGoalsListProp){
  if(goals.length ===0 ){
    return (
      <InfoBox mode ="Hint">
       You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode
  if(goals.length >= 5 ){
    warningBox = (
      <InfoBox mode="Warning">
        You're collecting a lot of goals . Don't put too much on your plate!
      </InfoBox>
    )
  }
    return (
       <>
       {warningBox}
        <ul>
        {goals.map((goal) => (
        <li key={goal.id}> 
          <CourseGoal id={goal.id} title= {goal.title} onDelete={onDeleteGoal}>
           <p>{goal.description}</p>
          </CourseGoal>
        </li>
        ))}
      </ul>
       </>
    )
}