import React, { useState } from "react"
import { HeartOutlined, HeartFilled } from "@ant-design/icons"
import "./Article.css"

function Like() {
  const [isLiked, setIsLiked] = useState(false)

  const liked = () => {
    setIsLiked(!isLiked)
    console.log(isLiked)
  }
  return (
    <div>{isLiked ? <HeartFilled onClick={liked} id="heart" /> : <HeartOutlined onClick={liked} id="heart" />}</div>
  )
}

function Article({ article }) {
  return (
    <section className="article-container">
      <div id="data-container">
        <p id="data">{article.date}</p>
        <Like />
        {/* <img onClick={liked} src={heartIcon} alt="heart-icon" /> */}
      </div>
      <h2 id="title">{article.title}</h2>
      <p id="description">{article.description}</p>
    </section>
  )
}

export default Article
