import React from "react";
import '../Styles/Pages.css';
import {Link} from 'react-router-dom';
import ig_logo from '../Images/ig_logo.png'

export default function Apply(){
	return(
		<div className="page_front">
			<h1>Apply this Quarter</h1>
			<h3 style={{color:'#85754e'}}>Check Back in Fall 2024!</h3>
			<h3>Stay updated with our socials:</h3>
			<Link target={"_blank"} to="https://www.instagram.com/deca.ucd/">
                <img src={ig_logo} alt="ig_logo" style={{height:50, borderRadius:'0px'}}/>
            </Link>
		</div>
	)
}