(function( $ ) {
    "use strict";

    jQuery(window).on('elementor/frontend/init', function (){
        if ( window.elementorFrontend.isEditMode() ) {
            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-blog.default',
                function( $scope ){ 
                    zircona_parallax_video();
                    zircona_blog_masonry_init();
                    zircona_carousel_slick(); 
                }
            );            

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-blog-hero.default',
                function( $scope ){ 
                    zircona_parallax_video();
                	zircona_blog_masonry_init();
                	zircona_carousel_slick(); 
                }
            );            

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-carousel.default',
                function( $scope ){ 
                    zircona_carousel_slick();  
                }
            );            

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-portfolio.default',
                function( $scope ){ 
                    zircona_isotope();
                    zircona_carousel_slick();  
                    zircona_scroll_animation();
                }
            );            

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-events.default',
                function( $scope ){ 
                    zircona_isotope();
                	zircona_carousel_slick();  
                    zircona_scroll_animation();
                    zircona_events_masonry_init();
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-pie-chart.default',
                function( $scope ){
                    zircona_pie_chart_init();
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-progress-bar.default',
                function( $scope ){ 
                    zircona_progress_bars_init();  
                }
            ); 

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-testimonials.default',
                function( $scope ){ 
                	zircona_carousel_slick();  
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-toggle-accordion.default',
                function( $scope ){ 
                    zircona_accordion_init();  
                }
            ); 

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-team.default',
                function( $scope ){ 
                    zircona_isotope();
                    zircona_carousel_slick();  
                    zircona_scroll_animation();
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-tabs.default',
                function( $scope ){ 
                    zircona_tabs_init();  
                }
            ); 

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-clients.default',
                function( $scope ){ 
                	zircona_carousel_slick();  
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-image-layers.default',
                function( $scope ){ 
                	zircona_img_layers();  
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-video-popup.default',
                function( $scope ){ 
                    zircona_videobox_init();  
                }
            );            

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-countdown.default',
                function( $scope ){ 
                	zircona_countdown_init();  
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-time-line-vertical.default',
                function( $scope ){ 
                	zircona_init_timeline_appear();  
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-time-line-horizontal.default',
                function( $scope ){
                    zircona_init_timeline_horizontal();
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-steps.default',
                function( $scope ){
                    zircona_init_steps();
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-striped-services.default',
                function( $scope ){ 
                	zircona_striped_services_init();  
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-image-comparison.default',
                function( $scope ){ 
                	zircona_image_comparison();  
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-counter.default',
                function( $scope ){ 
                	zircona_counter_init();  
                }
            );

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-menu.default',
                function( $scope ){ 
                    zircona_menu_lavalamp(); 
                }
            );            

            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-header-search.default',
                function( $scope ){ 
                    zircona_search_init(); 
                }
            );            
            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/wgl-header-side_panel.default',
                function( $scope ){ 
                    zircona_side_panel_init();  
                }
            );

        }
    });

})( jQuery );

