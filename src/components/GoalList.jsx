import React from "react";
import ProgressBar from "../progressbar";

export default function GoalList({ goals, onDelete, onEdit }) {
  if (!goals.length) return <div>No goals yet.</div>;

  return (
    <div>
      <h3>Your Goals</h3>
      <ul className="goal-list">
        {goals.map((goal) => (
          <li key={goal.id} className="goal-card">
            <div>
              <strong>{goal.name}</strong> ({goal.category})<br />
              Target: ${goal.targetAmount} <br />
              Saved: ${goal.savedAmount} <br />
              Deadline: {goal.deadline}
            </div>
            <ProgressBar value={goal.savedAmount} max={goal.targetAmount} />
            <div style={{ marginTop: 8 }}>
              <button className="btn" onClick={() => onEdit(goal)}>
                Edit
              </button>
              <button className="btn" onClick={() => onDelete(goal.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
