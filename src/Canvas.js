import React, { Component } from "react";
import ColourSelector from "./ColourSelector";
import ThicknessSelector from './ThicknessSelector';
import CanvasTitle from './CanvasTitle';

class Canvas extends Component {
    state = {
            hex: "#0000FF", 
            width: 400, 
            height: 400,
            coords: null,
            thickness: 0,
            title: "Welcome to drawing board"
        }

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.context = null;
    }

    componentDidUpdate() {
        this.setContext();
    }

    setContext() { //made our pencil for the canvas
        this.context = this.canvasRef.current.getContext("2d");
        this.context.strokeStyle = this.state.hex;
        this.context.lineJoin = "round";
        this.context.lineWidth = this.state.thickness;
    }

    onThicknessSelectorChange = (thickness) => {
        this.setState({ thickness });
    }

    onColourSelectorChange = (hex) => {
        this.setState({ hex });
    }

    onCanvasTitleChange = (title) => {
        this.setState({title})
    }

    onCanvasMouseDown = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        this.setState({ coords: [x, y] });
    }

    onCanvasMouseUp = (event) => {
        this.setState({ coords: null });
    }

    onCanvasMouseMove = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        const { coords, height, width } = this.state;

        if (x > 0 && y> 0 && x < width && y < height) {
            if (coords) {
                this.context.beginPath();
                this.context.moveTo(coords[0], coords[1]);
                this.context.lineTo(x,y);
                this.context.closePath();
                this.context.stroke();
                this.setState({coords: [x,y]});
                // console.log(coords);
                // console.log(coords);
                console.log(this.context);

            }
        } else {
                this.setState({coord: null});
        }
    }

    ClearCanvas = (event) => {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    SaveCanvas = (event) => {
        const dataURL = this.context[0].toDataURL();
        console.log(dataURL);
    }

    componentDidMount(){
        // console.log(this.canvasRef)
    }


    

    render(){
        const { hex, width, height, thickness, title } = this.state;

        return(
            <div>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <ColourSelector hex={hex} onColourSelectorChange={this.onColourSelectorChange}/>
                    <ThicknessSelector thickness={thickness} onThicknessSelectorChange={this.onThicknessSelectorChange}/>
                    <input type="button" onClick={this.ClearCanvas}></input>
                </div>
                <div>
                    <canvas
                        ref={this.canvasRef}
                        width={width}
                        height={height}
                        style={{ border: "6px solid black"}}
                        onMouseMove={this.onCanvasMouseMove}
                        onMouseDown={this.onCanvasMouseDown}
                        onMouseUp={this.onCanvasMouseUp}
                    />
                </div>
                <div>
                    <CanvasTitle title={title} onCanvasTitleChange={this.onCanvasTitleChange}/>
                </div>
                <div>
                    <input type="button" onClick={this.SaveCanvas}/>
                </div>
            </div>
        );
    }
}

export default Canvas;

// 