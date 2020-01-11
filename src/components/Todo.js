import React from "react";

export default function Todo({ name, remove }) {
  return (
    <div className="card">
      <div className="card-body">
        {name}{" "}
        <span className="float-right">
          <button
            className="btn btn-danger btn-sm "
            onClick={() => remove(name)}
          >
            x
          </button>
        </span>
      </div>
    </div>
  );
}
