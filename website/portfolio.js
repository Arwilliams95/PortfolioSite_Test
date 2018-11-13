/* -------------------------------------------------------------------------------------- smooth reveal/hide nav ---------------------------------------------------------------------------------------------------------*/

$(document).ready(function(){
    $("#navport").click(function(){
        $("#portfolio").slideDown(1000); $("#CurrentProjects").slideUp(1000);
    });
    $("#navcp").click(function(){
        $("#CurrentProjects").slideDown(1000);$("#portfolio").slideUp(1000);
    });
});

/* --------------------------------------------------------------------------------------- way points ----------------------------------------------------------------------------------------------------------*/

var $gal = $('.gallery')
var $portImg = $('#portImg')
var $proj1 = $('.proj1')
var $proj2 = $('.proj2')
var $proj3 = $('.proj3')
var $proj4 = $('.proj4')
var $proj5 = $('.proj5')
var $proj6 = $('.proj6')
var $proj7 = $('.proj7')
var $cp1 = $('.cp1')
var $cp2 = $('.cp2')
var $cp3 = $('.cp3')
var $proj1wp = $('#proj1wp')
var $proj2wp = $('#proj2wp')
var $proj3wp = $('#proj3wp')
var $proj4wp = $('#proj4wp')
var $proj5wp = $('#proj5wp')
var $proj6wp = $('#proj6wp')
var $proj7wp = $('#proj7wp')
var $cp1wp = $('#cp1wp')
var $cp2wp = $('#cp2wp')
var $cp3wp = $('#cp3wp')

$portImg.waypoint(function(){
    $proj1.removeClass('highlight');
});

$proj1wp.waypoint(function(){
    $proj2.removeClass('highlight');
    $proj1.addClass('highlight')
});

$proj2wp.waypoint(function(){
    $proj1.removeClass('highlight');
    $proj3.removeClass('highlight');
    $proj2.addClass('highlight')
});

$proj3wp.waypoint(function(){
    $proj2.removeClass('highlight');
    $proj4.removeClass('highlight');
    $proj3.addClass('highlight')
});

$proj4wp.waypoint(function(){
    $proj3.removeClass('highlight');
    $proj5.removeClass('highlight');
    $proj4.addClass('highlight')
});

$proj5wp.waypoint(function(){
    $proj4.removeClass('highlight');
    $proj6.removeClass('highlight');
    $proj5.addClass('highlight')
});

$proj6wp.waypoint(function(){
    $proj5.removeClass('highlight');
    $proj7.removeClass('highlight');
    $proj6.addClass('highlight')
});
$proj7wp.waypoint(function(){
    $proj6.removeClass('highlight');
    $cp1.removeClass('highlight');
    $proj7.addClass('highlight')
});