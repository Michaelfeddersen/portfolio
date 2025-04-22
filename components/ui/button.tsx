export function Button({ onClick, children, variant = "default" }: any) {
  const base = "px-4 py-2 rounded-lg transition";
  const variants: any = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
