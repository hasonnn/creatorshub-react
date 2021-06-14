import React, { Component } from 'react'
import { Course } from '../requests'
import { Link } from 'react-router-dom'

class CourseShowPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            episodes: []
        }
    }

    componentDidMount() {
        Course.show(this.props.match.params.id)
        .then((episodes) => {
          this.setState((state) => {
            return {
              episodes: episodes
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
                            <div className="col col-sm-12 col-md-3">
                                <div className=" mt-4 text-center">
                                    <img
                                        src="/line.png"
                                        width="100"
                                        height="1300"
                                        className="d-inline-block align-top"
                                        alt="hero images"
                                    />
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-9">
                                <div className="pt-4 pl-5 mt-4 ">
                                    <div className="text-center">
                                        <h1>Soon, you too will be a master at the craft!</h1> <br/>
                                        <h3>Episodes</h3> <br/>
                                    </div>
                                    {this.state.episodes.map(({ id, title, url }) => (
                                        <div className="card pt-4 pb-5 mb-5 eps" >
                                            <div className="row no-gutters">
                                                <div className="col-md-6">
                                                    <iframe className="disable" width="100%" height="225px" src={url} title="YouTube video player" 
                                                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                                                    </iframe>
                                                </div>
                                                <div className="col-md-6 pl-4 pt-4">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{title}</h5> <br/>
                                                        <Link className="btn btn-outline-danger" to={`/episodes/${id}`}>Episode Details</Link>    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default CourseShowPage


