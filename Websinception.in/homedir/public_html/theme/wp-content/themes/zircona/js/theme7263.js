"use strict";

is_visible_init();
zircona_slick_navigation_init();

jQuery(document).ready(function($) {
    zircona_sticky_init();
    zircona_search_init();
    zircona_side_panel_init();
    zircona_mobile_header();
    zircona_woocommerce_helper();
    zircona_woocommerce_login_in();
    zircona_init_timeline_appear();
    zircona_accordion_init();
    zircona_services_accordion_init();
    zircona_striped_services_init();
    zircona_progress_bars_init();
    zircona_carousel_slick();
    zircona_image_comparison();
    zircona_counter_init();
    zircona_countdown_init();
    zircona_img_layers();
    zircona_pie_chart_init();
    zircona_page_title_parallax();
    zircona_extended_parallax();
    zircona_portfolio_parallax();
    zircona_message_anim_init();
    zircona_scroll_up();
    zircona_link_scroll();
    zircona_skrollr_init();
    zircona_sticky_sidebar();
    zircona_videobox_init();
    zircona_parallax_video();
    zircona_tabs_init();
    zircona_select_wrap();
    zircona_button_wrap();
    jQuery( '.wgl_module_title .carousel_arrows' ).zircona_slick_navigation();
    jQuery( '.wgl-filter_wrapper .carousel_arrows' ).zircona_slick_navigation();
    jQuery( '.wgl-products > .carousel_arrows' ).zircona_slick_navigation();
    jQuery( '.zircona_module_custom_image_cats > .carousel_arrows' ).zircona_slick_navigation();
    zircona_scroll_animation();
    zircona_woocommerce_mini_cart();
    zircona_text_background();
    zircona_dynamic_styles();
    zircona_image_parallax();
    zircona_init_timeline_horizontal();
    zircona_init_steps();
});

jQuery(window).load(function() {
    zircona_isotope();
    zircona_blog_masonry_init();
    setTimeout(function(){
        jQuery('#preloader-wrapper').fadeOut();
    },1100);

    zircona_particles_custom();
    zircona_particles_image_custom();
    zircona_menu_lavalamp();
    jQuery(".wgl-currency-stripe_scrolling").each(function(){
        jQuery(this).simplemarquee({
            speed: 40,
            space: 0,
            handleHover: true,
            handleResize: true
        });
    })
});
