import React from "react"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        © {new Date().getFullYear()} | Frontend App Version:{" "}
        {`${process.env.REACT_APP_VERSION}`}
      </footer>
    </>
  )
}

export default Footer
