import React, { useEffect } from 'react'

export default function StoreBody() { 
  useEffect(()=>{
    const callApi =async()=>{
        try{
          const res=  await axios.get('https://nike0403.herokuapp.com/product')
          console.log(res);
        }catch(er){
            console.log(er);
        }
    } 
    callApi()
},[])
  return (
    <div className='w-full h-[2000px] bg-white px-9'>
      
    </div>
  )
}
