import React, { useEffect, useState } from "react";
import Textarea from "@mui/joy/Textarea";
import SubmitButton from "./Components/Button";
import EditIcon from "@mui/icons-material/Edit";
import { Button, IconButton } from "@mui/joy";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Todo = () => {
  let [toggleNightMode, setToggleNightMode] = useState(false);
  let [newTodo, setNewTodo] = useState("");
  let [toDoArrList, setToDoArrList] = useState([]);
  let [indexToDo, setIndexToDO] = useState();
  let [toggleEdit, setToggleEdit] = useState(false);
  const handleChange = (todo) => {
    setNewTodo(todo);
  };

  const submitTodo = () => {
    if (newTodo === "") {
      alert("Please fill");
    } else {
      setToDoArrList([...toDoArrList, newTodo]);
      setNewTodo("");
    }
  };

  const toggle = () => {
    setToggleNightMode(!toggleNightMode);
  };
  const deleteTodo = (i) => {
    const newArr = toDoArrList?.filter((elem, index) =>
      i !== index ? elem : ""
    );
    setToDoArrList(newArr);
  };

  const editTodo = (i) => {
    toDoArrList?.forEach((elem, index) =>
      i === index ? setNewTodo(elem) : null
    );
    setIndexToDO(i);
    setToggleEdit(true);
  };

  let submitEdit = () => {
    if (newTodo === "") {
      alert("Do not leave blank");
    } else {
      toDoArrList?.splice(indexToDo, 1, newTodo);
      setNewTodo("");
      setToggleEdit(false);
    }
  };
  return (
    <>
      <div
        className={toggleNightMode ? "toDoContainerDark" : "toDoContainerLight"}
      >
        <div className="header">
          <h2 className="headerTitle">To Do Practice</h2>
          <label class="switch">
            <input type="checkbox" value={true} onChange={() => toggle()} />
            <span class="slider"></span>
          </label>
        </div>

        <div className="toDoContainer">
          <Textarea
            color={toggleNightMode ? "danger" : "primary"}
            disabled={false}
            minRows={1}
            placeholder="Add Todo"
            variant="solid"
            sx={{ width: "230px" }}
            onChange={(e) => handleChange(e.target.value)}
            value={newTodo}
          />
          {toggleEdit ? (
            <Button sx={{ minWidth: "150px" }} onClick={() => submitEdit()}>
              EDIT
            </Button>
          ) : (
            <SubmitButton submitTodo={submitTodo} />
          )}
        </div>

        {toDoArrList?.length !== 0 ? (
          <div>
            <ul className="toDoListItemContainer">
              {toDoArrList?.map((elem, i) => {
                return (
                  <li className="toDoListItem">
                    {elem}

                    <div style={{ display: "flex", gap: "50px" }}>
                      <IconButton variant="solid" onClick={() => editTodo(i)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="danger"
                        variant="solid"
                        onClick={() => deleteTodo(i)}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Todo;
