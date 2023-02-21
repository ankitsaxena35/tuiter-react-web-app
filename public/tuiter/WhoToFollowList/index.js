import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
export default function WhoToFollowList() {
    return (`
     <div class="list-group">
     <span class="list-group-item text-white"><strong>Who to follow</strong></span>
     ${
        who.map(item => {
            return WhoToFollowListItem(item);
        }).join('')
    }
        
    </div>
    `)

}