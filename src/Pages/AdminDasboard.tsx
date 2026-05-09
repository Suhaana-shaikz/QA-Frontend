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
// const STUDENT_API = "https://examsystem-3.onrender.com";
// const QUESTION_API = "https://examsystem-4.onrender.com";

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

//   // };
//   // const loadQuestions = async () => {
//   //   const res = await axios.get(`${QUESTION_API}/questions/all`, {
//   //     headers: { Authorization: `Basic ${token}` }
//   //   });

//   //     const loadStudents = async () => {
//   //   const res = await axios.get(`${STUDENT_API}/student/dashboard`, {
//   //     headers: { Authorization: `Basic ${token}` }
//   //   });


//   const loadQuestions = async () => {
//   const res = await axios.get(`${QUESTION_API}/questions/all`, {
//     headers: { Authorization: `Basic ${token}` }
//   });

//   setQuestions(res.data);   // 🔥 IMPORTANT
// };

// const loadStudents = async () => {
//   const res = await axios.get(`${STUDENT_API}/student/dashboard`, {
//     headers: { Authorization: `Basic ${token}` }
//   });

//   setStudents(res.data);   // 🔥 IMPORTANT
// };


//   useEffect(() => {
//     if (activeTab === "questions") loadQuestions();
//     if (activeTab === "dashboard") loadStudents();
//   }, [activeTab]);

//   const handleSubmit = async () => {
//     if (!form.question) return alert("Enter question");

//     if (editId) {
//       await axios.put(`${QUESTION_API}/questions/${editId}`, form, {
//         headers: { Authorization: `Basic ${token}` }
//       });
//     } else {
//     await axios.post(`${QUESTION_API}/questions`, form, {
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
//     await axios.delete(`${QUESTION_API}/questions/${id}`, {
//       headers: { Authorization: `Basic ${token}` }
//     });
//     loadQuestions();
//   };

//   const logout = () => {
//     localStorage.removeItem("auth");
//     window.location.href = "/admin-login";
//   };

//   const downloadCSV = () => {
//     window.open("${STUDENT_API}/student/download", "_blank");
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





















// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // // ✅ ADD THESE TWO


// // type Question = {
// //   id: number;
// //   question: string;
// //   option1: string;
// //   option2: string;
// //   option3: string;
// //   option4: string;
// // };

// // type StudentData = {
// //   name: string;
// //   email: string;
// //   questionId: number;
// //   selectedOption: string;
// // };

// // function AdminDashboard() {

// //   const [mode, setMode] = useState<"add" | "view" | "dash">("add");
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const [questions, setQuestions] = useState<Question[]>([]);
// //   const [students, setStudents] = useState<StudentData[]>([]);



// //   const [editId, setEditId] = useState<number | null>(null);

// //   const [form, setForm] = useState({
// //     question: "",
// //     option1: "",
// //     option2: "",
// //     option3: "",
// //     option4: ""
// //   });

// //   const token = localStorage.getItem("auth");

// //   // 🔥 LOAD QUESTIONS
// //   const loadQuestions = async () => {
// //     const res = await axios.get(`${QUESTION_API}/questions/all`, {
// //       headers: { Authorization: `Basic ${token}` }
// //     });

// //     setQuestions(res.data.sort((a: Question, b: Question) => a.id - b.id));
// //   };

// //   // 🔥 LOAD STUDENTS
// //   const loadStudents = async () => {
// //     const res = await axios.get(`${STUDENT_API}/student/dashboard`, {
// //       headers: { Authorization: `Basic ${token}` }
// //     });
// //     setStudents(res.data);
// //   };

// //   console.log(questions);
// //   useEffect(() => {
// //     if (mode === "view") loadQuestions();
// //     if (mode === "dash") {
// //       loadStudents();
// //       loadQuestions();
// //     }
// //   }, [mode]);

// //   // 🔥 ADD / UPDATE
// //   const handleSubmit = async () => {

