import React, { Component } from "react"
import PreventiveButton from "./button"

function action(component) {
    console.log(component);	
    setTimeout(function() {
    actionFinished(component)
  }, 2000);
}

function actionFinished(component) {
  console.log("done");
  component.reset();
}

export default class App extends Component {
  render() {
    return (
      <PreventiveButton action={action} label="Submit" />	
    ) 
  }
}
