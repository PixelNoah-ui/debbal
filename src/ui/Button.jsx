import { Link } from "react-router-dom";

function Button({ children, type, to }) {
  const styles = {
    primary:
      "bg-white px-4 py-3 rounded-md text-slate-950 cursor-pointer hover:bg-sky-100 duration-300 transition-colors outline-none border-0",
    secondary:
      "outline-none border border-white px-4 py-3 rounded-md cursor-pointer hover:bg-black/40 duration-300 transition-colors",
    accent:
      "bg-blue-300 px-4 py-2 rounded-full text-base text-slate-950 cursor-pointer hover:bg-sky-100 duration-300 transition-colors outline-none border-0",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
