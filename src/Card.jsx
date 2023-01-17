// import card_photo from './assets/katie-zaferes.png'
// import star_icon from './assets/star.png'

export default function Card(props) {

  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  }else if (props.location === "Online") {
    badgeText = "ONLINE"
  }

  return (

    <section className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../assets/${props.img}`} alt="card_photo" className="card--photo" />
      <div className="card--stats">
        <img src="../assets/star.png" alt="star_icon" className="card--star" />
        <span className="stats--rating">({props.rating})</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">({props.location})</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
    </section>
  )
}