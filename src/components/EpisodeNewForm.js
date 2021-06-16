import React from 'react'

const EpisodeNewForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const id = Number(formData.get('id'))
        const params = {
            title: formData.get('title'),
            description: formData.get('description'),
            url: formData.get('url')
        }
        props.createEpisode(id, params)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label htmlFor="id">Course ID</label>
                <input className="form-control" name="id" id="id"/>
            </div>
            <div class="form-group">
                <label htmlFor="title">Episode Title</label>
                <input className="form-control" name="title" id="title"/>
            </div>
            <div class="form-group">
                <label htmlFor="description">Episode Description</label>
                <textarea className="form-control" name="description" id="description"/>
            </div>
            <div class="form-group">
                <label htmlFor="url">Episode URL</label>
                <textarea className="form-control" name="url" id="url"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>                            
    )
}

export default EpisodeNewForm;
