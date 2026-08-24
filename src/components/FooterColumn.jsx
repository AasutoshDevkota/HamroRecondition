export default function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[10px] font-bold text-white">{title}</h3>
      <div className="mt-3 space-y-2 text-[9px]">
        {links.map((link) => (
          <a href="#" key={link} className="block hover:text-white">{link}</a>
        ))}
      </div>
    </div>
  );
}