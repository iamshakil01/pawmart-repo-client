import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className="carousel w-full rounded-2xl">
                <div id="slide1" className="carousel-item relative w-full h-[600px]">
                    <img
                        src="https://i.ibb.co.com/WWjtVH7r/Gemini-Generated-Image-12c9i912c9i912c9.png"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[600px]">
                    <img
                        src="https://i.ibb.co.com/VWpn27CV/Gemini-Generated-Image-5w2bfu5w2bfu5w2b.png"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[600px]">
                    <img
                        src="https://i.ibb.co.com/5XnyBmYb/Gemini-Generated-Image-l8t2lwl8t2lwl8t2.png"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;