import React from 'react'
import FavoritesItem from '../favoritesItem/FavoritesItem'

export default function Favorites() {
  return (
    <div>
        <h1 className="text-[22px] text-[#111]">Favorites</h1>
        <div className="
          lg:grid-cols-2
          grid grid-cols-1 gap-5
          ">
            <FavoritesItem></FavoritesItem>
            <FavoritesItem></FavoritesItem>
            <FavoritesItem></FavoritesItem>
            <FavoritesItem></FavoritesItem>

        </div>
        <div className="pt-4 text-[16px] text-[#757575]">
            <a href="" className="leading-5 border-[#757575] border-b">View more Favorites</a>
        </div>
    </div>
  )
}
