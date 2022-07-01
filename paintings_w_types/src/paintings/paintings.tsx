import React, { useEffect, useState } from 'react'
import paintings from '../paintings'
import PaintingCard from './PaintingCard'
import './Painting.css'

export default function Paintings () {
  const [allPaintings, setPaintings] = useState<any[]>([])
  const [paintingsToPlay, setPaintingsToPlay] = useState<any[]>([])
  const [activeCard, setActiveCard] = useState<any>(undefined)

  var importedPaintings: any[] = paintings
  useEffect(() => {
    setPaintings(importedPaintings)
  })

  function getRandom (arr: string | any[]) {
    if (!arr[0]) return
    var result: any[] = []
    const len = allPaintings.length
    // const i = 0
    buildPaintingList(result, len, 0)
    function buildPaintingList (result: any[], len: number, i: number) {
      for (i; i < 10; i++) {
        var x = Math.floor(Math.random() * len)
        var painting = allPaintings[x]
        if (result.includes(painting) && i < 10) {
          buildPaintingList(result, len, i)
        }
        painting.flipped = false
        painting.disabled = false
        result.push(painting)
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        var paintingCopy = Object.assign({}, painting)
        paintingCopy.id = painting.id + '-copy'
        result.push(paintingCopy)
      }
    }

    //result = result[]
    // var resultCopy = [...result]
    //  resultCopy.forEach(painting => painting.id + '-copy')
    //  result.push(...resultCopy)
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
    e.preventDefault()
    // logic --> check if there is an active card
    // if yes, check if the newly selected card id matches the new card id
    // if yes, set the card class to
    if (painting.disabled) return

    painting.flipped = true

    if (!activeCard) {
      // painting.flipped = true
      setActiveCard(painting)
    }

    if (activeCard) {
      const activeIndex = activeCard.id.indexOf('-')
      const paintingIndex = painting.id.indexOf('-')
      if (activeIndex > 0 && paintingIndex > 0) {
        activeCard.flipped = false
        painting.flipped = false
        setActiveCard(undefined)
      }
      if (
        activeCard.id.includes(painting) ||
        painting.id.includes(activeCard)
      ) {
        activeCard.flipped = false
        painting.flipped = false
        setActiveCard(undefined)
      } else {
        activeCard.flipped = false
        activeCard.disabled = true
        painting.disabled = true
        setActiveCard(undefined)
      }
    }
  }
  // }

  if (paintingsToPlay.length < 1) getRandom(allPaintings)

  return (
    <div className='flex-container '>
      {paintingsToPlay.map(painting => (
        <div
          key={Math.random()}
          className='card-container'
          // onClick={(e: any) => setCard(e, painting)}
        >
          <PaintingCard
            painting={painting}
            // activeCard={activeCard}
            setCard={setCard}
            key={painting.id + Math.random()}
          />
        </div>
      ))}
    </div>
  )
}
