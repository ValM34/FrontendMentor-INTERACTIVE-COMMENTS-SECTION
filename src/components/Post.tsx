import React from 'react'
import PostReply from './PostReply';
import Answering from './Answering';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../contextAPI/DataContext';
import data from '../../data.json';

export default function Post({ comment }) {
  const userId = "juliusomo";
  const user = data.comments[1].replies[1].user;

  const [answering, setAnswering] = useState(false);
  const response = () => {
    setAnswering(true);
  }

  const [editing, setEditing] = useState(false);
  const edit = () => {
    setEditing(true);
  }

  const test = useContext(DataContext);

  return (
    <div className="message-and-replies-container">
      <div className="message-container">
        <div className="message-subcontainer">
          <div className="message-infos">
            <div className="avatar">
              <img src={comment.user.image.png} />
            </div>
            <div className="username">{comment.user.username}</div>
            {comment.user.username === userId ? (
              <div className="message-you">you</div>
            ) : ""}
            <div className="created-at">{comment.createdAt}</div>
          </div>
          {editing ? (
            <textarea>{comment.content}</textarea>
          ) : (
            <div className="content">{comment.content}</div>
          )}
        </div>
        <div className="message-options">
          <div className="message-vote">
            <button>+</button>
            <input type="number" defaultValue={comment.score} />
            <button>-</button>
          </div>
        </div>
        <div className="message-actions">
          {comment.user.username === userId ? (
            <div className="message-handle">
              {editing ? (
                <button className="btn-edit-send">SEND</button>
              ) : (
                <>
                  <button className="btn-delete"><FontAwesomeIcon icon={faTrash} /> Delete</button>
                  <button onClick={edit} className="btn-edit"><FontAwesomeIcon icon={faPen} /> Edit</button>
                </>
              )}
            </div>
          ) : (
            <button onClick={response} className="message-reply">
              <FontAwesomeIcon icon={faReply} /> Reply
            </button>
          )}
        </div>
      </div>
      {answering ? (
        <Answering />
      ) : ""}
      <div className="replies-container">
        {comment.replies ? comment.replies.map(reply => (
          <PostReply key={reply.id} reply={reply} userId={userId} user={user} />
        )) : ""}
      </div>
    </div>
  )
}
