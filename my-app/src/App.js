import logo from './logo.svg';
import './App.css';
// import './mycss.css'
// import * as classstyle from './mycs.module.css'
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd'

function App() {
  //const [counter, setCounter] = useState()
  const [users, setUsers] = useState([])
  const [userPosts, setPosts] = useState([])

  // const increment = () => {
  //   setCounter(counter+1)
  // }
  // const decrement = () => {
  //   if (counter > 0) setCounter(counter-1)
    
  // }

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


  const loadUsers = () => {
    getData()
  }

  useEffect(()=>{
    getData()
    
  }, [])

  

  const styles = {
    // 'border: 1 solid #000',
    // color: 'red',
    border: '1px solid #F5F5F5',
    padding: 10,
    margin: 'auto',
    //borderRadius: 10,
    marginBottom: 5,
    backgroundColor: '#FFE4C4'
  }
  return(
    <>
      <h2 style={styles}>Information about users</h2>
      <div style={{margin: 50, gap: 16,}}>
        {users.length > 0 &&
          users.map(user => {
            return (
              
              <Card title={user.name} key={Math.random()} style={{width: 600, margin:10 }} headStyle={{backgroundColor: '#FFE4C4'}}>
              <p style={{fontFamily: 'monospace'}}>Email: {user.email}</p>
              
              <Row gutter={10}>  
               { 
                
                userPosts.filter(post => post.userId === user.id).map(post =>{
                  return(
                    
                    <Col span={30}>
                    <Card title={post.title}  bordered={false} style={{margin:10}} headStyle={{backgroundColor: '#FFF8DC'}}>
                    <p >{post.body} </p>
                    </Card>
                    </Col>
                    
                      ) 
                
                    } 
                  )
                
              }
              </Row>
            </Card>
            )
            
          })
        }
      </div>
    </>
  )
}

export default App;



