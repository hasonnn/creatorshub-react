import React from 'react'

const HeroImage = () => {
    return (
        <section className="hero-image-page">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <h1 className="hero-image-page">Welcome to CreatorsHub</h1>
                            <p className="hero-image-page">It's never too late to learn!</p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="text-center pl-5">
                            <img
                                src="/hero-img.png"
                                width="800"
                                height="800"
                                className="d-inline-block align-top"
                                alt="hero images"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroImage