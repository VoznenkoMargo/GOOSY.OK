import React from 'react';
import PropTypes from "prop-types";
import { Comment } from 'semantic-ui-react';
import Rating from '@mui/material/Rating';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { useDispatch } from 'react-redux';
import { putUserComments } from '../../store/actionCreators/commentItemsCreator';


function UserComment({firstName, date, content, rating, commentsId, thumbUpUser, thumbDownUser }) {
  const datePublic = new Date(date).toLocaleString(); 
  const dispatch = useDispatch();

  return (
    <div style={{display:"flex", padding: "20px 0px 20px 20px", backgroundColor: "#4e4948", borderRadius: "10px", marginBottom: "10px", maxHeight:"600px"}}>
    <Comment.Avatar as='a' src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
    <Comment.Content style={{paddingLeft: "10px"}} >
      <Comment.Author style={{fontWeight:"bold", color: "rgb(241, 241, 241)"}}>{firstName}</Comment.Author>
      <Comment.Metadata style={{fontSize: "12px", color: "rgb(184, 184, 184)"}}>
        <div>{datePublic}</div>
      </Comment.Metadata>
      <Rating
        name="simple-controlled"
        value={Number(rating)}
        readOnly
        size="small"/>
      <Comment.Text style={{color: "rgb(184, 184, 184)", lineHeight: "150%", padding: "10px 10px 0px 0px"}}>
        <p style={{width:"410px"}}>
          {content}
        </p>
      </Comment.Text>
        <div style={{textAlign:"end", color: "rgb(184, 184, 184)", display:"flex", gap:"5px", justifyContent:"flex-end", marginRight:"20px"}}>
        <ThumbUpOffAltOutlinedIcon onClick={()=>{dispatch(putUserComments(commentsId, {thumbUp: thumbUpUser + 1}))}} fontSize="small" style={{cursor:"pointer"}} /> 
        {thumbUpUser > 0 ? <span>{thumbUpUser}</span> : null} |
        <ThumbDownOutlinedIcon onClick={()=>{dispatch(putUserComments(commentsId, {thumbDown: thumbDownUser + 1}))}} fontSize="small" style={{cursor:"pointer"}} />
        {thumbDownUser > 0 ? <span>{thumbDownUser}</span> : null}
        </div>
    </Comment.Content>
   </div>
  )
}

UserComment.propTypes = {
  firstName: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  commentsId: PropTypes.string.isRequired, 
  thumbUpUser:PropTypes.number.isRequired, 
  thumbDownUser:PropTypes.number.isRequired,
}

export default UserComment;