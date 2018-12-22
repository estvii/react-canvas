import React, { Component } from 'react';

class ThicknessSelector extends Component {

    onInputChange = (event) => {
        const {onThicknessSelectorChange} = this.props
        onThicknessSelectorChange(event.target.value);
    }

    // componentDidUpdate() {
    //     console.log('thickness updated');
    // }

    render(){
        const { thickness } = this.props;

        return(
            <div>
                <input 
                    type="range"
                    min="0" 
                    max="100"
                    value={thickness} 
                    onChange={this.onInputChange}/>
            </div>
        );
    }
}

export default ThicknessSelector;