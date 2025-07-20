import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import {
  fetchGoals,
  addGoal,
  updateGoal,
  deleteGoal,
  depositToGoal,
} from "./api";
import Overview from "./components/Overview";
import Dashboard from "./components/Dashboard";

function App() {
  const [goals, setGoals] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  function handleAdd(goal) {
    addGoal(goal).then((newGoal) => setGoals((g) => [...g, newGoal]));
  }

  function handleDelete(id) {
    deleteGoal(id).then(() =>
      setGoals((g) => g.filter((goal) => goal.id !== id))
    );
  }

  function handleDeposit(id, amount) {
    depositToGoal(id, amount).then((updated) =>
      setGoals((g) => g.map((goal) => (goal.id === id ? updated : goal)))
    );
  }

  function handleEdit(goal) {
    setEditing(goal);
  }

  function handleUpdate(updates) {
    updateGoal(editing.id, updates).then((updated) => {
      setGoals((g) =>
        g.map((goal) => (goal.id === editing.id ? updated : goal))
      );
      setEditing(null);
    });
  }

  function handleCancelEdit() {
    setEditing(null);
  }

  return (
    <Router>
      <nav style={{ marginBottom: 24 }}>
        <Link to="/dashboard" style={{ marginRight: 16 }}>
          Dashboard
        </Link>
        <Link to="/overview">Overview</Link>
      </nav>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              goals={goals}
              onAdd={handleAdd}
              onDeposit={handleDeposit}
              onDelete={handleDelete}
              onEdit={handleEdit}
              editing={editing}
              onUpdate={handleUpdate}
              onCancelEdit={handleCancelEdit}
            />
          }
        />
        <Route path="/overview" element={<Overview goals={goals} />} />
        <Route path="*" element={<div>Welcome! Choose a page.</div>} />
      </Routes>
    </Router>
  );
}

export default App;
