import React from 'react'
import Link from 'gatsby-link'

class Counter extends React.Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button
          children="minus"
          onClick={() =>
            this.setState(prevState => ({
              count: prevState.count - 1
            }))
          }
        />
        <button
          children="plus"
          onClick={() =>
            this.setState(prevState => ({
              count: prevState.count + 1
            }))
          }
        />
      </div>
    )
  }
}

export default Counter
