import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-gray-100 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7m-7 7h18M13 5v6m-6 6h18m-18 0v6m6-6h18"
            />
          </svg>
          <span className="ml-3 text-2xl font-bold">Todo App</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-8">
          <Link className="hover:text-gray-200" href={"/"}>
            Home{" "}
          </Link>
          <Link className="hover:text-gray-200" href={"/about"}>
            {" "}
            About{" "}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {/* Link for Login */}
          <Link href="https://app.todoist.com/auth/login">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              Login
            </button>
          </Link>
          {/* Link for Sign Up */}
          <Link href="https://app.todoist.com/auth/signup">
            <button className="bg-gray-200 text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
