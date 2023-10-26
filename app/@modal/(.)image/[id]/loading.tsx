import React from "react";
import Modal from "./_Modal";

const loading = () => {
  return (
    <Modal>
      <div className="flex justify-center items-center h-full w-full bg-black text-white">
        Laster inn bildet...
      </div>
    </Modal>
  );
};

export default loading;
