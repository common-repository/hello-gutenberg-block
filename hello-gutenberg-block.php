<?php
/**
 * Plugin Name: Hello Gutenberg Block
 * Description: Hello Gutenberg Block — is a Gutenberg compatible Hello Gutenberg Block, which is simple for admin to add dynamic Information with colored GUI.
                Like admin block Interface color is different and Visitor Block color is different.
                This is very help for the Gutenberg beginner developer as reference how we can use REACT js for developing New gutenberg custom block.
 * Author: Hitendra Chopda
 * Author URI: https://profiles.wordpress.org/hitendra-chopda
 * Version: 1.0.1
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
