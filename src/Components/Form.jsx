import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
export default function Form() {
  const Department = [
   { title: "Information terchnology"},
    {title: "Computer Application"},
    {title: "Mass communication"},
    {title: "Physics"},
  ];
  const defaultProps = {
    options: Department,
    getOptionLabel: (option) => option.title,
  };
  const flatProps = {
    options: Department.map((option) => option.title),
  };
  const [value, setValue] = React.useState(null);
  return (
    <div className='w-full'>
      <form action=''>
        <div className='title'>
          <h3>Title</h3>
          <input type='text' placeholder='Add title' />
        </div>
        <div className='depart'>
          <h3>Departmnet</h3>
          <Stack spacing={1} sx={{ width: 300 }}>
            <Autocomplete
              {...defaultProps}
              id='controlled-demo'
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                console.log(value);
              }}
              renderInput={(params) => (
                <TextField {...params} label='controlled' variant='standard' />
              )}
            />
          </Stack>
        </div>
        
        <div className="files">
          <h3>Files</h3>
          <div className="video" name="video">
            <h4>Video</h4>
            <input type="file" name="video"/>
          </div>
          <div className="Pdf" name= "pdf">
            <h4>Pdf</h4>
            <input type="file" name="pdf"/>
          </div>
          
          <div className="Ppt" name= "ppt">
            <h4>Ppt</h4>
            <input type="file" name="ppt"/>
          </div>

        </div>
      </form>
    </div>
  );
}
