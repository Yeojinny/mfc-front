import React from 'react'

export default function StretchedRoundedButton({
  comment,
  clickHandler,
}: {
  comment: string
  clickHandler: () => void
}) {
  return (
    <button
      type="button"
      onClick={clickHandler}
      className="btn btn-neutral rounded-full w-full bg-black"
    >
      <span className="text-white">{comment}</span>
    </button>
  )
}
