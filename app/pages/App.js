import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getWeather,dominus} from '../actions/lanes';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {lanes,getWeather,weather,num,dominus} = this.props;
        console.log(lanes);
        return (
            <div>
                <button onClick={()=>{getWeather('../../data.json')}}>天气</button>
                <div>{
                        weather.map((item,index)=>{
                            return(<div key={index}>{item.title}</div>)
                })}</div>
                <button onClick={()=>{dominus(num)}}>减1</button>
                <div>{num}</div>
            </div>
        );
    }
}
export default compose(
    connect(state => ({
        lanes: state.lanes,
        weather: state.lanes.weather,
        error: state.lanes.error,
        num:state.lanes.num
    }), {
        getWeather,dominus
    }),
)(App);