import React from 'react'

export default function ModalDelete() {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <strong>Delete comment</strong>
        <p className="modal-warning-text">
          Are you sure you want to delete this comment? This will remove the comment and can't be undone.
        </p>
        <div className="modal-container-btns">
          <button>NO, CANCEL</button>
          <button>YES, DELETE</button>
        </div>
      </div>
    </div>
  )
}
