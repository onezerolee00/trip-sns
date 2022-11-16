import SpotInfo from "./SpotInfo";

function SpotInfoListView({ spotList = [] }) {
    return (
        <div>
            {spotList.map(spot => (<SpotInfo key={spot.id} info={spot} />))}
        </div>
    );
}

export default SpotInfoListView