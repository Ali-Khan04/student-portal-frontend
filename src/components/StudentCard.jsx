function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p>
        <strong>Registration:</strong> {student.registration}
      </p>

      <p>
        <strong>Program:</strong> {student.program}
      </p>

      <p>
        <strong>Semester:</strong> {student.semester}
      </p>

      <div className="actions">
        <button className="edit-btn" onClick={() => onEdit(student)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
