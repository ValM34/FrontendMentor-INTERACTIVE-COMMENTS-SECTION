import { useState } from 'react'
import './App.scss'
import data from '../data.json';
import Post from './components/Post';

function App() {
  const userId = "juliusomo";
  const user = data.comments[1].replies[1].user;

  return (
    <div className="main-content">
      <div className="messages-container">
        {data.comments ? data.comments.map(comment => (
          <Post key={comment.id} comment={comment} />
        )) : ''}
      </div>
      <div className="form-container">
        <form>
          <textarea placeholder="Add a comment..."></textarea>
          <div className="form-options">
            <div className="avatar">
              <img src={user.image.png} />
            </div>
            <button className="btn-send-reply">SEND</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
