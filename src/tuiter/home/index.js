import React from 'react';

import './index.css';
import NavigationSidebar from "../navigation-sidebar";
import PostItems from "../post-list";
import PostSummaryList from "../post-summary-list";

const active='home';
const HomeScreen = () => {
    return (
        <>
            <PostItems/>
        </>
    );
}
export default HomeScreen;