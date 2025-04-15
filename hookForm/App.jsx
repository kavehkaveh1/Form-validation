import React from "react";

function App() {
  return (
    <div>
      <form action="/">
        <p>
          <label htmlFor="userName">userName : </label>
          <input type="text" id="userName" />
        </p>
        <p>
          <label htmlFor="password">passwordf : </label>
          <input type="password" id="password" />
        </p>
        <p>
          <button type="submit">submit</button>
        </p>
      </form>
    </div>
  );
}

export default App;
