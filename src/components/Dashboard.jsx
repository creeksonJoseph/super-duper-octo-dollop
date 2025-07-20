import React from "react";
import GoalForm from "../GoalForm";
import DepositForm from "../DepositForm";
import GoalList from "./GoalList";
import EditGoalForm from "../EditGoalForm"; // Make sure this file exists

function Dashboard({
  goals,
  onAdd,
  onDeposit,
  onDelete,
  onEdit,
  editing,
  onUpdate,
  onCancelEdit,
}) {
  return (
    <div>
      <h2>Dashboard</h2>
      <GoalForm onAdd={onAdd} />
      <DepositForm goals={goals} onDeposit={onDeposit} />
      {editing && (
        <EditGoalForm
          goal={editing}
          onUpdate={onUpdate}
          onCancel={onCancelEdit}
        />
      )}
      <GoalList goals={goals} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default Dashboard;
