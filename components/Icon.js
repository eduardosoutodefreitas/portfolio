export default function ButtonIcon({ icon }) {
  return (
    <>
      <div className="rounded-full bg-zinc-900 h-14 w-14 grid place-items-center cursor-pointer">
        {icon}
      </div>
    </>
  );
}
