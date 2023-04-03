import React from 'react';
import {useDispatch} from "react-redux";
import TuitStats from './TuitStats';
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitsItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <>
            <div className ="row mt-2 wd-border-bottom">
                <div className ="col-1">
                    <img className="rounded-circle img-fluid mx-auto d-block" src={`../../images/${tuit.image}`} alt=""></img>
                </div>
                <div className ="col-11">
                    <div className="row">
                        <div>
                            <strong>{tuit.username} </strong>
                            <i className="fa fa-solid fa-check-circle"></i>
                            <span className="text-muted"> {tuit.handle} </span>
                            <span className="text-muted">{tuit.time} </span>
                            <i onClick={() => deleteTuitHandler(tuit._id)} className="fas fa-remove fa-pull-right "></i>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <span className="text-black">{tuit.tuit}</span>
                    </div>
                    <div className="m-2">
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div>
        </>
    )
};
export default TuitsItem;