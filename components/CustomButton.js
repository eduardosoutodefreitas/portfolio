function CustomButton({ children, Icon, fill }) {
  return (
    <button
      className={`flex items-center justify-center px-5 py-1 rounded-sm ${
        fill === true ? "bg-primary text-white" : " border border-primary"
      }`}
    >
      {children}
      {Icon ? <Icon className="ml-2" /> : ""}
    </button>
  );
}

export default CustomButton;
