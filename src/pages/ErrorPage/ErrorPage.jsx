import css from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <h1>Error Page Not Found!</h1>
      </div>
    </div>
  )
}

export default ErrorPage