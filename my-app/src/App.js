
import './styles/App.css';
import React, { useEffect, useState } from 'react';
import MyCard from './components/UI/MyCard/MyCard';


function App() {

  const [users, setUsers] = useState([])
  const [userPosts, setPosts] = useState([])



  const getData = () => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setUsers(res)
        } 
      })

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resPost => resPost.json())
      .then(resPost => {
        if (resPost && Array.isArray(resPost) && resPost.length > 0) {
          setPosts(resPost)
        } 
      })
    
  }


  // const loadUsers = () => {
  //   getData()
  // }

  useEffect(()=>{
    getData()
  }, [])

  

  const styles = {
    border: '1px solid #F5F5F5', //добавить в app.css
    padding: 10,
    margin: 'auto',
    
    marginBottom: 5,
    backgroundColor: '#FFFFFF'
  }

  return(
    <div className='App'>
       
      <h2 style={styles}>Information about users</h2>
      
      
      <MyCard users={users} userPosts={userPosts}/>
      
    </div>
  )
}

export default App;



