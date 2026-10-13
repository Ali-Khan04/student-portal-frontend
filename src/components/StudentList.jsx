import StudentCard from "./StudentCard";

function StudentList({ students, onEdit, onDelete }) {
  return (
    <div>
      <h2 className="section-title">Student Records</h2>

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;
