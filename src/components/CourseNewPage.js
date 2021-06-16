import React, {Component} from 'react';
import CourseNewForm from './CourseNewForm';
import { Course } from '../requests';

class CourseNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
    this.createCourse = this.createCourse.bind(this);
  }

  createCourse(params) {
    Course.create(params)
      .then((course) => {
        if (course.errors) {
          this.setState({ errors: course.errors });
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
                    <CourseNewForm createCourse={this.createCourse} errors={this.state.errors} />
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
                      <h5>What are the criteria to be kept in mind while building a course?</h5> <br/>
                      <ul>
                        <li>Consider timing and logistics.</li>
                        <li>Recognize who your students are.</li>
                        <li>Identify the situational constraints.</li>
                        <li>Articulate your learning objectives.</li>
                        <li>Identify potential assessments.</li>
                        <li>Identify appropriate instructional strategies.</li>
                        <li>Plan your course content.</li>
                      </ul>
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

export default CourseNewPage;

