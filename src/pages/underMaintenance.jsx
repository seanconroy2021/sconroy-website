import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/404.css";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

const Notfound = () => {
	useEffect(() => {
		document.title = `Under Maintenance | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								Sorry! <FontAwesomeIcon icon={faHammer} />
							</div>
                            <FontAwesomeIcon icon="fa-solidfa-hammer" style={{color: "#f4cd4c",}} />
							<div className="not-found-message">
                            My site is currently undergoing maintenance.
								<br />

							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
