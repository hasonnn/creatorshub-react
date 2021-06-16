import React from 'react'

const ReviewDetails = ({ id, body, user, created_at, deleteReview, currentUser }) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5>{body}</h5> <br/>
                <p>Created at {created_at.toLocaleString()}</p>
                <p>By {user? user.first_name + " " + user.last_name : null}</p>
                {/* { currentUser? ( */}
                <button className="btn btn-danger" onClick={() => deleteReview(id)}>Delete</button>
                {/* ) : "" }  */}
            </div>
        </div>
    )
}

export default ReviewDetails

