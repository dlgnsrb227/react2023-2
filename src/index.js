import React from 'react'
import ReactDOM from 'react-dom'

function Hello(props){
  return (
    <div>
      <div>{props.t1}</div>
      <div>{props.t2}</div>
      <div>{props.t3}</div>
      <div>{props.t4}</div>
    </div>
  )
};

const name = {
  name : "hoooong",
  text : "hello",
  author : {
    name : "baby",
    url : "naver.com"
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Hello
    object={name} 
    t1={name.name} 
    t2={name.text} 
    t3={name.author.name}
    t4={name.author.url} 
  />
);