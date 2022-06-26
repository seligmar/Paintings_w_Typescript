import React from 'react'

export default function PaintingCard (painting: any) {
  var paintingForCard = painting.painting
  console.log(paintingForCard.image)
  return (
    <div>
      This
      <img src={paintingForCard.image} />
    </div>
  )
}
