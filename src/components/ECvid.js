import React from "react";

import "./Login/Login.css";
import ECdoors from "../ECdoorsBlur.mp4";

  function ECvid() {

    return (
        <div>
            <div className="ECdoors">
                <video  
                        id='video' 
                        autoPlay={false}
                        muted
                        src={ECdoors} 
                        type="video/mp4"
                        style={{ width: "100%" }} />
            </div>
        </div>
    );
  }

export default ECvid; 