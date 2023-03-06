import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return (`
        <div class="wd-input-icon">
            <i class="wd-tuit-search-icon fa fa-search" aria-hidden="true"></i>
            <input class="rounded-pill wd-input-field wd-mr wd-search-bar-width wd-search-color" type="text" placeholder="Search Tuiter">
            <i class="fa fa-cog wd-setting-icon text-white" aria-hidden="true"></i>
        </div>
        
        
        <ul class="nav nav-pills d-flex justify-content-around">
            <li class="nav-item wd-current-selector-link">
                <a class="nav-link text-white" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-inline-block">
                <a class="nav-link text-white" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        
        
        <div>
            <div class="card px-0">
                <img class="card-img-top wd-container" src="spacexStarship.webp" width="100%">
                <div class="card-body wd-bottom-left text-white">
                    <strong>SpaceX's Starship</strong>
                </div>
            </div>
             ${PostSummaryList()}
        </div>
             
    `);
}

export default ExploreComponent;