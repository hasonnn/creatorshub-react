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
      <div>
        <CourseNewForm createCourse={this.createCourse} errors={this.state.errors} />
      </div>
    )
  }
}

export default CourseNewPage;

