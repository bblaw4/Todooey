import React from "react";

export default function Todo({ name, remove }) {
  return (
    <div>
      <p>
        {name} <button onClick={() => remove(name)}>x</button>
      </p>
    </div>
  );
}
