/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-no-bind */
import React from "react";
import PropTypes from "prop-types";
import { Comment } from "semantic-ui-react";
import Rating from "@mui/material/Rating";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useDispatch } from "react-redux";
import { putUserComments } from "../../store/actionCreators/commentItemsCreator";
import styles from "./UserComment.module.scss";
import { getFromLS } from "../../utils/localStorage";

function UserComment({
  firstName,
  date,
  content,
  rating,
  commentsId,
  thumbUpUser,
  thumbDownUser,
  thumbUpClick,
  thumbDownClick,
  token,
}) {
  const datePublic = new Date(date).toLocaleString();
  const dispatch = useDispatch();

  function thumbUpClickFunc() {
    if (!token.includes(getFromLS("authToken"))) {
      dispatch(
        putUserComments(commentsId, {
          thumbUp: thumbUpUser + 1,
          thumbUpClick: true,
          token: [...token, getFromLS("authToken")],
        })
      );
    }
  }

  function thumbDownClickFunc() {
    if (
      token.includes(getFromLS("authToken")) ||
      thumbDownClick ||
      thumbUpClick
    ) {
      return;
    }
    if (!token.includes(getFromLS("authToken"))) {
      dispatch(
        putUserComments(commentsId, {
          thumbDown: thumbDownUser + 1,
          thumbDownClick: true,
          token: [...token, getFromLS("authToken")],
        })
      );
    }
  }

  return (
    <div
      style={{
        display: "flex",
        padding: "20px 0px 20px 20px",
        backgroundColor: "#4e4948",
        borderRadius: "10px",
        marginBottom: "10px",
        maxHeight: "600px",
      }}
    >
      <Comment.Avatar
        as="a"
        src="https://cdn-icons-png.flaticon.com/512/4026/4026811.png"
        className={styles.avatar}
      />
      <Comment.Content style={{ paddingLeft: "10px", width: "100%" }}>
        <Comment.Author
          style={{ fontWeight: "bold", color: "rgb(241, 241, 241)" }}
        >
          {firstName}
        </Comment.Author>
        <Comment.Metadata
          style={{ fontSize: "12px", color: "rgb(184, 184, 184)" }}
        >
          <div>{datePublic}</div>
        </Comment.Metadata>
        <Rating
          name="simple-controlled"
          value={Number(rating)}
          readOnly
          size="small"
        />
        <Comment.Text
          style={{
            color: "rgb(184, 184, 184)",
            lineHeight: "150%",
            padding: "10px 10px 0px 0px",
          }}
        >
          <p style={{ maxWidth: "410px" }}>{content}</p>
        </Comment.Text>
        <div
          style={{
            textAlign: "end",
            color: "rgb(184, 184, 184)",
            display: "flex",
            gap: "5px",
            justifyContent: "flex-end",
            marginRight: "20px",
          }}
        >
          <ThumbUpOffAltOutlinedIcon
            onClick={thumbUpClickFunc}
            fontSize="small"
            style={{ cursor: "pointer" }}
          />
          {thumbUpUser > 0 ? <span>{thumbUpUser}</span> : null} |
          <ThumbDownOutlinedIcon
            onClick={thumbDownClickFunc}
            fontSize="small"
            style={{ cursor: "pointer" }}
          />
          {thumbDownUser > 0 ? <span>{thumbDownUser}</span> : null}
        </div>
      </Comment.Content>
    </div>
  );
}

UserComment.propTypes = {
  firstName: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  commentsId: PropTypes.string.isRequired,
  thumbUpUser: PropTypes.number.isRequired,
  thumbDownUser: PropTypes.number.isRequired,
  thumbUpClick: PropTypes.bool,
  thumbDownClick: PropTypes.bool,
  token: PropTypes.array,
};

UserComment.defaultProps = {
  thumbUpClick: false,
  thumbDownClick: false,
  token: [],
};

export default React.memo(UserComment);
