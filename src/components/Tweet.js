import React from 'react';

class Tweet extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      tweets:""
    }
  }
  componentWillMount()
  {
    this.setState({
      tweets:this.props.newTweets
    })
  }
  render() {
    return (
      <div className="tweet">{this.props.text}</div>
    )
  }
}

export default Tweet;