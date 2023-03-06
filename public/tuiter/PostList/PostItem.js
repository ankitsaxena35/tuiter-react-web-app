const PostItem = (post) => {
    return `
    <div class ="row mt-2 wd-border-bottom">
            <div class ="col-1">
                <img class="rounded-circle img-fluid mx-auto d-block " src="${post.handlerImage}">
            </div>
            <div class ="col-11">
                <div class="row">
                <span class="text-white"><strong class="text-white  ">${post.handlerName}</strong></span>
                <i class="fa-solid fa-circle-check text-white"></i>
                <span class="text-muted">${post.handle}</span>
                <i class="fa-solid fa-badge-check"></i>
                <span class="text-muted">${post.time}</span>
                <i class="fa-solid fa-ellipsis float-end mr-2"></i>
                </div>
                <div class="row mb-2">
                    <span class="text-white">${post.title}</span>
                </div>
                
                <div class="card bg-black rounded wd-border-color">
                    <img src="${post.image}" class="card-img-top wd-border-bottom">
                    ${(post.body_head===undefined && post.body_text===undefined) ?``: `<span class=" p-2">
                    <p class="bg-black text-white m-0">${post.body_head}</p>
                    <p class="bg-black text-muted m-0">${post.body_text}</p>
                </span>`}
                    
                </div>
                <div class="m-2">
                    <div class="row">
                        <div class="col-3">
                            <i class="fa fa-light fa-comment"></i>
                            <span class="text-muted">${post.comment}</span>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-solid fa-retweet"></i>
                            <span class="text-muted">${post.retweet}</span>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-light fa-heart"></i>
                            <span class="text-muted">${post.heart}</span>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-light fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>
                </div>
            </div>
    </div>`;
};
export default PostItem;