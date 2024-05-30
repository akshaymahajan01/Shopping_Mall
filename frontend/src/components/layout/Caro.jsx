import React from 'react'

const Caro = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/img1.jpg" className="d-block w-100" alt="img1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Shop Now </h1>
                        <p>New Arrival Here</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/img2.jpg" className="d-block w-100" alt="img2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Trending Things</h1>
                        <p>Exclusively Here</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/img3.jpg" className="d-block w-100" alt="img3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>SALES</h1>
                        <p>On Latest Collection</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Caro