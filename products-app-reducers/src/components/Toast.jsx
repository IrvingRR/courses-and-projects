const Toast = ({ title, message, type }) => {

    let typeAlarm = type === 'success' ? 'success' : 'error';

  return (
    <div className={`toast toast-${typeAlarm}`}>
        <strong>{title}</strong>
        <p>{message}</p>
    </div>
  )
}

export default Toast