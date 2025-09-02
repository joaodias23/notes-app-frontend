export default function AuthForm({ title, form, handleChange, handleSubmit, fields }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1f1f1f] p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-20
                 border border-[#065a60] space-y-4 hover:shadow-[0_0_15px_#06B6D4] transition-all duration-500"
    >
      <h2 className="text-2xl font-bold text-[#00bfa5] text-center drop-shadow-[0_0_6px_#00bfa5] mb-4">
        {title}
      </h2>

      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label
            htmlFor={field.name}
            className="text-xs font-semibold text-[#00bfa5] uppercase tracking-wide text-center
                       drop-shadow-[0_0_4px_#00bfa5]"
          >
            {field.placeholder}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type || "text"}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
            className="w-full rounded-md p-2 bg-[#212f45] text-white border border-[#065a60]
                       focus:outline-none focus:ring-2 focus:ring-[#00bfa5] placeholder-gray-400 text-sm"
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full px-4 py-2 rounded-md bg-[#006466] text-[#00ffe0] text-sm font-medium
                   hover:shadow-[0_0_10px_#00ffe0] transition"
      >
        {title}
      </button>
    </form>
  );
}
