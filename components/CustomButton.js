function CustomButton({ children, Icon, fill }) {
  return (
    <button
      className={`flex items-center justify-center px-5 py-1 rounded-sm font-medium ${
        fill === true ? "bg-primary text-white" : "hover:font-semibold"
      }`}
    >
      {children}
      {Icon ? <Icon className="ml-2" /> : ""}
    </button>
  );
}

export default CustomButton;
