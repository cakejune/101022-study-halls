import React from 'react'

function ArticleList({ prettyKitties, colour }) {
    
    console.log(prettyKitties);

    const articleStyle = { 
        colour,
        backgroundColor: "black"
    }

    const articleComponents = prettyKitties.map( article => (
        <p key={article.id}>
            <span style={articleStyle}>Title: {article.title}</span>
        </p> 
        ))
    
    return (
        <>
            { articleComponents }
        </>
    )

}

export default ArticleList