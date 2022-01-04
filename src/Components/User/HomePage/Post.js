import React from 'react'

export default function Post() {
    return (
        <div className="post">
            <div className="container">
                <div className="title">
                    <h4>Recent Posts</h4>
                    <p>Check out the best offers to stay in trend</p>
                </div>
                <div className="post__list">
                    <div className="post__item">
                        <div className="img__post">
                            <img src="./images/post3.jpg" alt title="Recent post" />
                            <a href="#" title="Click For Read More" className="read"><i className="fas fa-link" /></a>
                        </div>
                        <div className="content">
                            <div className="header__post">
                                <div className="time">
                                    <span className="date">05</span>
                                    <span className="month">NOV</span>
                                </div>
                                <div className="title__post">
                                    <a href="#">Claritas est etiam processus dynamicus. </a>
                                </div>
                            </div>
                            <p className="desc">
                                Uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                structures done...
                            </p>
                            <a href="#" className="read__more">Read more ...</a>
                        </div>
                    </div>
                    <div className="post__item">
                        <div className="img__post">
                            <img src="./images/post1.jpg" alt title="Recent post" />
                            <a href="#" title="Click For Read More" className="read"><i className="fas fa-link" /></a>
                        </div>
                        <div className="content">
                            <div className="header__post">
                                <div className="time">
                                    <span className="date">05</span>
                                    <span className="month">NOV</span>
                                </div>
                                <div className="title__post">
                                    <a href="#">Claritas est etiam processus dynamicus. </a>
                                </div>
                            </div>
                            <p className="desc">
                                Uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                structures done...
                            </p>
                            <a href="#" className="read__more">Read more ...</a>
                        </div>
                    </div>
                    <div className="post__item">
                        <div className="img__post">
                            <img src="./images/post2.jpg" alt title="Recent post" />
                            <a href="#" title="Click For Read More" className="read"><i className="fas fa-link" /></a>
                        </div>
                        <div className="content">
                            <div className="header__post">
                                <div className="time">
                                    <span className="date">05</span>
                                    <span className="month">NOV</span>
                                </div>
                                <div className="title__post">
                                    <a href="#">Claritas est etiam processus dynamicus. </a>
                                </div>
                            </div>
                            <p className="desc">
                                Uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                structures done...
                            </p>
                            <a href="#" className="read__more">Read more ...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
