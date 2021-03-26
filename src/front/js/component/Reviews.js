import React from "react";
import banner from "../../img/dog-banner.jpg";

const Reviews = () => {
	return (
		<div className="card mb-3 border-0">
			<div className="">
				<div className="">
					<img width={1400} height={500} src={banner} />
				</div>
				<div className="card-img-overlay">
					<div className="card-body text-left">
						<h5 className="card-title">La atencion es maravillosa.</h5>
						<p className="card-text">Mi firu se va muy contento despues de cada visita</p>
						<p className="card-text"> -Laura B. </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
