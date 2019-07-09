

import $ from "jquery";
import Lazy from "jquery-lazy";
import 'letteringjs';
import textillate from 'textillate';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import "animate.css/source/_base.css";
import "animate.css/animate.css";
// import "animate.css/source/attention_seekers/bounce.css";
import "./news__page";
import "./gioi__thieu";
import  "./home__page";
$(window).on('load',function() {
	$(".loader").fadeOut("slow");
});

$(function() {
	$('.lazy').Lazy({
		effect: 'fadeIn',
		placeholder: "data:image/svg;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7..."
	});
});
		  