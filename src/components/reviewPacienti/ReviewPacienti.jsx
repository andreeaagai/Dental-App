import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./ReviewPacienti.css";
import googleImage from '../../assets/google-image.png'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
      fetch("/reviews.json")
          .then((res) => res.json())
          .then((data) => setReviews(data))
          .catch((err) => console.error("Eroare la fetch:", err));
  }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    const truncateText = (text, length = 150) => {
        if (text.length <= length) return text;
        return text.slice(0, length) + "...";
    };

  return (
      <div className="reviews-wrapper">
          <div className="google-review">
              <h3>Lasă-ne un review pe</h3>
              <img className="google-image" src={googleImage} alt="Google " />
              <a href="https://www.google.com/maps/place/eDentify/@44.4650577,26.0651145,17z/data=!3m1!4b1!4m6!3m5!1s0x40b203fcc8fcd2e3:0xc4d2cea82fa47677!8m2!3d44.4650577!4d26.0676894!16s%2Fg%2F11y56qc9rj?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D">
                  <button className="google-btn">Apasă Aici</button>
              </a>
          </div>

        <h2 className="reviews-title">Ce spun pacienții noștri</h2>
            
            {reviews.length > 0 ? (
                <Slider {...settings}>
                    {reviews.map((rev, i) => (
                        <div key={i} className="review-slide">
                            <div className="review-card">
                                <div className="review-header">
                                    <div>
                                        <p className="review-author">{rev.author}</p>
                                        <p className="review-date">{rev.time}</p>
                                    </div>
                                </div>
                                <div className="review-stars">
                                    {"⭐".repeat(rev.rating)}
                                </div>
                                <div className="review-text">
                                    {truncateText(rev.text)}
                                </div>
                                {rev.text.length > 150 && (
                                    <button className="read-more" onClick={() => setSelectedReview(rev)}>
                                        Citește mai mult
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>Se încarcă recenziile...</p>
        )} 

            {selectedReview && (
                <div className="modal-overlay" onClick={() => setSelectedReview(null)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedReview(null)}>
                            ✕
                        </button>
                        <div className="modal-content">
                            <div className="modal-header">
                                <div>
                                    <p className="review-author">{selectedReview.author}</p>
                                    <p className="review-date">{selectedReview.time}</p>
                                    <p className="review-stars">{"★".repeat(selectedReview.rating)}</p>
                                </div>
                            </div>
                            <p className="modal-text">{selectedReview.text}</p>
                        </div>
                    </div>
                </div>
            )}  
    </div>
  );
}

export default Reviews;
