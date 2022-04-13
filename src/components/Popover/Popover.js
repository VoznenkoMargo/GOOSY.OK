import React from "react";
import PropTypes from "prop-types";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

function PopoverHeart({ open, anchorEl, handlePopoverClose, popText }) {
  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
        marginLeft: "5px",
        opacity: "0.6",
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
      disableScrollLock
    >
      <Typography sx={{ p: 0.5, fontSize: "12px" }}>{popText}</Typography>
    </Popover>
  );
}

PopoverHeart.propTypes = {
  open: PropTypes.bool,
  anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.elementType]),
  handlePopoverClose: PropTypes.func.isRequired,
  popText: PropTypes.string.isRequired,
};

PopoverHeart.defaultProps = {
  open: null,
  anchorEl: null,
};

export default React.memo(PopoverHeart);
