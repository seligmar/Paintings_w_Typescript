import React from 'react'
import images from '../images.png'

export default function PaintingCard (
  props: any
  // activeCard: string,
  // setCard: any //MouseEventHandler<any> //| undefined
) {
  var paintingForCard = props.painting

  return (
    // <div>
    <div onClick={(e: any) => props.setCard(e, paintingForCard)}>
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
