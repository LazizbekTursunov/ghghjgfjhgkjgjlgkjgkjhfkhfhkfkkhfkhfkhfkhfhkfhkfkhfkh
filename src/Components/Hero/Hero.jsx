import "./Hero.scss";
import hero from "../Img/Screenshot_from_2024-02-10_09-30-54-removebg-preview.png";
import heroicon from "../Img/icon.png";
import React from "react";

export default function Hero() {
  const rref = React.useRef();
  const ef = React.useRef();
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__info">
          <h1 className="hero__heading">
            Best <span className="hero__span">Marketing</span> Digital Agency
          </h1>
          <p className="hero__text">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose
          </p>
          <div className="hero__flex">
            <button
              className="hero__button"
              onClick={() => {
                ef.current.classList.add("modal_texts");
              }}
            >
              Get Started
            </button>
            <button
              className="hero__button1"
              onClick={() => {
                rref.current.classList.add("modal_block");
              }}
            >
              <img
                className="hero__btn__img"
                src={heroicon}
                alt="img"
                width={50}
                height={50}
              />
              Watch Video
            </button>
          </div>
        </div>
        <img
          className="hero__img"
          src={hero}
          alt="img"
          width={700}
          height={550}
        />
        <div className="hero__modal" ref={rref}>
          <button
            className="hero__modal__btn"
            onClick={() => {
              rref.current.classList.remove("modal_block");
            }}
          >
            X
          </button>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/m81vVweOHds?si=-CmrIxl_vwT7Ez0W"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="modal_text " ref={ef}>
          <button
            className="get__btn"
            onClick={() => {
              ef.current.classList.remove("modal_texts");
            }}
          >
            X
          </button>
          <p className="get__text">
            It just my fuckin' playlist. But it has a lot of emotional musics.
          </p>
        </div>
      </div>
    </section>
  );
}
