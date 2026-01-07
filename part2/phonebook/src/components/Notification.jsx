const Notification = ({ error, message }) => {
  if (message === null && error === false) {
    return null
  }

  return (
    <div className={error ? 'error' : 'success'}>
      {message}
    </div>
  )
}

export default Notification