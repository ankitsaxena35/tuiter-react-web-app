export default function WhoToFollowListItem(who) {
    return (`
    <span class="list-group-item ">
        <div class="row align-items-center">
            <div class="col-2">
                <img class="wd-follow-image-icon float-start" src="${who.avatarIcon}">
            </div>
            <div class="col-6">
                <div class="row">
                    <span><strong class="wd-follow-font-size text-white">${who.userName} </strong><i
                            class="fa fa-check-circle text-white"></i></span>
                </div>
                <div class="row">
                    <small class="text-muted">@${who.handle}</small>
                </div>


            </div>
            <div class="col-4">
                <button type="" class="btn btn-primary btn-sm rounded-pill float-end">Follow</button>
            </div>
        </div>
    </span>
    `)
}

// {
//     avatarIcon: '../../images/virgin.png',
//         userName: 'Virgin Galactic',
//     handle: 'virgingalactic',
// }
