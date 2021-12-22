import React, { useState } from 'react'
import "./_categories.scss"
import { useDispatch } from "react-redux"
import { getPopularVideo, getVideosByCategory } from '../../redux/actions/video.action'


const Keywords = ["All", "React js", "Angular js", "React Native", "Use of API", "Redux", "Music", "Algorithm Art", "Guitar", "Bengali Songs", "Coding", "Cricket", "Football", "Real Madrid", "Gatsby", "Poor Coder", "Shwetabh"]

const CategoriesBar = () => {
    const [activeelement, setactiveelement] = useState("All")
    const dispatch = useDispatch()



    const handleclick = (keyword) => {
        setactiveelement(keyword)
        if (keyword === "All") {
            dispatch(getPopularVideo())
        } else {
            dispatch(getVideosByCategory(keyword))
        }
    }
    return (
        <div className="CategoriesBar">
            {
                Keywords.map((keyword, index) => (<span key={index} onClick={() => handleclick(keyword)} className={activeelement === keyword ? "active" : ""}>{keyword}</span>))
            }
        </div>
    )
}

export default CategoriesBar;
