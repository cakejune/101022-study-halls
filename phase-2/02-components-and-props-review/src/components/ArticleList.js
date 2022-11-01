import React from 'react'

function ArticleList({ articles, colour }) {
    
    console.log("articles: ", articles);

    const articleStyle = { 
        colour,
        backgroundColor: "black"
    }

    const articleComponents = articles.map( article => (
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