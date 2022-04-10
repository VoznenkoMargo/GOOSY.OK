/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Button, Comment, Form } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import {
  addUserComment,
  getAllUsersComments,
} from "../../store/actionCreators/commentItemsCreator";
import UserComment from "../UserComment/UserComment";
import styles from "./Comments.module.scss";
import UserRating from "../Rating/Rating";
import Preloader from "../Preloader/Preloader";

function Comments(props) {
  const { id, setFlag, flag } = props;
  const dispatch = useDispatch();
  const { comments } = useSelector((store) => store.comment);
  const [text, setText] = useState("");
  const [comm, setComm] = useState([]);
  const [visibleMore, setvisibleMore] = useState(true);
  const [rank, setRank] = useState(5);
  const { isLoading } = useSelector((store) => store.comment);

  function scrollToComment() {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }

  const scrollToTopUnauth = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    setText("");
  }

  const commentsFilter = comments.filter((elem) => elem.product._id === id);

  function handleShowMoreComments() {
    setComm(commentsFilter);
    setvisibleMore(false);
  }

  const commentsSlice = commentsFilter.reverse().slice(0, 5);

  useEffect(() => {
    if (!visibleMore) {
      setComm(commentsFilter);
      setRank(5);
    } else {
      setComm(commentsSlice);
      setRank(5);
      setvisibleMore(true);
    }
  }, [comments]);

  function addComment(idProduct, textComment) {
    dispatch(
      addUserComment({
        product: `${idProduct}`,
        content: `${textComment}`,
        datePublic: Date.now(),
        rating: `${rank}`,
      })
    );
    dispatch(getAllUsersComments());
    setFlag(!flag);
    setvisibleMore(true);
    if (localStorage.getItem("authToken")) {
      setComm(commentsSlice);
      scrollToComment();
    } else {
      scrollToTopUnauth();
    }
  }

  return (
    <Comment.Group style={{ paddingTop: "20px" }}>
      {isLoading ? (
        <Preloader />
      ) : (
        <Comment style={{ padding: "10px 0px 10px 0px", maxWidth: "500px" }}>
          {commentsFilter.length > 0 ? (
            comm.map((elem) => (
              <UserComment
                key={elem._id}
                commentsId={elem._id}
                firstName={elem.customer.firstName}
                content={elem.content}
                date={elem.datePublic}
                avatar={elem.customer.avatarUrl}
                rating={elem.rating}
                thumbUpUser={elem.thumbUp === undefined ? 0 : elem.thumbUp}
                thumbDownUser={
                  elem.thumbDown === undefined ? 0 : elem.thumbDown
                }
                thumbUpClick={elem.thumbUpClick}
                thumbDownClick={elem.thumbDownClick}
                token={elem.token}
              />
            ))
          ) : (
            <p
              style={{
                fontSize: "18px",
                color: "rgb(241, 241, 241)",
                padding: "20px 0px 20px 20px",
                backgroundColor: "#4e4948",
                borderRadius: "10px",
              }}
            >
              No comments
            </p>
          )}
        </Comment>
      )}
      {commentsFilter.length > 5 && visibleMore ? (
        <Comment.Text
          onClick={handleShowMoreComments}
          style={{
            marginBottom: "20px",
            color: "rgb(241, 241, 241)",
            cursor: "pointer",
            maxWidth: "max-content",
          }}
        >
          See all comments →
        </Comment.Text>
      ) : null}
      <UserRating rank={rank} setRank={setRank} />
      <Form onSubmit={handleSubmit}>
        <Form.TextArea
          className={styles.textarea_styling}
          placeholder="Tell us more"
          onInput={(event) => setText(event.target.value)}
          value={text}
        />
        <Button
          disabled={text.length < 4}
          style={{
            color: "#FFFFFF",
            background:
              "linear-gradient(114.93deg, #618967 5.11%, #72a479 94%)",
            padding: "10px 10px 10px 10px",
            marginTop: "10px",
            border: "none",
            borderRadius: "5px",
            ursor: "pointer",
            fontSize: "18px",
          }}
          onClick={() => {
            addComment(id, text);
          }}
          labelPosition="left"
          primary
        >
          <FontAwesomeIcon icon={faPencilAlt} /> Add Comment{" "}
        </Button>
      </Form>
    </Comment.Group>
  );
}

Comments.propTypes = {
  id: PropTypes.string,
  flag: PropTypes.bool.isRequired,
  setFlag: PropTypes.func.isRequired,
};

Comments.defaultProps = {
  id: "",
};

export default React.memo(Comments);
