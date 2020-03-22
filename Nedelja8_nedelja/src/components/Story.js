import React, { useState, useEffect } from 'react'
import { getStory, storyUrl } from '../services/hackerNews'
import './story.css'
import { mapTimeString } from './mapTimeString.js'

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(dunja => dunja && setStory(dunja)) // Lazy eval
    }, [])

    return (
        <>
            <div className="card">
                <a href={story.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="title">{story.title}</h3>
                </a>
                <p>Author is : {story.by}</p>
                <p>Published befor : {mapTimeString(story.time)}</p>
            </div>

        </>
    )
}