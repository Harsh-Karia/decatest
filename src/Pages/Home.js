import React from "react";
import '../Styles/Pages.css';
// import deca_logo from '../Images/deca_logo.png'
import deca_table from '../Images/deca_table.jpg'
import cookie_deco from '../Images/cookie_deco.png'
import pizza_social from '../Images/pizza_social.jpg'
// import club_meeting from '../Images/club_meeting.jpg'
import {Link} from 'react-router-dom';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Home(){
	return(
		<div>	
			<div class="page_front">
				<div>
					<h1>Deca at UC Davis</h1>
					<h3>Preparing emerging leaders in marketing, finance, hospitality, and management at UC Davis</h3>
					<br></br>
					<Link to="/about" >
                            <button class = "rbutton">Learn More About Deca at UC Davis</button>
                    </Link>
					<br></br>
					<img src={deca_table} alt="deca_table" width='400px'style={{margin:'50px'}}/>
				</div>
			</div>
			<br></br>
			<div className='box' >
				<div className="leftBox" style={{textAlign:'center'}}>
					<img src={cookie_deco} alt="cookie_deco" width='400px'/>
					<br></br>
					<Link to="/events">
                        <button class = "rbutton" style={{marginTop:'10px'}}>Explore Opportunities</button>
                    </Link>
				</div>
				<div className="rightBox" style={{textAlign:'center'}}>
					<img src={pizza_social} alt="pizza_social" width='400px'/>
					<br/>
					<Link to="/apply">
                        <button class = "rbutton" style={{marginTop:'10px'}}>Join Us!</button>
                    </Link>
				</div>
			</div>
			<div className="box" style={{paddingTop:'170px', paddingBottom:'100px'}}>
				<div className="leftBox" style={{justifyContent:'flex-start'}}>
					<h1>Connect with Us.</h1>
					<h3>Contact DECA at UC Davis to learn more about future opporutnites.</h3>
					<Link to="/apply">
                            <button class = "rbutton">Contact Us</button>
                    </Link>
				</div>
				<div className="rightBox"> 
					<InstagramEmbed url="https://www.instagram.com/p/CzCHMOXPCoX/?img_index=1" width='328px' />
				</div>	
			</div>
		</div>
	)
}