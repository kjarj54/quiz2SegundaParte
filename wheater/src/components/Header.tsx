"use client";
function Header() {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div
        className="h-[80px] w-full flex justify-between
items-center max-w-7xl px-3 mx-auto"
      >
        <h2 className="text-gray-500 text-3xl">Weather App</h2>
      </div>
    </nav>
  );
}
export default Header;
