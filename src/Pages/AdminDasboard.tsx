// 



// import { useEffect, useState } from "react";
// import axios from "axios";

// // TYPE
// type Question = {
//   id: number;
//   question: string;
//   option1: string;
//   option2: string;
//   option3: string;
//   option4: string;
// };

// function AdminDashboard() {

//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [form, setForm] = useState({
//     question: "",
//     option1: "",
//     option2: "",
//     option3: "",
//     option4: ""
//   });

//   const [editId, setEditId] = useState<number | null>(null);

//   // 🔥 GET TOKEN
//   const token = localStorage.getItem("auth");

//   // 🔥 LOAD QUESTIONS
//   const loadQuestions = async () => {
//     try {
//       const res = await axios.get("http://localhost:8082/questions/all", {
//         headers: {
//           Authorization: `Basic ${token}`
//         }
//       });
//       setQuestions(res.data);
//     } catch (err) {
//       alert("Unauthorized ❌");
//     }
//   };

//   useEffect(() => {
//     loadQuestions();
//   }, []);

//   // 🔥 ADD / UPDATE
//   const handleSubmit = async () => {

//     if (!form.question) {
//       alert("Enter question");
//       return;
//     }

//     try {
//       if (editId) {
//         // UPDATE
//         await axios.put(
//           `http://localhost:8082/questions/${editId}`,
//           form,
//           {
//             headers: {
//               Authorization: `Basic ${token}`
//             }
//           }
//         );
//         alert("Updated ✅");
//       } else {
//         // ADD
//         await axios.post(
//           "http://localhost:8082/questions",
//           form,
//           {
//             headers: {
//               Authorization: `Basic ${token}`
//             }
//           }
//         );
//         alert("Added ✅");
//       }

//       setForm({
//         question: "",
//         option1: "",
//         option2: "",
//         option3: "",
//         option4: ""
//       });

//       setEditId(null);
//       loadQuestions();

//     } catch (err) {
//       alert("Action failed ❌");
//     }
//   };

//   // 🔥 DELETE
//   const handleDelete = async (id: number) => {
//     try {
//       await axios.delete(
//         `http://localhost:8082/questions/${id}`,
//         {
//           headers: {
//             Authorization: `Basic ${token}`
//           }
//         }
//       );
//       alert("Deleted ❌");
//       loadQuestions();
//     } catch (err) {
//       alert("Delete failed ❌");
//     }
//   };

//   // 🔥 EDIT
//   const handleEdit = (q: Question) => {
//     setForm({
//       question: q.question,
//       option1: q.option1,
//       option2: q.option2,
//       option3: q.option3,
//       option4: q.option4
//     });
//     setEditId(q.id);
//   };

//   // 🔥 LOGOUT
//   const handleLogout = () => {
//     localStorage.removeItem("auth");
//     window.location.href = "/admin-login";
//   };

//   return (
//     <div style={{ padding: "20px" }}>

//       <h2>Admin Dashboard</h2>

//       <button onClick={handleLogout}>Logout</button>

//       <hr />

//       {/* FORM */}
//       <div>
//         <input
//           placeholder="Question"
//           value={form.question}
//           onChange={e => setForm({ ...form, question: e.target.value })}
//         />

//         <input
//           placeholder="Option1"
//           value={form.option1}
//           onChange={e => setForm({ ...form, option1: e.target.value })}
//         />

//         <input
//           placeholder="Option2"
//           value={form.option2}
//           onChange={e => setForm({ ...form, option2: e.target.value })}
//         />

//         <input
//           placeholder="Option3"
//           value={form.option3}
//           onChange={e => setForm({ ...form, option3: e.target.value })}
//         />

//         <input
//           placeholder="Option4"
//           value={form.option4}
//           onChange={e => setForm({ ...form, option4: e.target.value })}
//         />

//         <br /><br />

//         <button onClick={handleSubmit}>
//           {editId ? "Update" : "Add"}
//         </button>
//       </div>

//       <hr />

