import { useState, useEffect, useContext } from "react";  
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import NotesList from "../components/NotesList";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, LogOut } from "lucide-react";
/* eslint-enable no-unused-vars */

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [editingNote, setEditingNote] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => { fetchNotes(); }, []);

  const fetchNotes = async () => {
    try { 
      const res = await API.get("/notes"); 
      setNotes(res.data); 
    } catch (err) { console.error(err); }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const toggleForm = () => setShowForm(prev => !prev);

  const saveNote = async (e) => {
    e.preventDefault();
    if (!form.title.trim() && !form.content.trim()) return;
    if (saving) return;
    setSaving(true);
    try {
      if (editingNote) { 
        await API.put(`/notes/${editingNote._id}`, form); 
        setEditingNote(null); 
      } else { 
        await API.post("/notes", form); 
      }
      setForm({ title: "", content: "" });
      fetchNotes();
      setShowForm(false);
    } catch (err) { console.error(err); } 
    finally { setSaving(false); }
  };

  const startEdit = (note) => {
    setEditingNote(note);
    setForm({ title: note.title, content: note.content });
    if (!showForm) toggleForm();
  };

  const cancelEdit = () => { 
    setEditingNote(null); 
    setForm({ title: "", content: "" }); 
    setShowForm(false); 
  };

  const deleteNote = async (id) => { 
    try { 
      await API.delete(`/notes/${id}`); 
      fetchNotes(); 
    } catch (err) { console.error(err); } 
  };

  return (
    <div className="min-h-screen w-full bg-[#1f1f1f] text-black flex flex-col transition-colors duration-500">
      
      {/* navbar */}
      <nav className="w-full bg-[#1f1f1f] px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-[#00bfa5] drop-shadow-[0_0_10px_#06B6D4]">
          {user ? `${user.username}'s Notes` : "My Notes"}
        </h1>
        <div className="flex gap-4 items-center">
          
          {/* create */}
          <button
            className="flex items-center gap-1 bg-[#0b525b] px-4 py-2 rounded text-[#00ffe0] 
                       hover:shadow-[0_0_10px_#00ffe0] transition"
            onClick={toggleForm}
          >
            <PlusCircle className="w-4 h-4"/>
            Create
          </button>

          {/* logout */}
          <button
            className="flex items-center gap-1 bg-[#4d194d] px-4 py-2 rounded text-[#ff00ff] 
                       hover:shadow-[0_0_10px_#ff00ff] transition"
            onClick={() => { logout(); navigate("/"); }}
          >
            <LogOut className="w-4 h-4"/>
            Logout
          </button>
        </div>
      </nav>

      {/* main content */}
      <div className="flex-1 flex p-6 gap-6">
        <motion.div layout className="w-2/3">
          <NotesList notes={notes} onEdit={startEdit} onDelete={deleteNote} formOpen={showForm} />
        </motion.div>

        {/* form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              className="w-1/3 sticky top-24 self-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <NoteForm
                form={form}
                handleChange={handleChange}
                onSubmit={saveNote}
                onCancel={cancelEdit}
                editing={!!editingNote}
                saving={saving}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