// //     if (!form.question) return alert("Enter question");

// //     if (editId) {
// //       await axios.put(
// //         `${QUESTION_API}/questions/${editId}`,
// //         form,
// //         { headers: { Authorization: `Basic ${token}` } }
// //       );
// //       alert("Updated ✅");
// //     } else {
// //       await axios.post(
// //         `${QUESTION_API}/questions`,
// //         form,
// //         { headers: { Authorization: `Basic ${token}` } }
// //       );
// //       alert("Added ✅");
// //     }

// //     setForm({
// //       question: "",
// //       option1: "",
// //       option2: "",
// //       option3: "",
// //       option4: ""
// //     });

// //     setEditId(null);
// //   };

// //   // 🔥 EDIT
// //   const handleEdit = (q: Question) => {
// //     setForm(q);
// //     setEditId(q.id);
// //     setMode("add");
// //   };

// //   // 🔥 DELETE
// //   const handleDelete = async (id: number) => {
// //     await axios.delete(`${QUESTION_API}/questions/${id}`, {
// //       headers: { Authorization: `Basic ${token}` }
// //     });
// //     loadQuestions();
// //   };

// //   // 🔥 LOGOUT
// //   const logout = () => {
// //     localStorage.removeItem("auth");
// //     window.location.href = "/admin-login";
// //   };

// //   return (
// //     <div className="flex h-screen bg-gray-100">

// //       <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white flex items-center p-3 z-50">
// //         <button onClick={() => setMenuOpen(!menuOpen)} className="mr-3 text-xl">☰</button>
// //         <h2 className="text-lg font-semibold">Admin Panel</h2>
// //       </div>

// //       <div className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-white p-5
// //         transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}
// //         md:translate-x-0 transition-transform`}>

// //         <button onClick={() => setMode("add")} className="w-full mb-3 p-2 bg-blue-600 rounded">
// //           Add Question
// //         </button>

// //         <button onClick={() => setMode("view")} className="w-full mb-3 p-2 bg-green-600 rounded">
// //           View Questions
// //         </button>

// //         <button onClick={() => setMode("dash")} className="w-full mb-3 p-2 bg-purple-600 rounded">
// //           Dashboard
// //         </button>

// //         <button onClick={logout} className="w-full p-2 bg-red-600 rounded">
// //           Logout
// //         </button>
// //       </div>

// //       <div className="flex-1 p-4">

// //         {/* DASHBOARD */}
// //         {mode === "dash" && (
// //           <button
// //             onClick={() => window.open(`${STUDENT_API}/student/download`)}
// //             className="bg-yellow-500 text-white px-4 py-2 rounded"
// //           >
// //             Download CSV
// //           </button>
// //         )}

// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminDashboard;












import { useEffect, useState } from "react";
import axios, { type AxiosResponse } from "axios";
import {
  LayoutDashboard,
  PlusCircle,
  Eye,
  LogOut,
  Download,
  Pencil,
  Trash2,
  Menu
} from "lucide-react";

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

type Mode = "add" | "view" | "dash";

