function SideNav() {
  return (
    <div className="flex flex-col gap-y-5 fixed right-9 bottom-10">
      <div className="h-4 w-4 rounded-full cursor-pointer bg-orange"></div>
      <div className="h-4 w-4 rounded-full cursor-pointer border border-primary"></div>
      <div className="h-4 w-4 rounded-full cursor-pointer border border-primary"></div>
      <div className="h-4 w-4 rounded-full cursor-pointer border border-primary"></div>
    </div>
  );
}

export default SideNav;
