import React, { useState } from 'react'
import images from '../images.png'

export default function PaintingCard (props: any) {
  var paintingForCard = props.painting
  const [flipped, setFlipped] = useState(paintingForCard.flipped)

  function updateFlipped (e: any, painting: any) {
    //  window.alert('click!')
    if (painting.disabled) return

    painting.flipped = !painting.flipped
    // window.alert(painting.flipped)
    setFlipped(!flipped)
    props.setCard(e, paintingForCard)
  }

  // console.log('paintingForCard', paintingForCard)

  return (
    // <div>
    <>
      {paintingForCard.disabled ? null : (
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
