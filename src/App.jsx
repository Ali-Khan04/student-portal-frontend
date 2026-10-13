import { useEffect, useState } from "react";

import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentApi";

import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error(error);
      console.log("Could not load students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleSave = async (studentData) => {
    try {
      if (selectedStudent) {
        await updateStudent(selectedStudent.id, studentData);
        setSelectedStudent(null);
      } else {
        await addStudent(studentData);
      }

      await loadStudents();
    } catch (error) {
      console.error("Could not save student:", error);
    }
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);
      await loadStudents();
    } catch (error) {
      console.error("Could not delete student:", error);
    }
  };

  return (
    <>
      <Header />

      <main className="container">
        <StudentForm
          selectedStudent={selectedStudent}
          onSave={handleSave}
          onCancel={() => setSelectedStudent(null)}
        />

        {loading ? (
          <p>Loading students...</p>
        ) : (
          <StudentList
            students={students}
            onEdit={setSelectedStudent}
            onDelete={handleDelete}
          />
        )}
      </main>

      <footer>Air University Cloud Computing Lab</footer>
    </>
  );
}

export default App;
