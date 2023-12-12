import React from "react";

function article_1() {
    return {
        date: "11 December 2023",  
        title: "My Internship Journey at Red Hat: Overcoming Imposter Syndrome",
        description:
            "My account of my internship at Red Hat, detailing my experiences, challenges, and growth in the world of software engineering.", 
        keywords: [
            "Internship Experience",
            "Red Hat",
            "Software Engineering",
            "Imposter Syndrome",
            "Personal Growth",
            "Tech Career"
        ],
		style: `
		.article-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.randImage {
			align-self: center;
			border-radius: 15px; /* Rounded edges */
			margin: 0 auto; /* Horizontal centering */
			display: block; /* Ensures the margin auto works for centering */
			/* Optional: Control the size of the image */
			max-width: 90%; /* Adjust as needed */
			height: auto; /* Keeps the aspect ratio of the image */
		}

		.image-collage {
			display: grid;
			grid-template-columns: repeat(2, 1fr); /* Creates a 2x2 grid */
			grid-gap: 10px; /* Space between images */
		}
		
		.image-collage img {
			width: 100%; /* Makes images fill their cell */
			height: auto; /* Maintains aspect ratio */
			border-radius: 10px; /* Rounded edges */
			object-fit: cover; /* Ensures images cover the cell fully */
		}
		`,
        body: (
            <React.Fragment>	
                <p>
				Hi, I'm Sean. My journey into the tech world started at 17, 
				studying for my leaving certificate from home because of COVID-19. Computers 
				have always fascinated me; I loved figuring out how they worked and fixing 
				them when they broke.
				</p>
				<img src="https://pbs.twimg.com/media/EPcW3M5XUAMQLRz?format=jpg&name=4096x4096" 
                     alt="Red Hat Office" 
                     className="randImage" /> 
                <p>
				Like many students my age, choosing what to study after school was a big decision. 
				I decided to look for a BSc in Information Technology, a general course about computers. 
				I was still figuring out what I wanted to specialize in within IT.
				</p>

                <p>
				After my first two years of college and achieving a 70% average, it was time for
				 me to settle into my final year of study, with one semester being a flexi semester,
				for which I chose to do an Internship.
				</p>
                <p>
				I had heard about Red Hat in the world of open-source software. They're known as a great place
				to do an internship. I couldn't believe it when I got the opportunity to intern there for six months. 
				When you apply to a big company like Red Hat, you might think they only take the best, and I wondered if
				I was good enough. I've always done well in my studies but still doubt myself. This is what they call "imposter syndrome."
				</p>
                <p>
				My time in college it helped me prepare for my internship. I had taken many different modules, but Creative Problem Solving 
				and Programming Fundamentals were the two that set me up for success. Initially, I only knew Java, but soon, I realized that 
				learning one programming language made it easier to pick up others.
				</p>

                <p>
				Upon my first day arriving at the Red Hat office, I was assigned to my team and attended my first stand-up,
				introducing myself as the new intern. I would be working as a part of Red Hat's secure build service, specifically Enterprise Contract, 
				which is about "Securely verifying supply chain artifacts and enforcing policies".
				</p>

				<img src="https://i.ibb.co/Vv08nBj/1688480295652.jpg"
                     alt="Red Hat Office" className="randImage" /> 
                <p>
				My team is mostly principal engineers based worldwide,
				meaning communication occurs over Google Meet and Slack. My group was very welcoming and willing to answer 
				all my questions and help me with my onboarding.
				</p>
                <p>
				When working with such experienced colleagues, you can sometimes doubt your technical ability. Some days or weeks,
				I couldn't figure out how to fix something, or my 'test' failed after updating the code. 
				I quickly realized that everyone on my team came up with these issues. We all had to ask a colleague or talk 
				to our rubber ducky, mind was my dog.
				</p>
                <p>
				Working on tickets over the last six months has brought me much joy, especially when my tests passed.
				One of my most significant achievements was creating a github action that utilized the Enterprise Contract Validate 
				to create "a robust GitHub Action designed to assess container images for security and compliance within a Github workflow".
				</p>
                <p>
				Working at a company that's all about growth and development has allowed me to pick up new skills in a hands-on way. 
				I never get stuck in one spot for too long. I'm constantly challenging myself to set new goals and dive 
				into learning something new. My Mentor even pointed out how I get the hang of one thing, and then I'm off, ready to take on the next big challenge.
				It keeps things interesting and me on my toes!
				</p>
                <p>
				One of the most rewarding parts of my internship was giving back. I recorded audiobooks 
				for sick children in July 2023. I attended the Red Hat Summit in Dublin and worked with Transition Year students, 
				teaching them the basics of HTML and CSS and using GitHub pages. 
				I also volunteered at a mini career fair in Waterford, focusing on inspiring women in tech.
				</p>

				<div class="image-collage">
				<img src="https://media.licdn.com/dms/image/D4E22AQEwYkDxWMPk0Q/feedshare-shrink_2048_1536/0/1700558853090?e=1705536000&v=beta&t=P0pq_7aJ5mUgWY156I9sSzo8ElwIKxYgcMUCSLwE9CA" alt="Red Hat Office" /> 
				<img src="https://i.ibb.co/1vx6yWy/1700557964089.gif" alt="Red Hat Office" /> 
				<img src="https://media.licdn.com/dms/image/D4E22AQGrz2ccFKY09Q/feedshare-shrink_1280/0/1700930684660?e=1705536000&v=beta&t=BoaJbWZQ1IMYDx38afOQSn8RqWw91fFB-0P3CfqsoGo" alt="Red Hat Office" /> 
				<img src="https://i.ibb.co/Fnf4mFF/school.jpg" alt="Red Hat Office" /> 
				
				</div>

                <p>
				Over my short time at Red Hat, I've grown immensely as a person and an engineer. I couldn't have asked
				for a better company or team. My manager and Mentor helped me overcome my imposter syndrome. 
				A key lesson I learned is that we're all figuring things out as we go. I started as a student,
				unsure about my path, and left as a confident software engineer. I plan to return to Red Hat as 
				a full-time associate and continue growing and learning.
				</p>
            </React.Fragment>
        ),
    };
}

// function article_2() {
// 	return {
// 		date: "05 December 2023",
// 		title: "My time at Red Hat as an intern",
// 		description:
// 			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
// 		style: ``,
// 		keywords: [
// 			"Artificial Intelligence in Healthcare",
// 			"Tharindu",
// 			"Tharindu N",
// 			"Tharindu Nayanajith",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<h1>Content of article 2</h1>
// 			</React.Fragment>
// 		),
// 	};
// }

// function article_3() {
// 	return {
// 		date: "01 December 2023",
// 		title: "How to host your personal website with Github",
// 		description:
// 			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
// 		style: ``,
// 		keywords: [
// 			"Artificial Intelligence in Healthcare",
// 			"Tharindu",
// 			"Tharindu N",
// 			"Tharindu Nayanajith",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<h1>Content of article 2</h1>
// 			</React.Fragment>
// 		),
// 	};
// }
//article_3, article_2

const myArticles = [ article_1];

export default myArticles;
