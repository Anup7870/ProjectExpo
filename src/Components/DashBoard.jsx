import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
export default function DashBoard() {
 
  return (
    <div className="w-full bg-white h-[70%] mt-10">
      <div className="image"></div>
      <div className="boxs">
        <div className="total">
          <ArticleIcon/>
          <p>Total Projets : 50</p>
        </div>
      </div>
    </div>
  )
}
