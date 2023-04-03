import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitsItem from "./TuitsItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";


const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    // const tuitsArray = useSelector(state => state.tuits)
    return (
        <div className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(tuit =><TuitsItem key={tuit._id}
                                                     tuit={tuit}/>)
            }
        </div>
    )
};

export default TuitsList;