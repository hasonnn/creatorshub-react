import React, { Component } from 'react'
import { Episode, Review } from '../requests' 
import ReviewForm from './ReviewForm'
import ReviewDetails from './ReviewDetail'

class EpisodeShowPage extends Component {
    constructor(props) {
        super(props)
        this.state= {
            episode: {}
        }
        this.deleteReview = this.deleteReview.bind(this)
    }

    componentDidMount() {
        Episode.show(this.props.match.params.id)
        .then((episode) => {
            this.setState((state) => {
                return {
                    episode: episode,
                    ...state.episode.reviews
                }
            })
        })
    } 

    deleteReview(id) {
        Review.destroy(id)
        .then(res => {
            console.log(res)
            if (res["remove"]) {
                this.setState((state) => {
                    return {
                        episode: {
                            ...state.episode,
                            reviews: state.episode.reviews.filter((r) => {
                                return r.id !== id
                            })
                        }
                    }
                })
            }
        })
    }  

    render() {
        const { id, title, description, url, reviews } = this.state.episode
        return (
            <div>
                <div className="orange-bar"></div>
                <section className="course-section">
                    <div className="container">
                        <div className="row">
                            <div className="col col-sm-12 col-md-8">
                                <div className="pt-5 mt-4 pr-4">
                                    <div>
                                        <h1>{title}</h1>
                                        <div className="eps-video">
                                            <iframe width="100%" height="480" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-4">
                                <div className="pt-4 mt-4">
                                    <ReviewForm id={id} history={this.props.history}/>
                                    <hr/> <br/>
                                    <div className="row review-container">
                                        <div className="card">
                                            <div className="card-header">
                                                Reviews:
                                            </div>
                                            {reviews? reviews.map((r, i) => {
                                                return <ReviewDetails 
                                                key = {i}
                                                id = {r.id}
                                                body = {r.body}
                                                user = {r.user}
                                                created_at = {r.created_at.toLocaleString()}
                                                deleteReview = {this.deleteReview}
                                                currentUser = {this.currentUser}
                                                />
                                            }) : ""}
                                        </div>
                                    </div>
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

export default EpisodeShowPage