import React, {Component} from 'react';
import EpisodeNewForm from './EpisodeNewForm';
import { Episode, Course } from '../requests';

class EpisodeNewPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            errors: [],
            courses: [],
        };
        this.createEpisode = this.createEpisode.bind(this);
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

    createEpisode(id, params) {
        console.log(id, params)
        Episode.create(id, params)
        .then((episode) => {
            if (episode.errors) {
            this.setState({ errors: episode.errors });
            } else {
            this.props.history.push(`/courses`);
            }
        })
    }

    render() {
        return(
        <section className="admin">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <div class="card">
                                <div class="card-body admin-text p-4">
                                    <EpisodeNewForm createEpisode={this.createEpisode} errors={this.state.errors} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pl-5 ">
                            <div className="card">
                                <div className="card-body admin-text">
                                    <div className="text-center">
                                        <h3>Submit A New Course</h3> <br/>
                                    </div>
                                    <div className="p-4">
                                        <div className="row episode-container">
                                            {this.state.courses.map(({ id, title, description }) => (
                                            <div className="course-episodes">
                                                <div class="card">
                                                    <div class="card-body">
                                                        Course {id} <h4>{title}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            ))} 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default EpisodeNewPage;

