
export default function Card(props) {
  console.log(props)
  let badgeText
  if (props.cards.openSpots === 0) {
    badgeText = "SOLD OUT"
  }else if (props.cards.location === "Online") {
    badgeText = "ONLINE"
  }

  return (

    <section className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../assets/${props.cards.coverImg}`} alt="card_photo" className="card--photo" />
      <div className="card--stats">
        <img src="../assets/star.png" alt="star_icon" className="card--star" />
        <span className="stats--rating">({props.cards.stats.rating})</span>
        <span className="gray">({props.cards.stats.reviewCount}) • </span>
        <span className="gray">({props.cards.location})</span>
      </div>
      <p className="card--title">{props.cards.title}</p>
      <p className="card--price"><span className="bold">From ${props.cards.price}</span> / person</p>
    </section>
  )
}