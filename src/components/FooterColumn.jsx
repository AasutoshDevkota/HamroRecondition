import { Link } from "react-router-dom";

export default function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="mb-4 text-sm font-bold text-white">{title}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="text-sm text-gray-400 transition-colors hover:text-red-500"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}