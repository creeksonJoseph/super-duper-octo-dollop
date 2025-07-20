import { useState } from "react";

export default function GoalForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(form);
    setForm({ name: "", targetAmount: "", category: "", deadline: "" });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <div className="form-group">
        <input
          name="name"
          placeholder="Goal Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="targetAmount"
          type="number"
          placeholder="Target Amount"
          value={form.targetAmount}
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <input
          name="deadline"
          type="date"
          value={form.deadline}
          onChange={handleChange}
        />
      </div>
      <button className="btn" type="submit">
        Add Goal
      </button>
    </form>
  );
}
