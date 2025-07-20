import React from "react";

function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  const completed = goals.filter((g) => g.savedAmount >= g.targetAmount).length;

  function daysLeft(deadline) {
    const d = new Date(deadline);
    const now = new Date();
    return Math.ceil((d - now) / (1000 * 60 * 60 * 24));
  }

  return (
    <div style={{ marginBottom: 24 }}>
      <h2>Overview</h2>
      <div>Total Goals: {totalGoals}</div>
      <div>Total Saved: ${totalSaved}</div>
      <div>Goals Completed: {completed}</div>
      <ul>
        {goals.map((g) => {
          const days = daysLeft(g.deadline);
          const complete = g.savedAmount >= g.targetAmount;
          const overdue = days < 0 && !complete;
          const warning = days <= 30 && days > 0 && !complete;
          return (
            <li key={g.id}>
              {g.name}:{" "}
              {complete
                ? "Complete"
                : overdue
                ? "Overdue"
                : `${days} days left`}
              {warning && (
                <span style={{ color: "orange" }}> (Deadline soon!)</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Overview;
