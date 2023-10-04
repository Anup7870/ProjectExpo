import React from "react";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
// import RigthHead from './Rigth';
export default function Left() {
  return (
    <>
      {/*  left container */}
      <div className='left h-full w-[15%] bg-[#ffff] rounded-r-3xl '>
        <div className='flex flex-col justify-center items-center h-[9rem] gap-3 border-b border-[#BDBDBD]'>
          <img src='/Ellipse6.png' alt='' />
          <span>Proj-Expo</span>
        </div>

        <div className='hed w-full mt-5'>
          <div className='items flex flex-col gap-8 w-9/12 m-auto'>
            <div className='item flex flex-row items-center gap-4'>
              <span className=' flex  items-center justify-center w-8 h-8 bg-gray-300 rounded-lg drop-shadow-lg'>
                <SpaceDashboardIcon />
              </span>
              <Link to="/">Dashboard</Link> 
            </div>
            <div className='item flex flex-row items-center gap-4 '>
              <span className='flex  items-center justify-center w-8 h-8 bg-gray-300 rounded-lg drop-shadow-lg'>
                <FolderSharedIcon />
              </span>
             Projects
            </div>
            <div className='item flex flex-row items-center gap-4'>
              <span className='flex  items-center justify-center w-8 h-8 bg-gray-300 rounded-lg drop-shadow-lg'>
                <AddBoxIcon />
              </span>
              <Link to="/addPro">Add project</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
