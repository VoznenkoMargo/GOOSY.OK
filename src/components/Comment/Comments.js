import React, { useState } from 'react'
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Comment, Form } from 'semantic-ui-react'
import { addUserComment, deleteOneUserComments } from '../../store/actionCreators/commentItemsCreator';
import {getAllUsersCommentOfProduct, getAllUsersComments} from "../../store/actionCreators/commentItemsCreator";
import UserComment from '../UserComment/UserComment';
import styles from './Comments.module.scss';


function Comments(props) {
    const {id, setFlag, flag} = props;
const dispatch = useDispatch();
const {comments} = useSelector(store => store.comment);
const [text, setText] = useState("");

// Очистка коментов
// function del() {
//   comments.forEach(elem => {
//     dispatch(deleteOneUserComments(elem._id))
//   })
// }
// del()

  function handleSubmit(event) {
    event.preventDefault();
    setText("");
  }

const commentsFilter = comments.filter(elem => elem.product._id === id);

  return (
    <Comment.Group style={{paddingTop: "20px"}}>
    <Comment style={{padding: '10px 0px 10px 0px', maxWidth: "500px"}}>
  {commentsFilter.length > 0 ? commentsFilter.map(elem => <UserComment key={elem._id} firstName={elem.customer.firstName} content={elem.content} date={elem.datePublic} avatar={elem.customer.avatarUrl} /> ) : <p style={{fontSize:"18px", color: "rgb(241, 241, 241)" , padding: "20px 0px 20px 20px", backgroundColor: "#4e4948", borderRadius: "10px"}}>No comments</p> } 
    </Comment>
    <Form onSubmit={handleSubmit}>
      <Form.TextArea className={styles.textarea_styling} style={{ minWidth: "500px", minHeight: "200px", borderRadius: "5px", padding: '10px 10px 10px 10px', fontSize: "18px", resize: "none" }} placeholder='Tell us more' onInput={(event)=>setText(event.target.value)} value={text} />
      <Button disabled={text.length<4} style={{color:"#FFFFFF", background: "linear-gradient(114.93deg, #618967 5.11%, #72a479 94%)", padding: '10px 10px 10px 10px', marginTop: "10px", border: "none", borderRadius:"5px", cursor: "pointer", fontSize: "18px"}} onClick={()=>{dispatch(addUserComment({product: `${id}`, content: `${text}`, datePublic: Date.now()})); dispatch(getAllUsersComments()); setFlag(!flag)}} content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
  )
}

Comments.propTypes = {
    id: PropTypes.string,
    flag: PropTypes.bool.isRequired,
    setFlag: PropTypes.func.isRequired,
}

export default Comments;