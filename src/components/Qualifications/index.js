import "./styles.css";
import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function Qualifications() {

  const ref = useRef();
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,  
  });

  return (
    <div>
      <span className="quali-text">My Skills</span>
      <div className="qualifications-container" {...events} ref={ref}>
        <div className="qualification">
          <div className="content html"></div>
          <h1 className="shortQual">html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1 className="shortQual">css</h1>
        </div>
        <div className="qualification">
          <div className="content deployment"></div>
          <h1 className="longQual">deployment - heroku/netlify</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1 className="shortQual">javascript</h1>
        </div>
        <div className="qualification">
          <div className="content docker"></div>
          <h1 className="shortQual">docker</h1>
        </div>
        {/* <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>bootstrap</h1>
        </div> */}
        <div className="qualification">
          <div className="content python"></div>
          <h1 className="shortQual">python</h1>
        </div>
        <div className="qualification">
          <div className="content sql"></div>
          <h1 className="longQual">sql - postgresql/mongodb</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1 className="shortQual">react</h1>
        </div>
        {/* <div className="qualification">
          <div className="content c-plus-plus"></div>
          <h1>c++</h1>
        </div> */}
        
        {/* <div className="qualification">
          <div className="content c-sharp"></div>
          <h1>c#</h1>
        </div> */}
        
        {/* <div className="qualification">
          <div className="content kotlin"></div>
          <h1>kotlin</h1>
        </div> */}
        
      </div>
    </div>
  );
}

export default Qualifications;
