import { Popover } from "@headlessui/react";
import { IconSearch } from "@tabler/icons-react";

const searcher = () => {
  return (
    <div className="flex flex-col p-5">
      <div className="flex justify-between">
        <div></div>
        <div>
          <Popover.Button className="text-xl text-white cursor-pointer bg-gray-600 py-1 px-2">
            X
          </Popover.Button>
        </div>
      </div>
      <div className="flex space-x-10 items-center mt-5">
        <div className=" px-2 py-2 relative border-2 border-gray-500">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <IconSearch className="h-[20px] text-slate-500" />
          </div>
          <input
            type="text"
            name="search"
            id=""
            className="bg-inherit outline-none pl-10 text-white"
          />
        </div>
        <div>
          <button className="px-2 py-2 bg-blue-600 text-white">Search</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default searcher;
