'use client'
import {useState} from 'react'
import {SearchManufacturer} from '@/components/index'

type Props = {}

const SearchBar = (props: Props) => {
  const [manufacturer, setManufacturer] = useState('') // ['manufacturer', setManufacturer
  const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer} />
      </div>
    </form>
  )
}

export default SearchBar