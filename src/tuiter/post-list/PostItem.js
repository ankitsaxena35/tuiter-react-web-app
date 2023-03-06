const PostItem = (
    {
        post
    }
) => {
    return (
        <div className ="row mt-2 wd-border-bottom">
            <div className ="col-1">
                <img className="rounded-circle img-fluid mx-auto d-block " src={post.handlerImage}/>
            </div>

            <div className="col-11">
                <div className="d-flex flex-row gap-2">
                    <span className=" text-black"><strong className="text-black ">{post.handlerName}</strong></span>
                    <i className=" fa-solid fa-circle-check text-black"></i>
                    <span className=" text-muted">{post.handle}</span>
                    <i className=" fa-solid fa-badge-check"></i>
                    <span className=" text-muted">{post.time}</span>
                    <i className="fa-solid fa-ellipsis mr-2 float-end"></i>
                </div>
                <div className=" row mb-2">
                    <span className=" text-black">{post.title}</span>
                </div>

                <div className=" card bg-black rounded wd-border-color">
                    <img src={post.image} className=" card-img-top wd-border-bottom"/>
                    {(post.body_head===undefined && post.body_text===undefined) ?null: <span className=" p-2">
                    <p className=" bg-black text-white m-0">{post.body_head}</p>
                    <p className=" bg-black text-muted m-0">{post.body_text}</p>
                </span> }

                </div>
                <div className=" m-2">
                    <div className=" row">
                        <div className=" col-3">
                            <i className=" far fa-comment"></i>
                            <span className=" text-muted">{post.comment}</span>
                        </div>
                        <div className=" col-3">
                            <i className="fa fa-retweet"></i>
                            <span className=" text-muted">{post.retweet}</span>
                        </div>
                        <div className=" col-3">
                            <i className=" bi bi-heart"></i>
                            <span className=" text-muted">{post.heart}</span>
                        </div>
                        <div className=" col-3">
                            <i className=" fa fa-light fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )

};
export default PostItem;