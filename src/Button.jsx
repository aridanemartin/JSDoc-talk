import PropTypes from "prop-types";

/**
 * Button component that supports both LikeButton and WishListButton properties.
 *
 * @function
 * @memberof Buttons
 * @param {Buttons.LikeButton|Buttons.WishListButton} props - Props may vary based on the button type.
 * @returns {React.ReactElement} The rendered button.
 */
const Button = (props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLiked: PropTypes.bool, // Optional, specific to LikeButton
  onLike: PropTypes.func,  // Optional, specific to LikeButton
  isWished: PropTypes.bool // Optional, specific to WishListButton
};

export default Button;