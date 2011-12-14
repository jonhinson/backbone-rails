(function($) {
  return $.extend($.fn, {
    backboneLink: function(model) {
      return $(this).find(":input").each(function() {
        var el, name;
        el = $(this);
        name = el.attr("name");
        model.bind("change:" + name, function() {
          return el.val(model.get(name));
        });
        return $(this).bind("change", function() {
          var attrs;
          el = $(this);
          attrs = {};
          if(el.is("input[type='checkbox']") && $("input[type='checkbox'][name='"+name+"']").length > 1) {
            attrs[el.attr("name")] = []
            $("input[type='checkbox'][name='"+name+"'][checked]").each(function() {
              attrs[el.attr("name")].push($(this).val());
            });
          } else {
            attrs[el.attr("name")] = el.val();
          }
          return model.set(attrs);
        });
      });
    }
  });
})(jQuery);
