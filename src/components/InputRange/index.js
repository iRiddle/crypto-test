import React from "react";
import { Range, getTrackBackground } from "react-range";
const STEP = 1;
const MIN = 0;
const MAX = 10;
class SuperSimple extends React.Component {
  state = { values: [0, 10] };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={values => {
            this.setState({ values });
          }}
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
                    values: this.state.values,
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
          {this.state.values[0]} - {this.state.values[1]}
        </output>
      </div>
    );
  }
}

export default SuperSimple;
