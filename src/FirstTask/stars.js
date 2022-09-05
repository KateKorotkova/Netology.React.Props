import {Star} from "./star";
import PropTypes from "prop-types";


function Stars({count}) {
    if (isNaN(count) || count < 1 || count > 5)
        return null;

    let html = [];
    for(let i = 1; i <= count; i++)
    {
        //bad practise to work with iterator as a key ('id' should be used), just for training purposes 
        html.push(<li key={i}><Star/></li>);
    }

    return (
        <>
        <ul className="card-body-stars">
            { html }            
        </ul>
        </>
    );
}


Stars.defaultProps = {
    count: 0
}


export {Stars};