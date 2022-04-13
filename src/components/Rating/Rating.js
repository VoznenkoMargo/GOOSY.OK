import React from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function UserRating({ rank, setRank }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        maxWidth: "500px",
        paddingBottom: "10px",
      }}
    >
      <Typography component="legend" sx={{ color: "rgb(241, 241, 241)" }}>
        Set your rating
      </Typography>
      <Rating
        sx={{ textAlign: "end" }}
        name="simple-controlled"
        value={rank}
        defaultValue={5}
        onChange={(event, newValue) => {
          setRank(newValue);
        }}
      />
    </div>
  );
}

UserRating.propTypes = {
  rank: PropTypes.number,
  setRank: PropTypes.func.isRequired,
};

UserRating.defaultProps = {
  rank: null,
};

export default React.memo(UserRating);
