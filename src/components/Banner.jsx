import React from "react";
import { Link } from "react-router-dom";
import { Banner_title, Banner_para, Banner_btn } from "./utils/String";
function Banner() {
	return (
		<>
			<section className="banner-section">
                <video src='https://www.youtube.com/watch?v=2X_2IdybTV0' autoPlay loop muted />
				<div className="container">
                    <div className="banner-content">
                        <h1 className="title">
                            {Banner_title}
                        </h1>
                        <p>
                            {Banner_para}
                        </p>
                        <div className="banner-btn">
                            <Link to="#0" className="btn--base" data-bs-toggle="modal"
                                data-bs-target="#downloadModal">
                                    {Banner_btn}
                            </Link>
                        </div>
                    </div>
				</div>
			</section>
		</>
	);
}

export default Banner;