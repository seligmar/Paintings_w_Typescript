import React, { useEffect, useState } from 'react'
import paintings from '../paintings'
import PaintingCard from './PaintingCard'

export default function Paintings () {
  const [allPaintings, setPaintings] = useState<any[]>([])

  var importedPaintings: any[] = paintings
  useEffect(() => setPaintings(importedPaintings))

  return (
    <div className='flex-container '>
      {allPaintings.map(painting => (
        <div key={painting.id} className='card-container'>
          <PaintingCard painting={painting} key={painting.id} />
        </div>
      ))}
    </div>
  )
}
