import './Card.css'

function Card() {
  return (
    <div className="card">
      <img src="/src/assets/image-qr-code.png" alt="" />
      <div className='title'>
        <p>
          Improve your front-end skills by building projects
        </p>
      </div>
      <div className="message">
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}

export default Card