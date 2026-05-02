





import { useEffect, useState } from "react";
import axios from "axios";

// ✅ ADD THESE TWO
const STUDENT_API = "https://examsystem-3.onrender.com";
const QUESTION_API = "https://examsystem-4.onrender.com";

type Question = {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
};

type StudentData = {
  name: string;
  email: string;
  questionId: number;
  selectedOption: string;
};

function AdminDashboard() {

  const [mode, setMode] = useState<"add" | "view" | "dash">("add");
  const [menuOpen, setMenuOpen] = useState(false);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [students, setStudents] = useState<StudentData[]>([]);



  const [editId, setEditId] = useState<number | null>(null);

  const [form, setForm] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: ""
  });

  const token = localStorage.getItem("auth");

  // 🔥 LOAD QUESTIONS
  const loadQuestions = async () => {
    const res = await axios.get(`${QUESTION_API}/questions/all`, {
      headers: { Authorization: `Basic ${token}` }
    });

    setQuestions(res.data.sort((a: Question, b: Question) => a.id - b.id));
  };

  // 🔥 LOAD STUDENTS
  const loadStudents = async () => {
    const res = await axios.get(`${STUDENT_API}/student/dashboard`, {
      headers: { Authorization: `Basic ${token}` }
    });
    setStudents(res.data);
  };

  console.log(questions);
  useEffect(() => {
    if (mode === "view") loadQuestions();
    if (mode === "dash") {
      loadStudents();
      loadQuestions();
    }
  }, [mode]);

  // 🔥 ADD / UPDATE
  const handleSubmit = async () => {

    if (!form.question) return alert("Enter question");

    if (editId) {
      await axios.put(
        `${QUESTION_API}/questions/${editId}`,
        form,
        { headers: { Authorization: `Basic ${token}` } }
      );
      alert("Updated ✅");
    } else {
      await axios.post(
        `${QUESTION_API}/questions`,
        form,
        { headers: { Authorization: `Basic ${token}` } }
      );
      alert("Added ✅");
    }

    setForm({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: ""
    });

    setEditId(null);
  };

  // 🔥 EDIT
  const handleEdit = (q: Question) => {
    setForm(q);
    setEditId(q.id);
    setMode("add");
  };

  // 🔥 DELETE
  const handleDelete = async (id: number) => {
    await axios.delete(`${QUESTION_API}/questions/${id}`, {
      headers: { Authorization: `Basic ${token}` }
    });
    loadQuestions();
  };

  // 🔥 LOGOUT
  const logout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/admin-login";
  };

  return (
    <div className="flex h-screen bg-gray-100">

      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white flex items-center p-3 z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} className="mr-3 text-xl">☰</button>
        <h2 className="text-lg font-semibold">Admin Panel</h2>
      </div>

      <div className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-white p-5
        transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform`}>

        <button onClick={() => setMode("add")} className="w-full mb-3 p-2 bg-blue-600 rounded">
          Add Question
        </button>

        <button onClick={() => setMode("view")} className="w-full mb-3 p-2 bg-green-600 rounded">
          View Questions
        </button>

        <button onClick={() => setMode("dash")} className="w-full mb-3 p-2 bg-purple-600 rounded">
          Dashboard
        </button>

        <button onClick={logout} className="w-full p-2 bg-red-600 rounded">
          Logout
        </button>
      </div>

      <div className="flex-1 p-4">

        {/* DASHBOARD */}
        {mode === "dash" && (
          <button
            onClick={() => window.open(`${STUDENT_API}/student/download`)}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Download CSV
          </button>
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;