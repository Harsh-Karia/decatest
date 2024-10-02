import React from "react";
import '../Styles/Pages.css';

export default function Events(){
	return(
		<div className="page_front">	
			<h1>Upcoming Events</h1>
			<div className="box">
				<div className="leftBox">
					<h2>Business Fair</h2>
					<h3>April 16, 2024, 6:30 - 8:30 PM in UC Davis ARC Ballroom B</h3>
					<div>
						<p>Join us at our highly anticipated business fair, where professionals from diverse sectors including hospital tourism, marketing, finance, business administration, and technology converge for a day of networking, innovation, and collaboration.</p>
						<p>Experience firsthand the dynamic atmosphere as industry leaders and experts come together to showcase the latest trends, solutions, and strategies shaping their respective fields. From cutting-edge technologies revolutionizing healthcare tourism to groundbreaking marketing strategies driving business growth, there's something for everyone at our event.</p>
						<p>Engage in meaningful conversations with peers and thought leaders, exchange insights, and explore potential partnerships that can drive your business forward. Whether you're seeking innovative solutions, strategic alliances, or simply looking to expand your professional network, our business fair offers a platform tailored to your needs.</p>
						<p>Discover new opportunities, gain fresh perspectives, and stay ahead of the curve in an ever-evolving business landscape. Mark your calendars and join us for a day of inspiration, connection, and growth at our upcoming business fair.</p>
					</div>
				</div>
				<div className="rightBox">
					<h2>Collegiate DECA International Career Development Conference</h2>
					<h3>April 5 - 8, 2024 in San Francisco, CA</h3>
					<p>
						<ul style={{ listStyle: 'disc' }}>
							<li>Professional Development Series: Engage with business executives through a full day of professional development workshops, panels and sessions.</li>
							<li>Competitive Events: 1,000 Collegiate DECA members demonstrate their career knowledge and skills by participating in Collegiate DECA’s Competitive Events Program in hopes of being named an international champion.</li>
							<li>Career Exhibits + Networking: Network with representatives from corporate supporters and educational partners participating in the College and Career Exhibits.</li>
							<li>Special Collegiate ICDC Programs: Sales Challenge, LinkedIn Photo Booth, the election of the new executive officer team and more!</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	)
}