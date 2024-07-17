import './TravelCell.css'
const TravelCell = (props) => {
    const { listOfSession, onSelectSession } = props
    const clickMe = () => {
        console.log("sd")
    }
    return (
        <div onclick={() => clickMe()}>
        <div>Thời gian khởi hành</div>
            <div style={{
                flexWrap: "wrap",
                display: "flex"
            }}>
            {listOfSession.map((item) => {
                return (
                    <div className="travel-cell">
                        <div>{item.session}</div>
                        <div>{item.time}</div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
export default TravelCell