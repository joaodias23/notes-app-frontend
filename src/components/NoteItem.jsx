export default function NoteItem({ note, onEdit, onDelete }) {
  return (
    <li>
      <strong>{note.title}</strong> - {note.content}
      <button onClick={() => onDelete(note._id)}>Delete</button>
      <button onClick={() => onEdit(note)}>Edit</button>
    </li>
  );
}