import React from 'react'
import data from '../../data.json';

export default function Answering() {

  const user = data.comments[1].replies[1].user;

  return (
    <div className="form-container">
      <form>
        <textarea placeholder="Your response..."></textarea>
        <div className="form-options">
          <div className="avatar">
            <img src={user.image.png} />
          </div>
          <button className="btn-send-reply">SEND</button>
        </div>
      </form>
    </div>
  )
}
