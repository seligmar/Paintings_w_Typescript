import React, { useEffect, useState } from 'react'
import paintings from '../paintings'

export default function Paintings () {
  const [allPaintings, setPaintings] = useState<any[]>([])

  var importedPaintings: any[] = paintings
  useEffect(() => setPaintings(importedPaintings))

  console.log(allPaintings)

  return (<div>paintings</div>)
};