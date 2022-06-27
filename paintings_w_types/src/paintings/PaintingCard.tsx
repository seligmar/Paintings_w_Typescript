import React, { MouseEventHandler } from 'react'
import imagages from '../images.png'

export default function PaintingCard (
  painting: any,
  // activeCard: string,
  setCard: any //MouseEventHandler<any> //| undefined
) {
  var paintingForCard = painting.painting

  function newFunction () {
    setCard(paintingForCard.id)
    console.log(paintingForCard.id)
  }

  // console.log(paintingForCard, setCard(''))
  return (
    // <div id={paintingForCard.id} onClick={() => setCard(paintingForCard.id)}>
    <div id={paintingForCard.id}>
      {/* <img src={imagages} /> this works */}
      <div className='card-image'>
        <img src={paintingForCard.image} />
      </div>
      <p>Artist: {paintingForCard.artist.name}</p>
      <p>
        Title: <i>{paintingForCard.title}</i>
      </p>
      <p>Date: {paintingForCard.date}</p>
    </div>
  )
}
