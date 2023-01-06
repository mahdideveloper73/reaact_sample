import React, { useState } from "react";
import AddStudent from "./AddStudent";

export default function StudentSelectResult() {
  let temp = [
    { id: "1", name: "mahdi", age: "28", editable: 0 },
    { id: "2", name: "hassan", age: "25", editable: 0 },
    { id: "3", name: "hossine", age: "30", editable: 0 },
  ];
  const initialFormState = { id: "", name: "", age: "", editable: "0" };
  const [students, setstudents] = useState(temp);
  const [student, setstudent] = useState(initialFormState);

  function deleteStudent(student) {
    setstudents(students.filter((item) => item.id !== student.id));
  }
  function addNewStudent(student) {
    debugger;
    if (student.name === "" || student.age === "") {
      alert("please enter name and age !!!!!!!");
      return;
    }
    if (student.id != null) {
      let searchObject = students.find((i) => i.id === student.id);
      if (searchObject !== undefined) {
        searchObject.name = student.name;
        searchObject.age = student.age;
        searchObject.editable = 0;
        setstudents(students);
        setstudent(initialFormState);
        return;
      }
    }
    student.id = students.length + 1;
    student.editable = 0;
    setstudents([...students, student]);
  }
  function setStudent(item, editable) {
    item.editable = editable;
    if (editable) {
      setstudent(item);
    } else {
      setstudent(initialFormState);
    }
  }

  const listItems = students.map((item, i) => (
    <tr
      key={item.id}
      style={{ backgroundColor: item.editable === 1 ? "yellow" : "white" }}
    >
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.editable}</td>
      <td>
        <button hidden={item.editable} onClick={() => setStudent(item, 1)}>
          edit
        </button>
        <button hidden={!item.editable} onClick={() => setStudent(item, 0)}>
          cancel
        </button>
        <button onClick={() => deleteStudent(item)}>delete</button>
      </td>
    </tr>
  ));
  return (
    <>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>action</th>
        </tr>
        {listItems}
      </table>

      <AddStudent data={student} propsadd={addNewStudent} />
    </>
  );
}
