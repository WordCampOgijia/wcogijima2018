<?php
add_action( 'wp_enqueue_scripts', function() {
	$time = get_theme_file_path( '/css/style.css' );
	wp_enqueue_style( 'twentyseventeen-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'wcogijima2018', get_theme_file_uri( '/css/style.css' ), [ 'twentyseventeen-style' ], $time );
} );
