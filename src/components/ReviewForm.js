import React, { useState } from 'react';
import { Review } from '../requests';

const ReviewForm = (props)=>{
    const {id} = props
    const [ body, setBody ] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const params = {
            body: formData.get('body'),
        }
        Review.create(id, params)
        .then(() => { 
        })
    }

    function refreshPage() {
        window.location.reload(false);
    } 

    return(
        <div className="form-group">
            <form onSubmit={event=>handleSubmit(event)}>
                <h4>Leave a Review</h4>
                <textarea class="form-control" id="body" rows="3" name='body' value={body} onChange={e=>setBody(e.target.value)}></textarea> <br/>
                <input className="btn btn-danger" type='submit' value='Submit' onClick={refreshPage}/>
            </form> 
        </div>
    )
}
export default ReviewForm;


