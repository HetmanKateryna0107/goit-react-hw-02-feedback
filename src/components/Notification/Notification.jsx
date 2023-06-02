import PropTypes from "prop-types";
export const Notification = ({messege}) => {
  return (
    <span>{messege}</span>
  )
}
Notification.propTypes={
    messege: PropTypes.string,
   
  }
