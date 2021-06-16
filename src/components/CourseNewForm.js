import React from 'react'

const CourseNewForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const params = {
            title: formData.get('title'),
            description: formData.get('description')
        }
        props.createCourse(params)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label htmlFor="title">Course Title</label>
                <input className="form-control" name="title" id="title"/>
            </div>
            <div class="form-group">
            <label htmlFor="description">Course Description</label>
            <textarea className="form-control" name="description" id="description"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default CourseNewForm;
