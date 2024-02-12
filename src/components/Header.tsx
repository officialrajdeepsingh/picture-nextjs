export function Header() {
  let items = ["Home", "Company", "Marketplace", "Features", "Team", "Contact"];
  return (
    <header className=" bg-black text-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white dark:text-black">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            {" "}
            Picture Element{" "}
          </span>
        </div>

        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto "
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {items.map((item) => {
              return (
                <li key={item.toLowerCase()}>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 rounded  lg:p-0"
                    aria-current="page"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
