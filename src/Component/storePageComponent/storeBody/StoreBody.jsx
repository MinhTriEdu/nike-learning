import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Item from '../item/Item';
import './animation.css'


export default function StoreBody() {
  const data = useSelector(state => state.reducerDataShoes.data)
  const status = useSelector(state => state.reducerDataShoes.status)
  const dispatch = useDispatch()
  useEffect(() => {
    const callApi = async () => {
      try {
        dispatch({ type: 'PENDING', })
        const res = await axios.get('https://nike0403.herokuapp.com/product')
        dispatch({ type: 'DATA_SHOES', payload: res.data })
      } catch (er) {
        console.log(er);
      }
    }
    callApi()
  }, [])
  function ItemRender() {
    if (data != null)
      return (
        data.map((item, index) => (
          <Item key={index} item={item}><dix></dix></Item>
        ))
      )
    else{
      return(
        [...Array(9)].map((item,index)=>
          <div key={index} className=" relative w-full pt-[100%] bg-[#f6f6f6] overflow-hidden">
            <div className="absolute w-full h-5 bg-[#a5a5a5] blur-3xl loading-item"></div>
          </div>
        )
      )
    }
  }

  return (
    <div className='
    lg:px-9
    px-4 w-full bg-white  pb-20
    '>
      <div className="
        lg:grid-cols-3 lg:mt-0
        grid grid-cols-2 gap-4 mt-10
        ">
        <ItemRender/>
      </div>
    </div>
  )
}
