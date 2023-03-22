( function( $, window ) {
    'use strict';
    $(window).on('elementor/frontend/init', function (){
        if ( window.elementorFrontend.isEditMode() ) {
            
            window.elementorFrontend.hooks.addAction( 'frontend/element_ready/column',
                function( $scope ){ 
                    zircona_sticky_sidebar();
                }
            );
        
        }

    });
}( jQuery, window ) );

