import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { Document,Page, } from "react-pdf";
export default function Form() {
  // ... (Constructor and other methods remain the same)

  const Department = [
    { title: "Information terchnology" },
    { title: "Computer Application" },
    { title: "Mass communication" },
    { title: "Physics" },
  ];
  const defaultProps = {
    options: Department,
    getOptionLabel: (option) => option.title,
  };
  const flatProps = {
    options: Department.map((option) => option.title),
  };
  const [value, setValue] = React.useState(null);

  const [video, setVideo] = useState(null);
  const [url, setUrl] = useState(null);
  const[page,setpage] = useState(null);
  const[pageNum,setpageNum] = useState(1);
  const onChange = (e) => {
    const files = e.target.files;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
};

const DocumentLoadSucess = ({ numPages }) => {
  setpage(numPages);
  setpageNum(1);
}
  return (
    <div className='w-full h-[78%] mx-auto p-4 border rounded-lg shadow-lg bg-white mt-3 overflow-auto'>
      <h2 className='text-2xl font-semibold mb-4'>Project Form</h2>
      <form>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Project Name:
          </label>
          <input
            type='text'
            name='projectName'
            id='projectName'
            className='mt-1 p-2 border rounded-md w-full'
            // value={this.state.projectName}
            // onChange={this.handleInputChange}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Title:
          </label>
          <input
            type='text'
            name='title'
            id='projectName'
            className='mt-1 p-2 border rounded-md w-full'
            // value={this.state.projectName}
            // onChange={this.handleInputChange}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='totalDescription'
            className='block text-sm font-medium text-gray-700'>
            Total Description:
          </label>
          <textarea
            name='totalDescription'
            id='totalDescription'
            className='mt-1 p-2 border rounded-md w-full'
            // value={this.state.totalDescription}
            // onChange={this.handleInputChange}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='department'
            className='block text-sm font-medium text-gray-700'>
            Department:
          </label>
          <Stack spacing={1} sx={{ width: 300 }}>
            <Autocomplete
              {...defaultProps}
              id='controlled-demo'
              sx={{
                width: "100%",
              }}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                console.log(value);
              }}
              renderInput={(params) => (
                <TextField {...params} label='Select' variant='standard' />
              )}
            />
          </Stack>
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Upload Files:
          </label>
          <div className='items flex flex-col'>
            <div className='video flex flex-row items-center'>
              <input
                type='file'
                name='video'
                id=''
                onChange={(e) =>
                  setVideo(URL.createObjectURL(e.target.files[0]))
                }
              />
              <video src={video} controls></video>
            </div>
            <div className='ppt flex flex-row items-center'>
            <input type="file" accept=".pdf" onChange={onChange} />
              <div className="w-[19rem] h-[15rem]" >
                {url ? (
                  <div
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      height: "100%",
                    }}>
                    
                  </div>
                ) : (
                  <div
                    style={{
                      alignItems: "center",
                      border: "2px dashed rgba(0, 0, 0, .3)",
                      display: "flex",
                      fontSize: "2rem",
                      height: "100%",
                      justifyContent: "center",
                      width: "100%",
                    }}>
                    Preview area
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <h2>Student Detail</h2>
        <div className="items">
          <div className="">
          <label className='block text-sm font-medium text-gray-700'>
            Project Name:
          </label>
          <input
            type='text'
            name='projectName'
            id='projectName'
            className='mt-1 p-2 border rounded-md w-full'
            // value={this.state.projectName}
            // onChange={this.handleInputChange}
            required
          />
          </div>
          <div className="">
          <label className='block text-sm font-medium text-gray-700'>
            Project Name:
          </label>
          <input
            type='text'
            name='projectName'
            id='projectName'
            className='mt-1 p-2 border rounded-md w-full'
            // value={this.state.projectName}
            // onChange={this.handleInputChange}
            required
          />
          </div>
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full'>
          Submit
        </button>
      </form>
    </div>
  );
}
