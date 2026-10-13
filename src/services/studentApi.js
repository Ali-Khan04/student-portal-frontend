const API_URL = "http://44.204.125.58/api/students";

export async function getStudents() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function addStudent(student) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  return response.json();
}

export async function updateStudent(id, student) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  return response.json();
}

export async function deleteStudent(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  return response.json();
}
