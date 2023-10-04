import React, { useState } from "react";
import Left from "../../Components/Left";
import Rigth from "../../Components/Rigth";
export default function Admin() {
  return (
    <div className='w-full h-screen bg-[#d2dbe9] flex flex-row'>
      <Left/>
      <Rigth/>
    </div>
  );
}