//       {/* QUESTIONS LIST */}
//       {questions.map(q => (
//         <div
//           key={q.id}
//           style={{
//             border: "1px solid black",
//             margin: "10px",
//             padding: "10px"
//           }}
//         >
//           <p><b>{q.question}</b></p>
//           <p>A: {q.option1}</p>
//           <p>B: {q.option2}</p>
//           <p>C: {q.option3}</p>
//           <p>D: {q.option4}</p>

//           <button onClick={() => handleEdit(q)}>Edit</button>
//           <button onClick={() => handleDelete(q.id)}>Delete</button>
//         </div>
//       ))}

//     </div>
//   );
// }

// export default AdminDashboard;



// import { useEffect, useState } from "react";
// import axios from "axios";

// type Question = {
//   id: number;
//   question: string;
//   option1: string;
//   option2: string;
//   option3: string;
//   option4: string;
// };

// type StudentData = {
//   id: number;
//   name: string;
//   email: string;
//   questionId: number;
//   selectedOption: string;
// };

// function AdminDashboard() {

//   const [activeTab, setActiveTab] = useState("questions");
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [students, setStudents] = useState<StudentData[]>([]);

//   const [form, setForm] = useState({
//     question: "",
//     option1: "",
//     option2: "",
//     option3: "",
//     option4: ""
//   });

//   const [editId, setEditId] = useState<number | null>(null);

//   const token = localStorage.getItem("auth");

//   const loadQuestions = async () => {
//     const res = await axios.get("http://localhost:8082/questions/all", {
//       headers: { Authorization: `Basic ${token}` }
//     });
//     setQuestions(res.data);
//   };

//   const loadStudents = async () => {
//     const res = await axios.get("http://localhost:8082/student/dashboard", {
//       headers: { Authorization: `Basic ${token}` }
//     });
//     setStudents(res.data);
//   };

//   useEffect(() => {
//     if (activeTab === "questions") loadQuestions();
//     if (activeTab === "dashboard") loadStudents();
//   }, [activeTab]);

//   const handleSubmit = async () => {
//     if (!form.question) return alert("Enter question");

//     if (editId) {
//       await axios.put(`http://localhost:8082/questions/${editId}`, form, {
//         headers: { Authorization: `Basic ${token}` }
//       });
//     } else {
//       await axios.post("http://localhost:8082/questions", form, {
//         headers: { Authorization: `Basic ${token}` }
//       });
//     }

//     setForm({ question: "", option1: "", option2: "", option3: "", option4: "" });
//     setEditId(null);
//     loadQuestions();
//   };

//   const handleEdit = (q: Question) => {
//     setForm(q);
//     setEditId(q.id);
//   };

//   const handleDelete = async (id: number) => {
//     await axios.delete(`http://localhost:8082/questions/${id}`, {
//       headers: { Authorization: `Basic ${token}` }
//     });
//     loadQuestions();
//   };

//   const logout = () => {
//     localStorage.removeItem("auth");
//     window.location.href = "/admin-login";
//   };

//   const downloadCSV = () => {
//     window.open("http://localhost:8082/student/download", "_blank");
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">

//       {/* 🔹 SIDEBAR */}
//       <div className="w-64 bg-gray-900 text-white p-5">
//         <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

//         <button onClick={() => setActiveTab("questions")}
//           className="w-full mb-3 p-2 bg-blue-600 rounded hover:bg-blue-700">
//           Questions
//         </button>

//         <button onClick={() => setActiveTab("dashboard")}
//           className="w-full mb-3 p-2 bg-green-600 rounded hover:bg-green-700">
//           Dashboard
//         </button>

//         <button onClick={downloadCSV}
//           className="w-full mb-3 p-2 bg-yellow-500 rounded hover:bg-yellow-600">
//           Download CSV
//         </button>

//         <button onClick={logout}
//           className="w-full p-2 bg-red-600 rounded hover:bg-red-700">
//           Logout
//         </button>
//       </div>

//       {/* 🔹 MAIN */}
//       <div className="flex-1 p-6 overflow-auto">

//         {/* 🔥 QUESTIONS */}
//         {activeTab === "questions" && (
//           <>
//             <h2 className="text-2xl font-semibold mb-4">Manage Questions</h2>

