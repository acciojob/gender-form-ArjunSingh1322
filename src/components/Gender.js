import React, { useState } from 'react';

function Gender() {
  let [value, setvalue] = useState("");
  let tshirtsize = ["Small", "Medium", "Large"];
  let dresssize = ["2", "4", "6"];

  return (
    <div>
      <h1>Select your gender</h1>

      <label>
        <input
          type="radio"
          name="gender"
          value="girl"
          onChange={(e) => setvalue(e.target.value)}
        />
        Girl
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="boy"
          onChange={(e) => setvalue(e.target.value)}
        />
        Boy
      </label>
      <br />

      {value === "girl" && (
        <>
          <h2>Select your dress size:</h2>
          <select>
            {dresssize.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </>
      )}

      {value === "boy" && (
        <>
          <h2>Select your t-shirt size:</h2>
          <select>
            {tshirtsize.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

export default Gender;
