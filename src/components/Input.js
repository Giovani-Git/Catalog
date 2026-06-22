export default function Input({ id, type = "text", value, onChange, step, required = false }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      step={step}
      required={required}
    />
  )
}
