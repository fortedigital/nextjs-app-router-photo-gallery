import React from "react";

const loading = () => {
  return (
    <main className="inset-0 flex flex-col items-center w-screen h-screen">
      <div className="relative w-5/6 h-5/6 bg-black text-white">
        Laster inn bildet...
      </div>
    </main>
  );
};

export default loading;
