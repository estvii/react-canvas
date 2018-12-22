import React, {Component} from 'react';

class ColourSelector extends Component {

    onInputChange = (event) => {
        const {onColourSelectorChange} = this.props;
        onColourSelectorChange(event.target.value);
    }

    // componentDidUpdate() {
    //     console.log('colour did update');
    // }

    render(){
        const { hex } = this.props;
        // console.log(hex);
        return(
            <div>
                <input 
                    type="color" 
                    value={hex} 
                    onChange={this.onInputChange}  
                />
            </div>
        );
    }
}

    //Syntactical sugar for line 22,23,24
    // static defaultProps = {
    //     hex:  "0000FF"    
    // }

//sets a default value for hex
ColourSelector.defaultProps = {
    hex:  "#FF0000"
}

export default ColourSelector;