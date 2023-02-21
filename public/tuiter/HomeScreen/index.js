import NavigationSidebar from "../NavigationSidebar";
import PostItems from "../PostList";
import PostSummaryList from "../PostSummaryList";

(function ($) {
    $('#wd-home').append(`
        <div class="row">
        <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-2 col-xxl-2 mt-2 wd-border-right">
                ${NavigationSidebar("home")}
            </div>
            <div class="col-11 col-sm-11 col-md-11 col-lg-7 col-xl-6 col-xxl-6 mt-2 wd-border-right">
                ${PostItems()}
            </div>
            <div class="d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4 mt-2">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);