import { useState } from "react";

export default function DepositForm({ goals, onDeposit }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (goalId && amount) {
      onDeposit(goalId, Number(amount));
      setAmount("");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <div className="form-group">
        <select value={goalId} onChange={(e) => setGoalId(e.target.value)}>
          <option value="">Select Goal</option>
          {goals.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Deposit Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="btn" type="submit">
        Deposit
      </button>
    </form>
  );
}
