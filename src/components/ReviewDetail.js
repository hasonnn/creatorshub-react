import React from 'react'

const ReviewDetails = ({ id, body, created_at, deleteReview }) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5>{body}</h5> <br/>
                <p>{created_at}</p>
                <button class="btn btn-danger" onClick={() => deleteReview(id)}>Delete</button>
            </div>
        </div>
    )
}

export default ReviewDetails