import React, { useState } from 'react';
import styles from './BlogPanel.module.css'

export default function BlogPanel({
  title,
  date,
  heroImage,
  logo,
  logoWidth,
  description,
  link,
  color
}) {

  const [show, setShow] = useState(false)

  return (
    <div
      className="w-full h-screen relative flex items-end justify-center overflow-hidden"
      style={{backgroundColor: color}}
    >
      <figure
        style={{
          backgroundImage: `url(${heroImage.imageUrl})`,
          bottom: show ? '80vh' : 0,
          left: show ? '10%' : 0,
          right: show ? '10%' : 0
        }}
        className={styles.background}
      >
      </figure>
      <div
        className={styles.contentContainer}
        style={{
          top: show ? '30vh' : '70vh',
        }}
      >
        <div className={styles.logoContainer}>
          <img
            src={logo.imageUrl}
            width={logoWidth}
            className={styles.logo}
            onClick={() => setShow(prevState => !prevState)}
          />
        </div>
        <div
          className={styles.detailsContainer}
          style={{
            opacity: show ? 1 : 0,
            color: color === "#ffffff" ? "black" : "white"
          }}
        >
          <h3 className="text-5xl mb-6">{title}</h3>
          <p>
            {description}
          </p>
          <a href={link} target="__blank">
            <div
              className="rounded-full p-2 w-40 mt-8"
              style={{backgroundColor: color === "#ffffff" ? 'rgba(0,0,0,0.25)' :'rgba(255,255,255,0.25)'}}
            >
              <p className="uppercase text-xl">
                Visit
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}