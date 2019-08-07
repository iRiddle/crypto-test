import React from "react";
import { Range, getTrackBackground } from "react-range";
const STEP = 1;
const MIN = 0;
const MAX = 10;
const InputRange = ({ values, selectRate }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={selectRate}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%"
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#b8b8b8", "#00957e", "#b8b8b8"],
                  min: MIN,
                  max: MAX
                }),
                alignSelf: "flex-end"
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "12px",
              width: "12px",
              borderRadius: "50%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #ссс"
            }}
          />
        )}
      />

      <output id="output">
        {values[0]} - {values[1]}
      </output>
    </div>
  );
};

export default InputRange;
