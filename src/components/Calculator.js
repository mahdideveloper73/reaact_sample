import React, { useState } from "react";

export default function Calculator() {
  const [value, setvalue] = useState(0);
  function test(param) {
    setvalue(value + param);
  }
  return (
    <>
      <h1>Calculator</h1>
      <h2>{value}</h2>
      <table>
        <tr>
          <td>
            <button onClick={() => test(+1)}>+1</button>
          </td>
          <td>
            <button onClick={() => test(-1)}>-1</button>
          </td>
        </tr>
      </table>
      <hr></hr>
    </>
  );
}
