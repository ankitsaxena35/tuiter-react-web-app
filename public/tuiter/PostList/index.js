import PostItem from "./PostItem.js";
import postItems from "./posts.js";

const PostItems = () => {
    return(`
    
            ${
        postItems.map(items => {
            return(PostItem(items));
        }).join('')
    }
    
    `);
}
export default PostItems;