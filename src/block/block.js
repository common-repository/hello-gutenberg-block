/**
 * BLOCK: ghb-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { TextControl } = wp.components;
const { RichText } = wp.editor;


/**
 * Register: Hello Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'ghb/block-ghb-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Hello Gutenberg Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'ghb-block — GHB Block' ),
		__( 'GHB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'h2',
        },
    },

    edit: function( props ) {
        return wp.element.createElement( wp.editor.RichText, {
            tagName: 'h2',
            className: props.className,
            value: props.attributes.content,
            onChange: function( content ) {
                props.setAttributes( { content: content } );
            }
        } );
    },

    save: function(props) {
        return wp.element.createElement( wp.editor.RichText.Content, {
            tagName: 'h2', value: props.attributes.content
        } );
    }
} );
