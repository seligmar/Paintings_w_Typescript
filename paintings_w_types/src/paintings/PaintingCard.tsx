import React from 'react'
import images from '../images.png'

export default function PaintingCard (
  painting: any
  // activeCard: string,
  // setCard: any //MouseEventHandler<any> //| undefined
) {
  var paintingForCard = painting.painting

  console.log(paintingForCard)

  // function newFunction () {
  //   setCard(paintingForCard.id)
  //   console.log(paintingForCard.id)
  // }

  // console.log(paintingForCard, setCard(''))
  return (
    // <div>
    <div>
      {/* <img src={imagages} /> this works */}
      <div className='card-image' id={paintingForCard.id}>
        <img src={paintingForCard.flipped ? paintingForCard.image : images} />
      </div>
      {/* <p>Artist: {paintingForCard.artist.name}</p>
      <p>
        Title: <i>{paintingForCard.title}</i>
      </p>
      <p>Date: {paintingForCard.date}</p> */}
    </div>
    // </div>
  )
}
