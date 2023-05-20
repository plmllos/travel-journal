export default function Card(props) {
    return (
        <section>
            <img src={props.item.imageUrl} alt="destination-picture"/>
            <div className="article">
            <h3> 📍 {props.item.location} <a href={props.item.googleMapsUrl} target="_blank"> View on Google Maps </a> </h3>
            <h2> {props.item.title} </h2>
            <div className="dates">
                <span> {props.item.startDate} - </span>
                <span> {props.item.endDate} </span>
            </div>
            <p> {props.item.description} </p>
            </div>
        </section>
    )
}
