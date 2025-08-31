export default function NoteForm({ form, handleChange, onSubmit, onCancel, editing }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={handleChange}
      ></textarea>
      <button type="submit">{editing ? "Save Changes" : "Add Note"}</button>
      {editing && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}
