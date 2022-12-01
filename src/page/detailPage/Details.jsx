import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams} from "react-router-dom"
function Details(props) {
    const {id} = useParams()
    const {img,content,price} = props.data
    const [obj,setObj] = useState()
    console.log(id)
    useEffect(()=>{
        const newData = props.data?.find(item => item.id === id)
        console.log(newData)
        setObj(newData)
    },[id])
  return (
    <div></div>
       
    </div>
  )
}

export default Details