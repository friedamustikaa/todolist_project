import React from "react";
import CreateTodo from "./CreateTodo";
import { BsFillTrashFill } from "react-icons/bs";

function TodoList() {
  return (
    <div>
      <CreateTodo />
      <div className="container pb-5">
        <div className="row">
          <div className="col-md mt-5">
            <h5 className="text-uppercase text-white">To Do</h5>
            <ul className="list-group">
              <li className="list-group-item list-group-item-dark">
                <a
                  href="#"
                  className="text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Lorem Ipsum
                </a>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      {/* <div class="modal-header no-line">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Detail Task
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div> */}
                      <div class="modal-body">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Task Name
                        </label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          id="formGroupExampleInput"
                          //   placeholder="Create to-do list..."
                        />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Delete
                        </button>
                        <button type="button" class="btn btn-success">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md mt-5">
            <h5 className="text-uppercase text-white">Completed</h5>
            <ul className="list-group">
              <li className="list-group-item list-group-item-dark">
                <a
                  href="#"
                  className="text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Lorem Ipsum
                </a>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      {/* <div class="modal-header no-line">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Detail Task
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div> */}
                      <div class="modal-body">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Task Name
                        </label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          id="formGroupExampleInput"
                          //   placeholder="Create to-do list..."
                        />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Delete
                        </button>
                        <button type="button" class="btn btn-success">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
