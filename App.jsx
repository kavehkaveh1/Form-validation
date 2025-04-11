import React from "react";

function App() {
  return (
    <div>
      <form action="">
        <fieldset>
          <legend>personal data (required)</legend>
          <p>
            <label htmlFor="firstName">firstName : </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="jone"
              required
              autoFocus
            />
          </p>
          <p>
            <label htmlFor="lastName">lastName : </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="doe"
              required
            />
          </p>
          <p>
            <label htmlFor="password">password : </label>
            <input type="password" name="password" id="password" required />
          </p>
          <p>
            <label htmlFor="phoneNumber">phoneNumber : </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              required
              pattern="[0-9]{11}"
            />
          </p>
          <p>
            <label htmlFor="birthDate">birthDate : </label>
            <input type="date" name="date" id="birthDate" required />
          </p>
          <p>
            <label htmlFor="email">email : </label>
            <input
              type="email"
              neme="email"
              id="email"
              required
              placeholder="....@gmail.com"
            />
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
