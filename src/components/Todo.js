import React from "react";

export default function Todo({ name, remove }) {
  return (
    <div>
      <p>
        {name}{" "}
        <button className="btn btn-danger btn-sm" onClick={() => remove(name)}>
          x
        </button>
      </p>
    </div>
  );
}
