import React, { useState } from "react";

export default function EditGoalForm({ goal, onUpdate, onCancel }) {
  const [form, setForm] = useState(goal);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(form);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <div className="form-group">
        <input name="name" value={form.name} onChange={handleChange} />
        <input
          name="targetAmount"
          type="number"
          value={form.targetAmount}
          onChange={handleChange}
        />
        <input name="category" value={form.category} onChange={handleChange} />
        <input
          name="deadline"
          type="date"
          value={form.deadline}
          onChange={handleChange}
        />
      </div>
      <button className="btn" type="submit">
        Update
      </button>
      <button className="btn" type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}
