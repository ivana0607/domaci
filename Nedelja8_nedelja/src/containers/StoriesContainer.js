import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/hackerNews';
import { Story } from '../components/Story';



export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([])
    const [count, setCount] = useState(5)


    useEffect(() => {
        getStoryIds().then(dunja => setStoryIds(dunja))
    }, [])

    // useEffect waits ...




    return (
        <>
            <header><h1 style={{ color: "white", textAlign: "center" }}>Welcome to Hacker News</h1></header>
            {storyIds.slice(0, count).map(storyId => <Story storyId={storyId} key={storyId} />)}
            <br></br>
            <button style={{
                padding: 12,
                color: "whitesmoke",
                backgroundColor: "#333333",
                textAlign: "center",
                cursor: "pointer",
                fontSize: 18,
                position: "absolute",
                left: "47%"

            }} onClick={() => setCount(count + 10)}>Jos vesti</button>
        </>
    )
}