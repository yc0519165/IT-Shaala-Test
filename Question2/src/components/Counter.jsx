import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col bg-black text-[#fff]">
        <div className="border p-10 rounded-xl border-white flex flex-col items-center gap-6">
          <h1 className="text-3xl font-semibold">Counter App</h1>
          <div className=" flex flex-col gap-5">
            <h2 className="text-xl font-medium">Counter is {count}</h2>
            <div className="flex gap-5">
              <button
                onClick={() => increase()}
                className="p-3 rounded-xl hover:bg-green-500 bg-green-400 text-base font-medium"
              >
                Increment
              </button>
              <button
                onClick={() => decrease()}
                disabled={count === 0}
                className="p-3 rounded-xl hover:bg-red-500 bg-red-400 text-base font-medium"
              >
                Decrement
              </button>{" "}
              <button
                onClick={() => reset()}
                className="p-3 rounded-xl hover:bg-blue-500 bg-blue-400 text-base font-medium"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
