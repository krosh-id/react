import React, { useEffect, useState } from 'react';

const [userPosts, setPosts] = useState([])

const getData = () => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resPost => resPost.json())
      .then(resPost => {
        if (resPost && Array.isArray(resPost) && resPost.length > 0) {
          setPosts(resPost)
        } 
      })
    
  }

const getCurrentPostsToUser = (userId, posts) => {
    let currentPosts = []

    return currentPosts;
}