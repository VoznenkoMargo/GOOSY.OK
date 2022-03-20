import React from 'react';
import PropTypes from "prop-types";
import { Comment } from 'semantic-ui-react';


function UserComment({firstName, date, content }) {
  const datePublic = new Date(date).toLocaleString(); 
  return (
    <div style={{display:"flex", padding: "20px 0px 20px 20px", backgroundColor: "#4e4948", borderRadius: "10px", marginBottom: "10px", maxHeight:"600px"}}>
    <Comment.Avatar as='a' src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
    <Comment.Content style={{paddingLeft: "10px"}} >
      <Comment.Author style={{fontWeight:"bold", color: "rgb(241, 241, 241)"}}>{firstName}</Comment.Author>
      <Comment.Metadata style={{fontSize: "12px", color: "rgb(184, 184, 184)"}}>
        <div>{datePublic}</div>
      </Comment.Metadata>
      <Comment.Text style={{color: "rgb(184, 184, 184)", lineHeight: "150%", padding: "10px 10px 0px 0px"}}>
        <p>
          {content}
        </p>
      </Comment.Text>
    </Comment.Content>
   </div>
  )
}

UserComment.propTypes = {
  firstName: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
}

export default UserComment;