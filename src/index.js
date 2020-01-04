import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard"

const App = ()=>{
    return (
    <div className="ui container comments">
        <ApprovalCard>
        <CommentDetail author="sam" timeAgo="Today at 6:00 AM" text="Hello" avatar={faker.image.avatar()}/>
        <ApprovalCard></ApprovalCard>
        <CommentDetail author="alex" timeAgo="Today at 6:00 PM" text="I'm Here" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author="jane" timeAgo="Today at 6:30 PM" text="Nice Blog Post!" avatar={faker.image.avatar()}/>
        </ApprovalCard>
    </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));

