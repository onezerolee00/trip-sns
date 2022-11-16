import { useState } from 'react';

function SpotForm({ onCreate = (v) => console.log(v) }) {
    const [spotName, setSpotName] = useState("")
    const [spotAddress, setSpotAddress] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate({ spotName: spotName, spotAddress: spotAddress })
        setSpotName("")
        setSpotAddress("")
    }

    return (
        <form onSubmit={handleSubmit} style={{
            padding: '8px',
            margin: '8px'
        }}>
            <input type="text" value={spotName} name="spotName" placeholder="여행지 명" onChange={e => setSpotName(e.target.value)} />
            <input type="text" value={spotAddress} name="spotAddress" placeholder="여행지 주소" onChange={e => setSpotAddress(e.target.value)} />
            <button type="submit"> 추가 </button>
        </form>
    );
}

export default SpotForm;