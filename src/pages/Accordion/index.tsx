import { useState } from 'react'
import { data } from './constants'

type Chapter = {
  name: string
  titles: Title[]
}

type Title = {
  name: string
  articles: Article[]
}

type Article = {
  name: string
  paragraphs: {
    level1: string
    level2: string
    level3: string
  }[]
}

export const Accordion = () => {
  return (
    <>
      {data.map((chapter) => {
        return (
          <div key={chapter.name}>
            <Chapter chapter={chapter} />
          </div>
        )
      })}
    </>
  )
}

const Chapter = ({ chapter }: { chapter: Chapter }) => {
  const [showChapter, setShowChapter] = useState(true)

  return (
    <div>
      <h1 style={{ cursor: 'pointer' }} onClick={() => setShowChapter(!showChapter)}>
        {chapter.name}
      </h1>
      <div>
        {showChapter &&
          chapter.titles.map((title) => {
            return <Title key={title.name} title={title} />
          })}
      </div>
    </div>
  )
}

const Title = ({ title }: { title: Title }) => {
  const [showTitle, setShowTitle] = useState(true)

  return (
    <div>
      <h2
        style={{ cursor: 'pointer', paddingLeft: '20px' }}
        onClick={() => setShowTitle(!showTitle)}
      >
        {title.name}
      </h2>
      {showTitle &&
        title.articles.map((article) => {
          return <Article key={article.name} article={article} />
        })}
    </div>
  )
}

const Article = ({ article }: { article: Article }) => {
  const [showArticle, setShowArticle] = useState(true)

  return (
    <div>
      <h3
        style={{
          paddingLeft: '40px',
          cursor: 'pointer'
        }}
        onClick={() => setShowArticle(!showArticle)}
      >
        {article.name}
      </h3>
      {showArticle && (
        <div
          style={{
            paddingLeft: '60px'
          }}
        >
          {article.paragraphs.map((pa, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '20px',
                textAlign: 'left'
              }}
            >
              <h4
                style={{
                  padding: '20px'
                }}
              >
                {index + 1}
              </h4>
              <div>
                <span key={index}>{pa.level1}</span>
              </div>
              <div>
                <span>{pa.level2}</span>
              </div>
              <div>
                <span>{pa.level3}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
