export default function NoteForm({ form, handleChange, onSubmit, onCancel, editing, saving }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-[#1f1f1f] p-6 rounded-lg shadow-md w-full max-w-md mb-6 border border-[#065a60] 
                 space-y-4 mx-auto hover:shadow-[0_0_15px_#06B6D4] transition-all duration-500"
    >
      {/* title */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="title"
          className="text-xs font-semibold text-[#00bfa5] uppercase tracking-wide text-center 
                     drop-shadow-[0_0_4px_#00bfa5]"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          placeholder="Enter a title..."
          value={form.title}
          onChange={handleChange}
          className="w-full rounded-md p-2 bg-[#212f45] text-white border border-[#065a60] 
                     focus:outline-none focus:ring-2 focus:ring-[#00bfa5] placeholder-gray-400 text-sm"
        />
      </div>

      {/* content */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="content"
          className="text-xs font-semibold text-[#00bfa5] uppercase tracking-wide text-center 
                     drop-shadow-[0_0_4px_#00bfa5]"
        >
          Content
        </label>
        <textarea
          id="content"
          name="content"
          placeholder="Write your note here..."
          value={form.content}
          onChange={handleChange}
          className="w-full rounded-md p-2 bg-[#212f45] text-white border border-[#065a60] 
                     h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#00bfa5] placeholder-gray-400 text-sm"
        />
      </div>

      {/* buttons */}
      <div className="flex justify-center gap-3 pt-1">
        {editing && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-1.5 rounded-md bg-[#3e1f47] text-[#ff00ff] text-sm font-medium 
                       hover:shadow-[0_0_10px_#ff00ff] transition"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={saving}
          className={`px-4 py-1.5 rounded-md bg-[#006466] text-[#00ffe0] text-sm font-medium 
                     hover:shadow-[0_0_10px_#00ffe0] transition ${saving ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {editing ? "Save Changes" : "Add Note"}
        </button>
      </div>
    </form>
  );
}
