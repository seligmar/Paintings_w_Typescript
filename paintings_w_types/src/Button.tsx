import React from 'react'

export default function Button (props: any) {
  function randomize (e: any) {
    e.preventDefault()
    props.getRandom(props.allPaintings)
  }

  return (
    <>
      <button onClick={e => randomize(e)} />
    </>
  )
}
