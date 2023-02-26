import React from "react";
import {Card} from 'antd';
import MyCardList from "../MyCardList/MyCardList";

const MyCard = ({users, userPosts}) =>{
    return(
        <div>
        {users.length > 0 &&
          users.map(user => {
            return (
            <Card className='card' title={user.name} key={user.id} headStyle={{backgroundColor: '#FF7F50'}}>
                <p style={{fontFamily: 'monospace', border: '1px solid', padding: '3px'}}>Email: {user.email}</p>
                <MyCardList user={user} userPosts={userPosts}/>
            </Card>
            )
            
          })
        }
        </div>
    )
}

export default MyCard;