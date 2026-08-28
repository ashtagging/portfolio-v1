import React, { useCallback, useEffect, useRef, useState } from "react";
import "./photos.scss";

const data = [
  {
    id: "1",
    img: "./assets/image-carousel/best-view.jpg",
    title: "Upper Pisang to Manang viewpoint",
    country: "Nepal",
  },
  {
    id: "2",
    img: "./assets/image-carousel/desert.jpg",
    title: "Sahara Desert",
    country: "Morocco",
  },
  {
    id: "3",
    img: "./assets/image-carousel/pink-beach.jpg",
    title: "Pink Beach",
    country: "Indonesia",
  },
  {
    id: "4",
    img: "./assets/image-carousel/moss.jpg",
    title: "Peak District",
    country: "UK",
  },
  {
    id: "5",
    img: "./assets/image-carousel/padar-island.jpg",
    title: "Padar Island Viewpoint",
    country: "Indonesia",
  },
  {
    id: "6",
    img: "./assets/image-carousel/chefchaoen.jpg",
    title: "Chefchaoen",
    country: "Morocco",
  },
  {
    id: "7",
    img: "./assets/image-carousel/ranthambore.jpg",
    title: "Ranthambore National Park",
    country: "India",
  },
  {
    id: "8",
    img: "./assets/image-carousel/sri-lanka-beach.jpg",
    title: "Yala National Park",
    country: "Sri Lanka",
  },
  {
    id: "9",
    img: "./assets/image-carousel/tiger2.jpg",
    title: "Tigers",
    country: "India",
  },
];

function Photos() {
  const trackRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  // Tracks the slide we're aiming for, updated synchronously on every click
  // so rapid clicks always advance one-by-one. `currentSlide` state (for the
  // active dot) only catches up ~100ms after a scroll settles, so it can't
  // be used for this — reading it here would make fast clicks skip slides.
  const targetIndexRef = useRef(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    const wrapped = (index + data.length) % data.length;
    targetIndexRef.current = wrapped;
    track.scrollTo({ left: wrapped * track.clientWidth, behavior: "smooth" });
  }, []);

  const stepBy = useCallback(
    (delta) => goTo(targetIndexRef.current + delta),
    [goTo]
  );

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      targetIndexRef.current = index;
      setCurrentSlide(index);
    }, 100);
  };

  useEffect(() => {
    return () => clearTimeout(scrollTimeoutRef.current);
  }, []);

  return (
    <section className="photos" id="photos" aria-label="Photos">
      <h2 className="visually-hidden">Photos</h2>
      <div className="carousel">
        <div className="track" ref={trackRef} onScroll={handleScroll}>
          {data.map((d) => (
            <div className="slide" key={d.id}>
              <img src={d.img} alt={`${d.title}, ${d.country}`} loading="lazy" />
              <div className="text-container">
                <h3 className="photo-heading">{d.title}</h3>
                <p className="photo-country">
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                  {d.country}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="arrow-button left"
          aria-label="Previous photo"
          onClick={() => stepBy(-1)}
        >
          <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button
          className="arrow-button right"
          aria-label="Next photo"
          onClick={() => stepBy(1)}
        >
          <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>

        <div className="dots" role="tablist" aria-label="Select photo">
          {data.map((d, index) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`Go to photo ${index + 1}: ${d.title}`}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Photos;
