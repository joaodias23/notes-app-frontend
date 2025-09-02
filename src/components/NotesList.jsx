/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */
import NoteItem from "./NoteItem";

export default function NotesList({ notes, onEdit, onDelete, formOpen }) {
  return (
    <motion.ul
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl"
        initial={false}
        animate={{ marginTop: formOpen ? 0 : 0 }}
        transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
        >
        <AnimatePresence>
            {notes.map((note) => (
            <motion.li
                key={note._id}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
                <NoteItem note={note} onEdit={onEdit} onDelete={onDelete} />
            </motion.li>
            ))}
        </AnimatePresence>
        </motion.ul>
  );
}
