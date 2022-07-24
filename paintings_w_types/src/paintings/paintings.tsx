import React, { useEffect, useState } from 'react'
import paintings from '../paintings'
import PaintingCard from './PaintingCard'
import './Painting.css'
import Button from '../Button'

export default function Paintings () {
  const [allPaintings, setPaintings] = useState<any[]>([])
  const [paintingsToPlay, setPaintingsToPlay] = useState<any[]>([])
  const [activeCard, setActiveCard] = useState<any>(undefined)

  var importedPaintings: any[] = paintings

  useEffect(() => {
    setPaintings(importedPaintings)
  }, [])

  function getRandom () {
    if (allPaintings.length === 0) return
    console.log(allPaintings)
    var result: any[] = []
    const len = allPaintings.length
    buildPaintingList(result, len, 0)
    function buildPaintingList (result: any[], len: number, i: number) {
      while (i < 10) {
        var x = Math.floor(Math.random() * len)
        var painting = allPaintings[x]
        i++
        if (result.includes(painting) && i < 10) {
          buildPaintingList(result, len, i - 1)
        } else if (result.length < 20) {
          // the while loop was sometimes yielding extra results; added extra check above
          console.log('painting?', painting)
          painting.flipped = false
          painting.disabled = false
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

    if (!activeCard) {
      setActiveCard(painting)
      var filteredPaintings = paintingsToPlay.filter(
        unselectedPainting => unselectedPainting.id !== painting.id
      )
      filteredPaintings.map(painting => (painting.flipped = false))
      return
    }

    if (activeCard) {
      // console.log(' painting.id', painting.id)
      //  console.log('activeCard.id', activeCard.id)
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
        // window.alert('match!')
        activeCard.disabled = true
        painting.disabled = true
        console.log(activeCard.disabled, painting.disabled)
        // force all cards to flip
        paintingsToPlay.map(painting => (painting.flipped = false))
        setPaintingsToPlay([...paintingsToPlay])
        setActiveCard(undefined)
      } else {
        //  activeCard.flipped = false
        // painting.flipped = false
        //  window.alert('no match')
        setActiveCard(undefined)
        // force all cards to flip
        paintingsToPlay.map(painting => (painting.flipped = false))
        setPaintingsToPlay([...paintingsToPlay])

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

  // start off game by getting random paintings from array
  if (paintingsToPlay.length < 1) getRandom()

  return (
    <div className='flex-container '>
      {paintingsToPlay.map(painting => (
        <div key={Math.random()} className='card-container'>
          <PaintingCard
            painting={painting}
            setCard={setCard}
            key={painting.id + Math.random()}
          />
        </div>
      ))}
      <Button
        getRandom={getRandom}
        // allPaintings={allPaintings}
      />
    </div>
  )
}
