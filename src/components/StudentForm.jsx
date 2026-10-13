import { useEffect, useState } from "react";

const emptyForm = {
  registration: "",
  name: "",
  program: "",
  semester: "",
};

function StudentForm({ selectedStudent, onSave, onCancel }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    setForm(
      selectedStudent
        ? {
            registration: selectedStudent.registration || "",
            name: selectedStudent.name || "",
            program: selectedStudent.program || "",
            semester: selectedStudent.semester || "",
          }
        : emptyForm,
    );
  }, [selectedStudent]);

  const handleChange = (e) => {
    setForm((currentForm) => ({
      ...currentForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.registration || !form.name) {
      alert("Registration ID and Name are required");
      return;
    }

    await onSave(form);

    if (!selectedStudent) {
      setForm(emptyForm);
    }
  };

  return (
    <div className="form-card">
      <h2>{selectedStudent ? "Update Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="registration"
          placeholder="Registration ID"
          value={form.registration}
          onChange={handleChange}
        />

        <input
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="program"
          placeholder="Program"
          value={form.program}
          onChange={handleChange}
        />

        <input
          name="semester"
          placeholder="Semester"
          value={form.semester}
          onChange={handleChange}
        />

        <button type="submit" className="primary-btn">
          {selectedStudent ? "Update Student" : "Add Student"}
        </button>

        {selectedStudent && (
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default StudentForm;
