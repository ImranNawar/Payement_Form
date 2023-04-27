import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const Tweet = (props) => {
  // const [counter, setCounter] = useState(0)

  // const increment = () => {
  //   setCounter(counter + 1)
  // }
  // const decrement = () => {
  //   setCounter(counter - 1)
  // }


  const text = props.text
  const date = props.date
  const author = props.author
  return (
    <div>
      <Card style={{ width: '50rem', margin: 'auto', marginBottom: '30px' }}>
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Tweet