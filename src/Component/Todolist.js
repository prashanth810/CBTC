import React, { useState } from "react";
import "./Todo.css";

const Todolist = () => {
  const [inputvalue, setInputvalue] = useState("");
  const [status, setStatus] = useState([
    {
      name: "Add Event",
      completed: false,
    },
  ]);

  const handlechange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleadd = (e) => {
    e.preventDefault();
    if (inputvalue.length > 0) {
      setStatus([...status, { name: inputvalue }]);
    } else {
      alert("Please Enter Task");
    }
    setInputvalue("");
  };

  const handledelete = (i) => {
    const newstatus = [...status];
    newstatus.splice(i, 1);
    setStatus(newstatus);
  };

  const handleDone = (index) => {
    const newstatus = status.map((item, i) => {
      if (i === index) {
        return { ...item, completed: true };
      }
      return item;
    });
    setStatus(newstatus);
  };

  const incompletetask = status.filter((item) => !item.completed);
  const completedtask = status.filter((item) => item.completed);

  return (
    <div>
      <form className="todo-form">
        <h2 className="todo-heading"> Todo - List </h2>
        <div className="todo-div">
          <input
            className="todoinput"
            placeholder="Enter Events...."
            type="text"
            value={inputvalue}
            onChange={handlechange}
          />
          <button className="todobtn" onClick={handleadd}>
            ADD
          </button>
        </div>
      </form>

      <div className="todo_list">
        <table className="todo-table">
          <tr className="todo-row">
            <th className="todo_sno"> S.no </th>
            <th className="todo_sno"> Task_Name </th>
            <th className="todo_sno"> Completed </th>
            <th className="todo_sno"> Action </th>
          </tr>
          {incompletetask.map((val, i) => {
            return (
              <tr key={i} className="todo_list2">
                <td className="todo_sno">{i + 1}</td>
                <td className="todo_sno">{val.name}</td>
                <td className="todo-done">
                  <button className="todo-done2" onClick={() => handleDone(i)}>
                    Done
                  </button>
                </td>
                <td className="todo_sno">
                  <button
                    className="todo-delete"
                    onClick={() => handledelete(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      {/* complete tasks */}

      <div className="todo_list">
        <table className="todo-table">
          <tr className="todo-row">
            <th className="todo_sno"> S.no </th>
            <th className="todo_sno"> Task_Name </th>
            <th className="todo_sno"> Completed </th>
            <th className="todo_sno"> Action </th>
          </tr>
          {completedtask.map((val, i) => {
            return (
              <tr key={i} className="todo_list2">
                <td className="todo_sno">{i + 1}</td>
                <td className="todo_sno">{val.name}</td>
                <td className="todo-done">
                  {val.completed ? (
                    <i className="fa-solid fa-check correct-icon"></i>
                  ) : (
                    <button
                      className="todo-done2"
                      onClick={() => handleDone(i)}
                    >
                      Done
                    </button>
                  )}
                </td>
                <td className="todo_sno">
                  <button
                    className="todo-delete"
                    onClick={() => handledelete(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Todolist;
