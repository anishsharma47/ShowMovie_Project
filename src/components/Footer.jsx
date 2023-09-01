import React from 'react'
import "../styles/footer.scss"


const Footer = () => {
  return (
    <div className="footer">
    <div className="footer_left">
       <div className="devloper_detail">
        <div className='heading'>Devloper :</div><div>Anish</div>
       </div>

    </div>
    <div className="footer_right">
        <div className='heading'>follow me on</div>
        <div className="follow_detail">
          <a href="https://www.instagram.com/mr___jerry___47/" target='_blank'>   <i className="fa-brands fa-instagram"></i></a>
          <a href="">    <i className="fa-brands fa-linkedin-in"></i></a>
        </div>
    </div>
</div>

  )
}

export default Footer
