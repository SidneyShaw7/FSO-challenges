const Notification = ({ message, style }) => {
  if (message === null) {
    return null;
  }

  return <div className={style ? "success" : "error"}>{message}</div>;
};

export default Notification;
