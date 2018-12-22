import React, { Component } from 'react';

class CanvasTitle extends Component {
    onInputChange = (event) => {
        const { onCanvasTitleChange } = this.props;
        onCanvasTitleChange(event.target.value)
    }

    render() {
        const { title } = this.props
        return(
            <div>
                <input 
                    type="text" 
                    value={title}
                    onChange={this.onInputChange}
                />
            </div>


        );
    }
}

CanvasTitle.defaultProps = {
    title: "Welcome to drawing board"
}

export default CanvasTitle;