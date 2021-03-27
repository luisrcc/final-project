import React from "react";
import dogImg1 from "../../img/cat-veterinari.jpeg";
import dogImg2 from "../../img/dog-relax.jpeg";
import dogImg4 from "../../img/dog-veterinary.jpeg";

export const Carousel = () => {
	return (
		<div className="carousel">
			<div className="carousel slide top-content" data-ride="carousel" id="theCarousel">
				<ol className="carousel-indicators">
					<li data-target="#theCarousel" data-slide-to="0" className="active" />
					<li data-target="#theCarousel" data-slide-to="1" />
					<li data-target="#theCarousel" data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="ccarousel-item carousel-item-1 active">
						<img className="d-block" src={dogImg2} style={{ height: "500px" }} />
					</div>
					<div className="carousel-item carousel-item-2">
						<img className="d-block" src={dogImg1} style={{ height: "500px" }} />
					</div>
					<div className="carousel-item carousel-item-3">
						<img className="d-block" src={dogImg4} style={{ height: "500px" }} />
					</div>
				</div>
				<a className="carousel-control-prev" href="#theCarousel" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#theCarousel" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
};
