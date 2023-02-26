import React from "react";
import {Card} from 'antd';
import { getCurrentPostsToUser } from "../../services/PostServices";
//содержит список постов в главной карточке

const MyCardList = ({user, userPosts}) =>{
    let currentPosts = getCurrentPostsToUser(user.id, userPosts) 
    return(
        <div>
        
        {
        currentPosts.map(post =>{
            return(
                    <Card className='postCard' title={post.title} key={Math.random()} bordered={false}  headStyle={{backgroundColor: '#FFA07A'}}>
                        <p >{post.body} </p>
                    </Card>
                    ) 
                
                } 
            )
                
        }        
        </div>
    )
}

export default MyCardList;