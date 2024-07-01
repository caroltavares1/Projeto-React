import React, { useState, useEffect }  from "react"
import "./ArticlesList.css"
import Article from "../article/Article";
import articlesData from "./Articles.json"

function ArticlesList() {
    /* articles: variavel que vai armazenar o json
        setArticles: funcao que vai setar a variavel
        useState armazena o estado inicial da variavel que
       no caso e uma lista vazia */
    const [articles, setArticles] = useState([])

    /* useEffect funciona como se fosse o ngOninit em angular */
    useEffect(() => {
        setArticles(articlesData.articles)
    }, [])
    return (
        <div id="articles-list">
            {articles.map((article) => (
                <Article key={article.id} article={article}/>

            ))}

        </div>
    );
}

export default ArticlesList;
