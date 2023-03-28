import React from 'react'
import { useState } from 'react';
import Answering from './Answering';
import ModalDelete from './ModalDelete';

export default function PostReply({ reply, userId, user }) {

  const [answering, setAnswering] = useState(false);
  const response = () => {
    setAnswering(true);
  }

  const [editing, setEditing] = useState(false);
  const edit = () => {
    setEditing(true);
  }

  const [deleting, setDeleting] = useState(false);
  const throwModalDeletion = () => {
    setDeleting(true);
  }

  return (
    <>
      <div key={reply.id} className="message-container">
        <div className="message-subcontainer">
          <div className="message-infos">
            <div className="avatar">
              <img src={reply.user.image.png} />
            </div>
            <div className="username">{reply.user.username}</div>
            {reply.user.username === userId ? (
              <div className="message-you">you</div>
            ) : ""}
            <div className="created-at">{reply.createdAt}</div>
          </div>
          {editing ? (
            <textarea>{reply.content}</textarea>
          ) : (
            <div className="content">{reply.content}</div>
          )}
        </div>
        <div className="message-options">
          <div className="message-vote">
            <button>+</button>
            <input type="number" defaultValue={reply.score} />
            <button>-</button>
          </div>
        </div>
        <div className="message-actions">
          {reply.user.username === userId ? (
            <div className="message-handle">
              {editing ? (
                <button className="btn-edit-send">SEND</button>
              ) : (
                <>
                  <button onClick={throwModalDeletion} className="btn-delete">Delete</button>
                  <button onClick={edit} className="btn-edit">Edit</button>
                </>
              )}
            </div>
          ) : (
            <button  onClick={response} className="message-reply">
              Reply
            </button>
          )}
        </div>
      </div>
      {answering ? (
        <Answering />
      ) : ""}
      {deleting ? (
        <ModalDelete />
      ) : ""}
    </>
  )
}
