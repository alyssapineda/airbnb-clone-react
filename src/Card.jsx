import card_photo from './assets/katie-zaferes.png'
import star_icon from './assets/star.png'

export default function Card() {
  return (
    <section className="card">
      <img src={card_photo} alt="card_photo" className="card--photo" />
      <div className="card--stats">
        <img src={star_icon} alt="star_icon" className="card--star" />
        <span className="stats--rating">5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p className="card--title">Life lessons with Katie Zaferes</p>
      <p className="card--price"><span className="bold">From $136</span> / person</p>
    </section>
  )
}