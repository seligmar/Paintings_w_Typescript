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
      console.log('i', i)
      while (i < 10) {
        var x = Math.floor(Math.random() * len)
        // console.log('x?', x)
        var painting = allPaintings[x]
        i++
        if (result.includes(painting) && i < 10) {
          buildPaintingList(result, len, i - 1)
        } else if (result.length < 20) {
          painting.flipped = false
          painting.disabled = false
          //   if (result.length < 20) {
          result.push(painting)
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
          var paintingCopy = Object.assign({}, painting)
          paintingCopy.id = painting.id + '-copy'
          result.push(paintingCopy)
        }
      }
    }
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

  function setCard (painting: any) {
    // logic --> check if there is an active card
    // if yes, check if the newly selected card id matches the new card id
    // if yes, set the card class to
    // if (painting.disabled) return

    //  console.log('painting?', painting)
    if (!activeCard) {
      // painting.flipped = true
      setActiveCard(painting)
    }

    if (activeCard) {
      console.log(' painting.id', painting.id)
      console.log('activeCard.id', activeCard.id)
      // if (
      //   (activeCard.id.includes('copy') && painting.id.includes('copy')) ||
      //   (!activeCard.id.includes('copy') && !painting.id.includes('copy'))
      // ) {
      //   activeCard.flipped = false
      //   painting.flipped = false
      //   window.alert('no match')
      //   setActiveCard(undefined)
      // }
      if (
        painting.id.includes(activeCard.id) ||
        activeCard.id.includes(painting.id)
      ) {
        window.alert('match!')
        //activeCard.flipped = false
        activeCard.disabled = true
        painting.disabled = true
        setActiveCard(undefined)
      } else {
        activeCard.flipped = false
        painting.flipped = false
        //  window.alert('no match')
        setActiveCard(undefined)
        //   activeCard.flipped = false
        //   activeCard.disabled = true
        //   painting.disabled = true
        //   setActiveCard(undefined)
      }
      // console.log(activeCard.id.includes(painting.id))
      // console.log(painting.id.includes(activeCard.id))
      // if (activeCard.id.includes(painting) || painting.id.includes(activeCard))
      //   window.alert('match?')

      // const activeIndex = activeCard.id.indexOf('-')
      // const paintingIndex = painting.id.indexOf('-')
      // console.log('activeIndex, paintingIndex', activeIndex, paintingIndex)
      // if (activeIndex < 0 && paintingIndex < 0) {
      //   activeCard.flipped = false
      //   painting.flipped = false
      //   window.alert('no match')
      //   setActiveCard(undefined)
      // }
      // if (
      //   activeCard.id.includes(painting) ||
      //   painting.id.includes(activeCard)
      // ) {
      //   activeCard.flipped = false
      //   painting.flipped = false
      //   setActiveCard(undefined)
      // } else {
      //   activeCard.flipped = false
      //   activeCard.disabled = true
      //   painting.disabled = true
      //   setActiveCard(undefined)
      // }
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
