export function Title({ children }) {
  return (
    <h2 className="font-serif text-xl text-zinc-900 font-bold after:after">
      {children}
    </h2>
  );
}

export function Subtitle({ children }) {
  return (
    <h3 className="font-serif text-xl text-zinc-900 font-bold after:after">
      {children}
    </h3>
  );
}
