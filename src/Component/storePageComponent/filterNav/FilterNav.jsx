import React from 'react'
import ColourFilter from '../colour/ColourFilter'
import FilterCheckBox from '../filterCheckBox/FilterCheckBox'
import FilterRadio from '../filterRadio/FilterRadio'
import Size from '../size/Size'
import './scrollbar.css'

export default function FilterNav() {
  const category = ['Lifestyle', 'Jordan', 'Running', 'Basketball', 'Training & Gym', 'Football', 'Skateboarding', 'Golf', 'Boots', 'Tennis', 'Athletics', 'Walking']

  return (
    <div className='
      w-[300px] h-[1000px] pl-12 pr-2 overflow-y-scroll pb-[100px] sticky top-[50px] bg-white
      '>
      <div className="text-[16px] pb-5">
        {category.map((name, index) => (
          <p key={index} className='py-1'>{name}</p>
          ))}
      </div>
      <ColourFilter></ColourFilter>
      <Size></Size>
      <FilterRadio name='Gender' arr={['Men', 'Women', 'Unisex','Men', 'Women', 'Unisex']}></FilterRadio>
      <FilterCheckBox name='Gender' arr={['Men', 'Women', 'Unisex']}></FilterCheckBox>
      <FilterCheckBox name='Air Max' arr={['Air Max 1', 'Air Max 2', 'Air Max 3', 'Air Max 4', 'Air Max 5', 'Air Max 6']}></FilterCheckBox>
      <FilterCheckBox name='Air Max' arr={['Air Max 1', 'Air Max 2', 'Air Max 3', 'Air Max 4', 'Air Max 5', 'Air Max 6']}></FilterCheckBox>
      <FilterCheckBox name='Air Max' arr={['Air Max 1', 'Air Max 2', 'Air Max 3', 'Air Max 4', 'Air Max 5', 'Air Max 6']}></FilterCheckBox>
      <FilterCheckBox name='Air Max' arr={['Air Max 1', 'Air Max 2', 'Air Max 3', 'Air Max 4', 'Air Max 5', 'Air Max 6']}></FilterCheckBox>

    </div>
  )
}
