
jQuery(function () {
    $(".tab-naviagtion__item").on("click", function () {
        let idListItems = $(this).attr("id");
        $(".content").removeClass("active");
        $(`.${idListItems}-content`).addClass("active");
    });
});
