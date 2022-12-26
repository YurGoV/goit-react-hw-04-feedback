import { Notification } from './Notification.styled';
import PropTypes from 'prop-types';

export const NoFeedbackNotification = ({ message }) => (
  <Notification>{message}</Notification>
);

NoFeedbackNotification.propTypes = {
  message: PropTypes.string,
};
