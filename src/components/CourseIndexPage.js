import React, { Component } from 'react'
import { Course } from '../requests'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


class CourseIndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
        }
    }

    componentDidMount() {
        Course.index()
        .then((courses) => {
          this.setState(() => {
            return {
              courses: courses
            }
          })
        })
    }

    render() {
        return (
            <div>
                <section className="course-page">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="pt-3 pb-3 text-center">
                                <h1 className="course-page">Explore the Various Online Courses</h1> <br/><br/>
                                <h3>Learn from professionals through their shared knowledge, personal experience and industry tips and secrets.</h3>
                            </div> 
                        </div>
                        </div>
                    </div>
                </section>
                <section className="course-section">
                    <div className="container">
                        <div className="row">
                            <div className="col col-sm-12 col-md-6">
                                <div className="pt-5 mt-4">
                                    <div>
                                        <img
                                            src="/course-img.png"
                                            width="575"
                                            height="950"
                                            className="d-inline-block align-top"
                                            alt="course images"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-6 pt-5">
                                <h3>Scroll Through Our Different Courses:</h3>
                                <hr/> <br/>
                                <div className="row course-container">
                                    {this.state.courses.map(({ id, title, description }) => (
                                    <div className="course-episodes">
                                        <Card>
                                            <Card.Header>Course {id} <h4>{title}</h4></Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    {description}
                                                </Card.Text>
                                                <div className="text-center pt-4 pb-4">
                                                    <div className="cta-button">
                                                        <Link style={{ textDecoration: 'none', color: 'red' }} to={`/courses/${id}`}>See Full Course</Link>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    ))} 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="orange-bar"></div>
            </div>
        )
    }
}

export default CourseIndexPage

