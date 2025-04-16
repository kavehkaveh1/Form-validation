import React, { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    password: "",
    user: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    setUser("");
    setPassword("");

    let newErrors = {};

    if (password.length < 8) {
      newErrors.password = "password must be at least 8 characters";
    }

    if (user.length < 3) {
      newErrors.user = "userName must be more than 3 characters";
    }

    setError(newErrors);
  };
  return (
    <div>
      <form action="/" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="userName">userName : </label>
          <input
            type="text"
            id="userName"
            name="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            placeholder="userName"
          />
          <br />
          {error.user && <span style={{ color: "red" }}>{error.user}</span>}
        </p>
        <p>
          <label htmlFor="password">password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          {error.password && (
            <span style={{ color: "red" }}>{error.password}</span>
          )}
        </p>
        <p>
          <button type="submit">submit</button>
        </p>
      </form>
    </div>
  );
}

export default App;
