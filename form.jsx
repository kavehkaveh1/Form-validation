import React from "react";

function Form() {
  return (
    <div>
      <form action="/">
        <fieldset>
          <legend> info : </legend>
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
          <fieldset>
            <legend>personal data (optional)</legend>
            <p>
              <label htmlFor="number">your lucky number : </label>
              <input
                type="number"
                name="number"
                id="number"
                max={100}
                min={0}
              />
            </p>
            <p>
              <label htmlFor="drinks"> favorite drinks : </label>
              <select name="drink" id="drinks">
                <optgroup label="cold drinks">
                  <option value="iceTea">iceTea</option>
                  <option value="orangeJuice">orangeJuice</option>
                  <option value="others">others</option>
                </optgroup>
                <optgroup label="hot drinks">
                  <option value="tea">tea</option>
                  <option value="coffee">coffee</option>
                  <option value="others">others</option>
                </optgroup>
              </select>
            </p>
            <div>
              <p>choose your pet : </p>
              <p>
                <input type="checkbox" name="pets" id="dog" />
                <label htmlFor="dog">dog</label>
              </p>
              <p>
                <input type="checkbox" name="pets" id="cat" />
                <label htmlFor="cat">cat</label>
              </p>
              <p>
                <input type="checkbox" name="pets" id="fish" />
                <label htmlFor="fish">fish</label>
              </p>
              <p>
                <input type="checkbox" name="pets" id="other" />
                <label htmlFor="others">others</label>
              </p>
            </div>
            <div>
              <p>choose your favorite food : </p>
              <p>
                <input type="radio" name="food" id="pizza" />
                <label htmlFor="pizza">pizza</label>
              </p>
              <p>
                <input type="radio" name="food" id="kabab" />
                <label htmlFor="kabab">kabab</label>
              </p>
              <p>
                <input type="radio" name="food" id="khoresh" />
                <label htmlFor="khoresh">khoresh</label>
              </p>
              <p>
                <input type="radio" name="food" id="others" />
                <label htmlFor="others">others</label>
              </p>
            </div>
          </fieldset>
          <p>
            <button type="submit"> submit</button>{" "}
            <button type="reset">reset</button>
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
