/*jslint browser: true*/
/*global $, window*/
$(function () {
    'use strict';
    $('.slider').height($(window).height() - $('.main-navbar').innerHeight());
    
    $('.portfolio .container .col-lg-4').hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
    }, function () {
        $(this).removeClass('active');
    });
});