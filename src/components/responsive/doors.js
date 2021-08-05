

// Images
import gLeft from '../../images/ecGateLeft.png';
import gRight from '../../images/ecGateRight.png';

//Style
import "../../style/doors.css";


function Doors({ image }) {
    return (
        <div className='row center'>
            <div className='image-container'>
                <div
                className='thumbnail'
                ref={image}
                style={{
                    width: "1843",
                    height: "931",
                }}>

                    <div className="wrapper">
                        <div className="gLeftandRight">
                            <div id="left-door" className="lDoor">
                                <img src={gLeft} className="gLeft" alt="leftDoor">
                                </img>
                            </div>
                            <div id="right-door" className="rDoor">
                                <img src={gRight} className="gRight" alt="rightDoor">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doors