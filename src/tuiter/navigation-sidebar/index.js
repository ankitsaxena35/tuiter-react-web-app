import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = (
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/" className={`list-group-item ${active === '' || active == null ?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>

            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile' || 
            active === 'edit-profile' ?'active':''}`}>
                Profile
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;