//             <div className="bg-white p-4 rounded shadow mb-6 space-y-2">
//               <input className="w-full p-2 border rounded"
//                 placeholder="Question"
//                 value={form.question}
//                 onChange={e => setForm({ ...form, question: e.target.value })} />

//               <input className="w-full p-2 border rounded"
//                 placeholder="Option1"
//                 value={form.option1}
//                 onChange={e => setForm({ ...form, option1: e.target.value })} />

//               <input className="w-full p-2 border rounded"
//                 placeholder="Option2"
//                 value={form.option2}
//                 onChange={e => setForm({ ...form, option2: e.target.value })} />

//               <input className="w-full p-2 border rounded"
//                 placeholder="Option3"
//                 value={form.option3}
//                 onChange={e => setForm({ ...form, option3: e.target.value })} />

//               <input className="w-full p-2 border rounded"
//                 placeholder="Option4"
//                 value={form.option4}
//                 onChange={e => setForm({ ...form, option4: e.target.value })} />

//               <button onClick={handleSubmit}
//                 className="bg-blue-600 text-white px-4 py-2 rounded">
//                 {editId ? "Update" : "Add"}
//               </button>
//             </div>

//             {questions.map(q => (
//               <div key={q.id} className="bg-white p-4 rounded shadow mb-3">
//                 <p className="font-semibold">{q.question}</p>
//                 <p>A: {q.option1}</p>
//                 <p>B: {q.option2}</p>
//                 <p>C: {q.option3}</p>
//                 <p>D: {q.option4}</p>

//                 <div className="mt-2 space-x-2">
//                   <button onClick={() => handleEdit(q)}
//                     className="px-3 py-1 bg-green-500 text-white rounded">
//                     Edit
//                   </button>

//                   <button onClick={() => handleDelete(q.id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded">
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </>
//         )}

//         {/* 🔥 DASHBOARD */}
//         {activeTab === "dashboard" && (
//           <>
//             <h2 className="text-2xl font-semibold mb-4">Student Data</h2>

//             <div className="bg-white p-4 rounded shadow overflow-auto">
//               <table className="w-full text-left border-collapse">
//                 <thead>
//                   <tr className="bg-gray-200">
//                     <th className="p-2">Name</th>
//                     <th className="p-2">Email</th>
//                     <th className="p-2">Question</th>
//                     <th className="p-2">Answer</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {students.map((s, i) => (
//                     <tr key={i} className="border-t">
//                       <td className="p-2">{s.name}</td>
//                       <td className="p-2">{s.email}</td>
//                       <td className="p-2">{s.questionId}</td>
//                       <td className="p-2">{s.selectedOption}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </>
//         )}

//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;