function AdminDashboard() {

  const [mode, setMode] = useState<Mode>("add");

  const [questions, setQuestions] = useState<Question[]>([]);
  const [students, setStudents] = useState<StudentData[]>([]);

  const [editId, setEditId] = useState<number | null>(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  const [form, setForm] = useState<Omit<Question, "id">>({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: ""
  });

  const token = localStorage.getItem("auth");

  const getHeaders = () => {
    return token
      ? { Authorization: `Basic ${token}` }
      : {};
  };

  const loadQuestions = async () => {
    try {
      const res: AxiosResponse<Question[]> = await axios.get(
        `${QUESTION_API}/questions/all`,
        { headers: getHeaders() }
      );

      setQuestions(res.data.sort((a, b) => a.id - b.id));

    } catch (error) {
      console.error(error);
    }
  };

  const loadStudents = async () => {
    try {
      const res: AxiosResponse<StudentData[]> = await axios.get(
        `${STUDENT_API}/student/dashboard`,
        { headers: getHeaders() }
      );

      setStudents(res.data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (mode === "view") loadQuestions();

    if (mode === "dash") {
      loadStudents();
      loadQuestions();
    }
  }, [mode]);

  const handleSubmit = async () => {

    if (!form.question.trim()) {
      alert("Enter Question");
      return;
    }

    try {

      if (editId !== null) {

        await axios.put(
          `${QUESTION_API}/questions/${editId}`,
          form,
          { headers: getHeaders() }
        );

        alert("Updated Successfully");

      } else {

        await axios.post(
          `${QUESTION_API}/questions`,
          form,
          { headers: getHeaders() }
        );

        alert("Question Added");
      }

      setForm({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: ""
      });

      setEditId(null);

      loadQuestions();

    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (q: Question) => {
    const { id, ...rest } = q;
    setForm(rest);
    setEditId(id);
    setMode("add");
  };

  const handleDelete = async (id: number) => {
    try {

      await axios.delete(
        `${QUESTION_API}/questions/${id}`,
        { headers: getHeaders() }
      );

      loadQuestions();

    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/admin-login";
  };

return (
  <div className="min-h-screen bg-[#0b1120] flex relative overflow-hidden">

    {/* BACKGROUND EFFECTS */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-[140px] rounded-full"></div>

    {/* MOBILE TOPBAR */}
    <div className="
      lg:hidden fixed top-0 left-0 right-0
      bg-[#0f172a]/90 backdrop-blur-xl
      border-b border-white/10
      z-50 p-4
      flex items-center justify-between
    ">

      <h1 className="
        text-2xl font-black
        bg-gradient-to-r from-cyan-400 to-blue-500
        bg-clip-text text-transparent
      ">
        Admin Panel
      </h1>

      <button onClick={() => setMobileMenu(!mobileMenu)}>
        <Menu className="text-white" />
      </button>

    </div>

    {/* SIDEBAR */}
    <aside className={`
      fixed top-0 left-0 z-50
      h-screen w-[290px]
      bg-white/10
      backdrop-blur-2xl
      border-r border-white/10
      p-6 transition-all duration-300
      flex flex-col
      ${mobileMenu ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    `}>

      {/* LOGO */}
      <div>

        <h1 className="
          text-4xl font-black
          bg-gradient-to-r from-cyan-400 to-blue-500
          bg-clip-text text-transparent
        ">
          Admin
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          Online Examination System
        </p>

      </div>

      {/* MENU */}
      <div className="mt-10 space-y-4">

        <button
          onClick={() => {
            setMode("add");
            setMobileMenu(false);
          }}
          className="
            w-full flex items-center gap-3
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:from-cyan-600 hover:to-blue-700
            px-5 py-4 rounded-2xl
            text-white font-semibold
            shadow-2xl shadow-cyan-500/20
            transition-all hover:scale-[1.02]
          "
        >
          <PlusCircle size={20} />
          Add Question
        </button>

        <button
          onClick={() => {
            setMode("view");
            setMobileMenu(false);
          }}
          className="
            w-full flex items-center gap-3
            bg-gradient-to-r from-emerald-500 to-green-600
            hover:from-emerald-600 hover:to-green-700
            px-5 py-4 rounded-2xl
            text-white font-semibold
            shadow-2xl shadow-emerald-500/20
            transition-all hover:scale-[1.02]
          "
        >
          <Eye size={20} />
          View Questions
        </button>

        <button
          onClick={() => {
            setMode("dash");
            setMobileMenu(false);
          }}
          className="
            w-full flex items-center gap-3
            bg-gradient-to-r from-violet-500 to-purple-600
            hover:from-violet-600 hover:to-purple-700
            px-5 py-4 rounded-2xl
            text-white font-semibold
            shadow-2xl shadow-violet-500/20
            transition-all hover:scale-[1.02]
          "
        >
          <LayoutDashboard size={20} />
          Dashboard
        </button>

      </div>

      {/* LOGOUT */}
      <div className="mt-auto">

        <button
          onClick={logout}
          className="
            w-full flex items-center justify-center gap-3
            bg-gradient-to-r from-red-500 to-rose-600
            hover:from-red-600 hover:to-rose-700
            px-5 py-4 rounded-2xl
            text-white font-semibold
            shadow-2xl shadow-red-500/20
            transition-all hover:scale-[1.02]
          "
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>

    {/* MAIN CONTENT */}
    <main className="
      flex-1 lg:ml-[290px]
      p-4 md:p-8 lg:p-10
      mt-20 lg:mt-0
      relative z-10
    ">

      {/* ADD QUESTION */}
      {mode === "add" && (
        <div className="
          max-w-4xl mx-auto
          bg-white/10
          backdrop-blur-2xl
          border border-white/10
          rounded-[32px]
          p-8 md:p-10
          shadow-[0_8px_32px_rgba(0,0,0,0.37)]
        ">

          <div className="mb-8">

            <p className="
              text-cyan-400 uppercase
              tracking-[4px]
              text-sm font-semibold
            ">
              Question Management
            </p>

            <h2 className="
              text-3xl md:text-4xl
              font-black text-white mt-2
            ">
              {editId ? "Update Question" : "Add Question"}
            </h2>

          </div>

          <div className="grid gap-5">

            {Object.keys(form).map((key) => (
              <input
                key={key}
                type="text"
                placeholder={`Enter ${key}`}
                value={form[key as keyof typeof form]}
                onChange={(e) =>
                  setForm({ ...form, [key]: e.target.value })
                }
                className="
                  w-full
                  bg-white/5
                  border border-white/10
                  text-white
                  placeholder:text-slate-400
                  focus:border-cyan-400
                  focus:ring-4 focus:ring-cyan-500/20
                  outline-none
                  transition-all
                  p-4 rounded-2xl
                "
              />
            ))}

            <button
              onClick={handleSubmit}
              className="
                mt-2
                bg-gradient-to-r from-cyan-500 to-blue-600
                hover:from-cyan-600 hover:to-blue-700
                text-white py-4
                rounded-2xl
                text-lg font-bold
                shadow-2xl shadow-cyan-500/20
                transition-all hover:scale-[1.02]
              "
            >
              {editId ? "Update Question" : "Add Question"}
            </button>

          </div>

        </div>
      )}

      {/* VIEW QUESTIONS */}
      {mode === "view" && (
        <div className="grid gap-6">

          {questions.map((q) => (
            <div
              key={q.id}
              className="
                bg-white/10
                backdrop-blur-2xl
                border border-white/10
                rounded-[28px]
                p-6
                shadow-2xl
              "
            >

              <h3 className="
                text-2xl font-bold
                text-white
              ">
                {q.question}
              </h3>

              <div className="
                grid md:grid-cols-2
                gap-4 mt-6
              ">

                {[q.option1, q.option2, q.option3, q.option4]
                  .map((opt, i) => (

                  <div
                    key={i}
                    className="
                      bg-white/5
                      border border-white/10
                      p-4 rounded-2xl
                      text-slate-200
                    "
                  >
                    {String.fromCharCode(65 + i)}. {opt}
                  </div>

                ))}

              </div>

              <div className="flex gap-4 mt-6">

                <button
                  onClick={() => handleEdit(q)}
                  className="
                    flex items-center gap-2
                    bg-emerald-500 hover:bg-emerald-600
                    px-5 py-3 rounded-2xl
                    text-white font-semibold
                  "
                >
                  <Pencil size={18} />
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(q.id)}
                  className="
                    flex items-center gap-2
                    bg-red-500 hover:bg-red-600
                    px-5 py-3 rounded-2xl
                    text-white font-semibold
                  "
                >
                  <Trash2 size={18} />
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

      {/* DASHBOARD */}
      {mode === "dash" && (

        <div>

          {/* HEADER */}
          <div className="
            flex flex-col md:flex-row
            md:items-center md:justify-between
            gap-5 mb-10
          ">

            <div>

              <p className="
                text-cyan-400
                uppercase tracking-[4px]
                text-sm font-semibold
              ">
                Analytics Overview
              </p>

              <h2 className="
                text-4xl font-black
                text-white mt-2
              ">
                Student Dashboard
              </h2>

            </div>

            <button
              onClick={() =>
                window.open(`${STUDENT_API}/student/download`)
              }
              className="
                flex items-center gap-3
                bg-gradient-to-r from-amber-500 to-orange-600
                hover:from-amber-600 hover:to-orange-700
                text-white px-6 py-4
                rounded-2xl
                shadow-2xl
                font-semibold
              "
            >
              <Download size={20} />
              Download CSV
            </button>

          </div>

          {/* GROUPED STUDENTS */}
          <div className="grid gap-8">

            {Object.values(

              students.reduce((acc: any, item: any) => {

                if (!acc[item.email]) {

                  acc[item.email] = {
                    name: item.name,
                    email: item.email,
                    answers: []
                  };

                }

                acc[item.email].answers.push({
                  questionId: item.questionId,
                  selectedOption: item.selectedOption
                });

                return acc;

              }, {})

            ).map((student: any, index) => (

              <div
                key={index}
                className="
                  bg-white/10
                  backdrop-blur-2xl
                  border border-white/10
                  rounded-[32px]
                  overflow-hidden
                  shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                "
              >

                {/* TOP */}
                <div className="
                  p-8 border-b border-white/10
                  bg-gradient-to-r
                  from-cyan-500/10
                  to-blue-500/10
                ">

                  <div className="
                    flex flex-col lg:flex-row
                    lg:items-center lg:justify-between
                    gap-6
                  ">

                    <div className="flex items-center gap-5">

                      <div className="
                        w-16 h-16 rounded-2xl
                        bg-gradient-to-br
                        from-cyan-500 to-blue-600
                        flex items-center justify-center
                        text-white text-2xl font-black
                      ">
                        {student.name.charAt(0)}
                      </div>

                      <div>

                        <h3 className="
                          text-2xl font-black text-white
                        ">
                          {student.name}
                        </h3>

                        <p className="text-slate-300 mt-1">
                          {student.email}
                        </p>

                      </div>

                    </div>

                    <div className="
                      bg-white/10
                      border border-white/10
                      px-6 py-5 rounded-2xl
                    ">

                      <p className="
                        text-slate-400 text-sm
                      ">
                        Total Answers
                      </p>

                      <h2 className="
                        text-4xl font-black
                        text-cyan-400 mt-1
                      ">
                        {student.answers.length}
                      </h2>

                    </div>

                  </div>

                </div>

                {/* ANSWERS */}
                <div className="p-8">

                  <h4 className="
                    text-xl font-bold
                    text-white mb-6
                  ">
                    Submitted Answers
                  </h4>

                  <div className="
                    grid grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-5
                    gap-5
                  ">

                    {student.answers.map((ans: any, i: number) => (

                      <div
                        key={i}
                        className="
                          bg-white/5
                          border border-white/10
                          rounded-2xl
                          p-5 text-center
                        "
                      >

                        <p className="
                          text-slate-400 text-sm
                        ">
                          Question
                        </p>

                        <h2 className="
                          text-4xl font-black
                          text-cyan-400 mt-2
                        ">
                          {ans.questionId}
                        </h2>

                        <div className="
                          mt-5
                          bg-gradient-to-r
                          from-emerald-500 to-green-600
                          py-3 rounded-xl
                          text-white font-black
                          text-xl
                        ">
                          {ans.selectedOption}
                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      )}

    </main>
  </div>
);
}

export default AdminDashboard;