import React, { useState } from 'react'
import "./Header.css"
import {ImCross} from "react-icons/im"
import ad1 from "../image/ad1.jpg";

const Add = () => {
    const [image, setImage] = useState(true);
  return (
    <div>
       <div className="ad_img">
        <ImCross
          className={image ? "add_cros" : "del"}
          onClick={(e) => setImage(!image)}
        />
        {image && <img src={ad1} alt="addone" />}
      </div>
    </div>
  )
}

export default Add
