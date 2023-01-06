import React, { useEffect, useState } from "react";

export default function AddStudent({ propsadd, data }) {
  const initialStudent = { id: "", name: "", age: "", editable: 0 };
  const [student, setstudent] = useState(data);
  useEffect(() => {
    setstudent(data);
  }, [data]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setstudent({ ...student, [name]: value });
  };
  function resetStudent() {
    setstudent(initialStudent);
  }
  return (
    <>
      <label>name</label>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleInputChange}
      />
      <label>age</label>
      <input
        type="text"
        name="age"
        value={student.age}
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          propsadd(student);
          resetStudent();
        }}
      >
        {student.editable === 1 ? "edit record" : "add new record"}
      </button>
    </>
  );
}
