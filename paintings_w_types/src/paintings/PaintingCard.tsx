import React from 'react'

export default function PaintingCard (painting: any) {
  var paintingForCard = painting.painting
  console.log(paintingForCard)
  return (
    <div>
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
