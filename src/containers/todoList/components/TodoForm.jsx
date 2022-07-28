import React from "react";

function TodoForm() {
  return (
    <div>
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-md-11">
            <input
              type="text"
              className="form-control mt-1"
              id="formGroupExampleInput"
              placeholder="Create to-do list..."
            />
          </div>
          <div className="col-md-1">
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success mt-1">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
