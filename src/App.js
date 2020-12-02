import React, { Component } from "react";
import Section from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics"
import FeedbackOptions from "./Components/Feedback/FeedbackOptions"
import Notification from "./Components/Notification/Notification"

export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  countTotalFeedback = (totalFeedback) =>{
    return totalFeedback.reduce((a,b) => a + b)
  }
  GetFeedback = (e) => {
    const getStatistics = e.target.name;
    this.setState((state) => ({
      [getStatistics]: state[getStatistics] + 1,
    }));
  };

  render(){
    const {good, neutral, bad} = this.state;
    const stateValues = Object.values(this.state)
    return (
      <div>
        <Section title={"Please leave feedback!"}>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.GetFeedback}></FeedbackOptions>
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback(stateValues) > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback(stateValues)}></Statistics>
          ) : (
            <Notification message={"No feedback given"}></Notification>
          )}
        </Section>
      </div>
    )
  }
}
