import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NotFoundIcon from './icons/notFoundIcon'
import StoneityLogoLeft from './icons/stoneityLogoLeft'
import StoneityLogoLeftTop from './icons/stoneityLogoLeftTop'
import StoneityLogoRight from './icons/stoneityLogoRight'
import StoneityLogoRightTop from './icons/stoneityLogoRightTop'
import './style.css'

function notFound() {
  return (
    <>
      <div className="notFoundWrapper">
        <NotFoundIcon />
        <div className="notFound">403</div>
        <div className="notFoundTextWrapper">
          <div className="notFoundText">The page you were looking for could not be found.</div>
          <div className="notFoundText"> It might have been removed, renamed or did not exist in the first place</div>
        </div>
        <StoneityLogoLeft />
        <StoneityLogoRight />
        <StoneityLogoLeftTop />
        <StoneityLogoRightTop />
      </div>
    </>
  )
}

export default notFound
