const NavigationSidebar = (active) => {
    return (`
        <div class="list-group">
            <span class="list-group-item"><i class="fab fa-twitter text-white"></i></span>
            <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action
                ${active === 'home' ? 'active' : ''}"><i
                class="fa fa-home text-white"></i><span
                class="d-none d-xl-inline-block wd-padding-left-side text-white">Home</span></a>
            <a href="../explore-previous/index.html" class="list-group-item list-group-item-action 
                ${active === 'explore' ? 'active' : ''}" aria-current="true"><i
                class="fa fa-solid fa-hashtag text-white"></i><span
                class="d-none d-xl-inline-block wd-padding-left-side text-white">Explore</span></a>
            <a href="#" class=" list-group-item list-group-item-action"><i
                class="fa fa-solid fa-bell text-white"></i>
                <span class="d-none d-xl-inline-block wd-padding-left-side text-white">Notifications</span></a>
            <a href="#" class="list-group-item list-group-item-action"><i
                class="fa fa-solid fa-envelope text-white"></i>
                <span class="d-none d-xl-inline-block wd-padding-left-side text-white">Messages</span></a>
            <a href="#" class="list-group-item list-group-item-action"><i
                class="fa fa-solid fa-bookmark text-white"></i>
                <span class="d-none d-xl-inline-block wd-padding-left-side text-white">Bookmarks</span></a>
            <a href="#" class="list-group-item list-group-item-action"><i
                class="fa fa-solid fa-list text-white"></i><span
                class="d-none d-xl-inline-block wd-padding-left-side text-white">Lists</span></a>
            <a href="#" class="list-group-item list-group-item-action"><i
                class="fa fa-solid fa-user text-white"></i>
                <span class="d-none d-xl-inline-block wd-padding-left-side text-white">Profile</span></a>
            <a href="#" class="wd-padding-left list-group-item list-group-item-action"><span
                class="fa-stack fa-1x wd-margin-more-negative text-white">
                            <i class="fas fa-circle fa-stack-1x wd-more-size text-white"></i>
                            <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black"></i>
                        </span> <span class="d-none d-xl-inline-block text-white">More</span></a>
            
        </div>
<!--            <button type="" class="btn btn-primary mt-2 rounded-pill">Tweet</button>-->
       <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
        </div>

    `)

}

export default NavigationSidebar;
