interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({children, onClose} : Props) {

  return (
    <>
      <div className="alert alert-primary alert-dismissible" role="alert">
        {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={onClose} />
      </div>
    </>
  )
}

export default Alert
