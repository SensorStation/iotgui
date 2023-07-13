interface Props {
  children: ReactNode;
}

function Alert({children} : Props) {

  return (
    <>
      <h1>Details</h1>
      <div className="alert alert-primary" role="alert">{children}</div>
    </>
  )
}

export default Alert
