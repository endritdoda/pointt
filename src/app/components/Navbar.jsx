import React from "react";

export default function Navbar() {
  return (
    <div className="flex pl-10  h-32 justify-between sticky bottom-0 bg-white">
      <div className=" space-y-12">
        <div className="flex gap-5">
          <a href="#">about</a>
          <a href="#">about</a>
          <a href="#">about</a>
          <a href="#">about</a>
        </div>
        <div className="flex gap-5">
          <a href="#">about</a>
          <a href="#">about</a>
          <a href="#">about</a>
          <a href="#">about</a>
        </div>
      </div>

      <div>
        <img src="/assets/Picture2.png" alt="" className="h-32" />
      </div>
    </div>
  );
}
