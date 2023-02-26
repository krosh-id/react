
export const getCurrentPostsToUser = (userId, posts) => {
    let currentPosts = []
    //используется фильтер потому что find находит только первый элемент 
    currentPosts = posts.filter(post =>
        {
            if(userId === post.userId){
                return post
            }
            return false;
        }
        )
        
    return currentPosts;
}

