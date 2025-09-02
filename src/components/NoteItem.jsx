import { Edit2, Trash2 } from "lucide-react";

export default function NoteItem({ note, onEdit, onDelete }) {
  return (
    <li className="bg-[#1f1f1f] p-4 rounded-lg shadow-md border border-gray-700 
                   hover:shadow-[0_0_15px_#06B6D4] transition-all duration-500 
                   flex flex-col justify-between h-48">
      
      {/* title */}
      <h3 className="text-lg font-bold text-[#00bfa5] drop-shadow-[0_0_4px_#00bfa5] truncate mb-2">
        {note.title}
      </h3>

      {/* content */}
      <p className="text-gray-300 text-sm flex-1 overflow-hidden break-words line-clamp-4">
        {note.content}
      </p>

      {/* buttons */}
      <div className="flex justify-end gap-2 mt-3">
        <button
          onClick={() => onEdit(note)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#065a60] text-[#00ffe0] 
                     text-sm font-medium hover:shadow-[0_0_8px_#00ffe0] transition"
        >
          <Edit2 className="w-4 h-4"/>
        </button>
        <button
          onClick={() => onDelete(note._id)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#3e1f47] text-[#ff00ff] 
                     text-sm font-medium hover:shadow-[0_0_8px_#ff00ff] transition"
        >
          <Trash2 className="w-4 h-4"/>
        </button>
      </div>
    </li>
  );
}
