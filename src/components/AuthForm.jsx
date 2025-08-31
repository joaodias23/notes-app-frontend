export default function AuthForm({ title, form, handleChange, handleSubmit, fields }) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {fields.map(({ name, type = "text", placeholder }) => (
        <input
          key={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={form[name] || ""}
          onChange={handleChange}
        />
      ))}
      <button type="submit">{title}</button>
    </form>
  );
}
