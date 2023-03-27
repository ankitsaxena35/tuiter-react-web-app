import React from "react";
import {useSelector} from "react-redux";
import TuitsItem from "./TuitsItem";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <div>
            {
                tuitsArray.map(tuit =><TuitsItem key={tuit._id}
                                                     tuit={tuit}/>)
            }
        </div>
    )
};

export default TuitsList;