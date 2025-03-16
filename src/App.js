import React, {Component} from 'react';
import './style.css'

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            numero : 0,
            botao: 'GO',
            botao2: 'RESET'
        };
        this.timer = null;
        this.go = this.go.bind(this);
        this.clean = this.clean.bind(this);
    }

    go() {

        let state = this.state;
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'GO';
        } else {

        this.timer = setInterval(()=>{
            let state = this.state;
            state.numero += 0.01;
            this.setState(state);
        },10)
        state.botao = 'PAUSE';
    }
    
    this.setState(state);
    }

    clean() {
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;

        state.numero = 0;
        state.botao = 'GO';

        this.setState(state);
    }
    render() { 
        return (
            <div className='container'>
                <div className='title'> ⏳ Stopwatch</div>
                <img className='img' src={require('./assets/cronometro.png')} />
                <a className='timer'>{this.state.numero.toFixed(1)}</a>
                <div className='areaBtn'>
                    <a className='botao' onClick={this.go}>{this.state.botao}</a>
                    <a className='botao' onClick={this.clean}>{this.state.botao2}</a>
                </div>
            </div>
        );
    }
}
 
export default App;