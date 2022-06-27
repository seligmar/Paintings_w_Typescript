import React, { useEffect, useState } from 'react'
import paintings from '../paintings'
import PaintingCard from './PaintingCard'

export default function Paintings () {
  const [allPaintings, setPaintings] = useState<any[]>([])
  const [paintingsToPlay, setPaintingsToPlay] = useState<any[]>([])
  const [activeCard, setActiveCard] = useState('')

  var importedPaintings: any[] = paintings
  useEffect(() => {
    setPaintings(importedPaintings)
  })

  function getRandom (arr: string | any[]) {
    if (!arr[0]) return
    var result: any[] = []
    const len = allPaintings.length
    for (let i = 0; i < 12; i++) {
      var x = Math.floor(Math.random() * len)
      var painting = allPaintings[x]
      if (result.includes(painting)) {
        break
      }
      result.push(painting)
    }
    var resultCopy = result
    result.push(...resultCopy)
    shuffleArray(result)
  }

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  function shuffleArray (array: any[]) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    setPaintingsToPlay(array)
  }

  function setCard (e: any, painting: any) {
    if (activeCard !== painting.id) setActiveCard(painting.id)
    // else {

    // }
  }

  if (paintingsToPlay.length < 1) getRandom(allPaintings)

  return (
    <div className='flex-container '>
      {paintingsToPlay.map(painting => (
        <div
          key={painting.id + Math.floor(Math.random() * (2 + 1))}
          className='card-container'
          onClick={(e: any) => setCard(e, painting)}
        >
          <PaintingCard
            painting={painting}
            // activeCard={activeCard}
            setCard={setCard}
            // key={painting.id + Math.floor(Math.random() * (2 + 1))}
          />
        </div>
      ))}
    </div>
  )
}
