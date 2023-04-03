import React from "react";
import { useDispatch } from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    return(
        <>
            <div className="row">
                <div className="col-2">
                    <i className="fa fa-light fa-comment"></i>
                    <span className="text-muted"> {tuit.replies}</span>
                </div>
                <div className="col-2">
                    <i className="fa fa-solid fa-retweet"></i>
                    <span className="text-muted"> {tuit.retuits}</span>
                </div>
                <div className="col-3">{tuit.likes}
                    <i className="bi bi-heart-fill me-2 text-danger"
                       onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1
                    }))}></i>
                </div>
                <div className="col-3">
                    {tuit.dislikes}
                    <i className="bi bi-hand-thumbs-down me-2"
                       onClick={() => dispatch(updateTuitThunk({
                           ...tuit,
                           dislikes: tuit.dislikes + 1
                       }))}></i>
                </div>

                {/*<div className="col-3">*/}
                {/*            <span onClick={likeTuit}>*/}
                {/*                {*/}
                {/*                    tuit.liked &&*/}
                {/*                    <i className="fas fa-heart me-1"*/}
                {/*                       style={{color: 'red'}}></i>*/}
                {/*                }*/}
                {/*                {*/}
                {/*                    !tuit.liked &&*/}
                {/*                    <i className="far fa-heart me-1"></i>*/}
                {/*                }*/}
                {/*                {tuit.likes}*/}
                {/*                </span>*/}
                {/*</div>*/}
                <div className="col-2">
                    <i className="fa fa-solid fa-upload"></i>
                </div>
            </div>
        </>
    );
};
export default TuitStats;