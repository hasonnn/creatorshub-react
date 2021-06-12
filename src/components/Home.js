import React, { Component } from 'react'
import HeroImage from './HeroImage'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            course_modules: []
        }
    }


    render() {
        return (
            <div>
                <HeroImage/>
            </div>
        )
    }
}

export default Home