import { useState, useEffect, useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import NoteItem from "../components/NoteItem";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [editingNote, setEditingNote] = useState(null);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const saveNote = async (e) => {
    e.preventDefault();
    try {
      if (editingNote) {
        await API.put(`/notes/${editingNote._id}`, form);
        setEditingNote(null);
      } else {
        await API.post("/notes", form);
      }
      setForm({ title: "", content: "" });
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  const startEdit = (note) => {
    setEditingNote(note);
    setForm({ title: note.title, content: note.content });
  };

  const cancelEdit = () => {
    setEditingNote(null);
    setForm({ title: "", content: "" });
  };

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    fetchNotes();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => { logout(); navigate("/login"); }}>Logout</button>

      <NoteForm
        form={form}
        handleChange={handleChange}
        onSubmit={saveNote}
        onCancel={cancelEdit}
        editing={!!editingNote}
      />

      <ul>
        {notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            onEdit={startEdit}
            onDelete={deleteNote}
          />
        ))}
      </ul>
    </div>
  );
}
