import React, { useState } from 'react'
import images from '../images.png'

export default function PaintingCard (props: any) {
  var paintingForCard = props.painting
  const [flipped, setFlipped] = useState(paintingForCard.flipped)

  function updateFlipped (e: any, painting: any) {
    e.preventDefault()
    if (painting.disabled) return

    painting.flipped = !painting.flipped
    // window.alert(painting.flipped)
    setFlipped(!flipped)
    setTimeout(function () {
      props.setCard(paintingForCard)
    }, 2500)
  }

  return (
    // <div>
    <>
      {paintingForCard.disabled ? (
        <div className='card-image flipped off-board'></div>
      ) : (
        <div
          className={paintingForCard.flipped ? 'flipped' : 'not-flipped'}
          onClick={(e: any) => updateFlipped(e, paintingForCard)}
        >
          {/* <img src={imagages} /> this works */}
          <div className='card-image' id={paintingForCard.id}>
            <img
              src={paintingForCard.flipped ? paintingForCard.image : images}
            />
          </div>
          {/* <p>Artist: {paintingForCard.artist.name}</p>
      <p>
        Title: <i>{paintingForCard.title}</i>
      </p>
      <p>Date: {paintingForCard.date}</p> */}
        </div>
      )}
    </>
    // </div>
  )
}