import { useEffect, useState } from "react";
import axios from "axios";

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
    const res = await axios.get("http://localhost:8082/questions/all", {
      headers: { Authorization: `Basic ${token}` }
    });

    // sort by ID (important)
    setQuestions(res.data.sort((a: Question, b: Question) => a.id - b.id));
  };

  // 🔥 LOAD STUDENTS
  const loadStudents = async () => {
    const res = await axios.get("http://localhost:8082/student/dashboard", {
      headers: { Authorization: `Basic ${token}` }
    });
    setStudents(res.data);
  };

  useEffect(() => {
    if (mode === "view") loadQuestions();
    if (mode === "dash") {
      loadStudents();
      loadQuestions(); // 🔥 VERY IMPORTANT
    }
  }, [mode]);

  // 🔥 ADD / UPDATE
  const handleSubmit = async () => {

    if (!form.question) return alert("Enter question");

    if (editId) {
      await axios.put(
        `http://localhost:8082/questions/${editId}`,
        form,
        { headers: { Authorization: `Basic ${token}` } }
      );
      alert("Updated ✅");
    } else {
      await axios.post(
        "http://localhost:8082/questions",
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
    await axios.delete(`http://localhost:8082/questions/${id}`, {
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

      {/* 🔹 MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white flex items-center p-3 z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} className="mr-3 text-xl">
          ☰
        </button>
        <h2 className="text-lg font-semibold">Admin Panel</h2>
      </div>

      {/* 🔹 SIDEBAR */}
      <div className={`
        fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-white p-5
        transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300 z-40
      `}>
        <h2 className="text-2xl font-bold mb-6 hidden md:block">Admin Panel</h2>

        <button onClick={() => { setMode("add"); setMenuOpen(false); }}
          className="w-full mb-3 p-2 bg-blue-600 rounded">
          Add Question
        </button>

        <button onClick={() => { setMode("view"); setMenuOpen(false); }}
          className="w-full mb-3 p-2 bg-green-600 rounded">
          View Questions
        </button>

        <button onClick={() => { setMode("dash"); setMenuOpen(false); }}
          className="w-full mb-3 p-2 bg-purple-600 rounded">
          Dashboard
        </button>

        <button onClick={logout}
          className="w-full p-2 bg-red-600 rounded">
          Logout
        </button>
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="flex-1 p-4 md:p-6 overflow-auto w-full mt-14 md:mt-0">

        {/* ✅ ADD */}
        {mode === "add" && (
          <div className="bg-white p-4 md:p-6 rounded shadow max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">
              {editId ? "Edit Question" : "Add Question"}
            </h2>

            {["question", "option1", "option2", "option3", "option4"].map((field) => (
              <input
                key={field}
                className="w-full p-2 border rounded mb-2"
                placeholder={field}
                value={(form as any)[field]}
                onChange={e => setForm({ ...form, [field]: e.target.value })}
              />
            ))}

            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-5 py-2 rounded w-full"
            >
              {editId ? "Update" : "Add Question"}
            </button>
          </div>
        )}

        {/* ✅ VIEW QUESTIONS */}
        {mode === "view" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Questions List</h2>

            {questions.map((q, i) => (
              <div key={q.id} className="bg-white p-4 rounded shadow mb-3">
                <p className="font-bold mb-2">
                  {i + 1}. {q.question}
                </p>

                <p>A: {q.option1}</p>
                <p>B: {q.option2}</p>
                <p>C: {q.option3}</p>
                <p>D: {q.option4}</p>

                <div className="mt-3 flex gap-2">
                  <button onClick={() => handleEdit(q)}
                    className="px-3 py-1 bg-green-500 text-white rounded">
                    Edit
                  </button>

                  <button onClick={() => handleDelete(q.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ✅ DASHBOARD */}
        {/* ✅ DASHBOARD */}
{mode === "dash" && (

  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row justify-between mb-6 gap-3">
      <h2 className="text-2xl font-bold">Student Results</h2>

      <button
        onClick={() => window.open("http://localhost:8082/student/download")}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
      >
        Download CSV
      </button>
    </div>

    {/* 🔥 GROUP DATA BY USER */}
    {(() => {

      const grouped = students.reduce((acc: any, curr) => {

        if (!acc[curr.email]) {
          acc[curr.email] = {
            name: curr.name,
            email: curr.email,
            answers: []
          };
        }

        acc[curr.email].answers.push(curr);

        return acc;

      }, {});

      return (

        <div className="space-y-6">

          {Object.values(grouped).map((user: any, i) => (

            <div key={i} className="bg-white p-5 rounded-xl shadow">

              {/* USER INFO */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  👤 {user.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {user.email}
                </p>
              </div>

              {/* ANSWERS GRID */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">

                {user.answers.map((a: any, index: number) => {

                  const qIndex = questions.findIndex(
                    q => q.id === a.questionId
                  );

                  const question = questions.find(
                    q => q.id === a.questionId
                  );

                  return (
                    <div
                      key={index}
                      className="p-3 border rounded-lg bg-gray-50"
                    >

                      {/* QUESTION NUMBER */}
                      <p className="font-medium text-sm">
                        Q{qIndex === -1 ? "Deleted" : qIndex + 1}
                      </p>

                      {/* QUESTION TEXT */}
                      <p className="text-xs text-gray-500 mb-1">
                        {question
                          ? question.question
                          : "Question Deleted"}
                      </p>

                      {/* ANSWER */}
                      <p className="text-blue-600 font-semibold">
                        Answer: {a.selectedOption}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          ))}

        </div>

      );

    })()}

  </div>

)}











      </div>
    </div>
















  );
}

export default AdminDashboard;