(function($) {
//change form submit toggle to checkbox
    Blacklight.do_bookmark_toggle_behavior = function() {
      $(Blacklight.do_bookmark_toggle_behavior.selector).bl_checkbox_submit({
         // css_class is added to elements added, plus used for id base
         css_class: "toggle-bookmark",
         success: function(checked, response) {
           if (response.bookmarks) {
             $('[data-role=bookmark-counter]').text(response.bookmarks.count);
           }
         }
      });
    };
    Blacklight.do_bookmark_toggle_behavior.selector = "form.bookmark-toggle";

Blacklight.onLoad(function() {
  Blacklight.do_bookmark_toggle_behavior();
});


})(jQuery);
