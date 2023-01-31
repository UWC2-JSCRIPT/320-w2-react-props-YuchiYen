import PropTypes from 'prop-types';
import React from 'react'
import './Blogs.css'
import Description from './Description';
import Title from './Title';
import Author from './Author';
import PostedDate from './PostedDate';
import MinutesToRead from './MinutesToRead';
import HasAudioAvailable from './HasAudioAvailable';

function Blogs({ articleSources, sectionTopic }) {
    return (
        <>
            <label className='sectionTopic'>{sectionTopic}</label>
            <div className='blogs-container'>
                {articleSources.map((data, key) => {

                    return (
                        <div className='container' key={key}>
                            <div className='left-div'>
                                <img src={data.image} />
                            </div>
                            <div className='right-div '>
                                <Title titleName={data.title} />
                                <Description descriptionContent={data.description} />
                                <Author authorInfo={data.author}></Author>
                                <PostedDate date={data.postedDate} />
                                <MinutesToRead minutes={data.minutesToRead} />
                                <HasAudioAvailable hasAudio={data.hasAudioAvailable} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

Blogs.propTypes = {
    articleSources: PropTypes.array.isRequired,
    sectionTopic: PropTypes.string.isRequired
}

export default Blogs;