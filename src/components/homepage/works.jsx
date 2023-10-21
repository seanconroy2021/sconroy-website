import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work & Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./redhat.png"
								alt="Red Hat Inc."
								className="work-image"
							/>
							<div className="work-title">Intership Red Hat </div>
							<div className="work-subtitle">
								Software Engineer at Enterpirse Contract
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./college.png"
								alt="College"
								className="work-image"
							/>
							<div className="work-title">Waterford Institute of Technology (SETU)</div>
							<div className="work-subtitle">
								Bachelor of Science Information Technology
							</div>
							<div className="work-duration">2021 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
