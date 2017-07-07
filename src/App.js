import React, { Component } from 'react'
import { Menu, Segment, Icon, Image, Card, Button } from 'semantic-ui-react'
import utsav from './images/img.png' 
import './App.css'
import Particles from 'react-particles-js';
import { Parallax, Background } from 'react-parallax';
import TypeWriter from 'react-typewriter';
import Typing from 'react-typing-animation';
import img1 from './images/dark.jpg';
import ReactRevealText from 'react-reveal-text';
let hover;
const intro = () =>
  ( 
    <div style={{marginLeft:'auto',marginRight:'auto'}}>
    <center>

    <TypeWriter typing ={0.4}> <h1>Ahoy! </h1></TypeWriter>

    </center>
    </div>
  )


const contact= () =>
  (   

    <div>  
      
      <p style={{marginTop:'5%',fontSize:'25px', textAlign:'center', color:'black'}}>
      Lets Get in touch
      </p>

      <p style={{fontSize:'18px', textAlign:'center', color:'black'}}>
            I'm always looking to connect and chat with new people.
        <br></br>Feel free to reach out.
      </p>

      <div style={{textAlign:'center', marginTop:'4%'}}>
        <Button style={{border: '5px double white'}} circular size='big' color='linkedin' icon='linkedin' href="https://www.linkedin.com/in/utsav-goel-a0040b125/" target="_blank" />
        <Button style={{border: '5px double white',marginLeft:'15px'}} circular size='big' color='black' icon='github' href="https://github.com/utsavgoel" target="_blank" />
        <Button style={{border: '5px double white',marginLeft:'15px'}} circular size='big' color='facebook' icon='facebook f' href="https://www.facebook.com/goelutsav" target="_blank"/>
        <Button style={{border: '5px double white',marginLeft:'15px'}} circular size='big' color='red' icon='file text' href="https://github.com/utsavgoel" target="_blank"/>
      </div>

    </div>
  )


export default class MenuExampleInvertedSecondary extends Component {
    
    constructor() {
    super();
    this.state = { show: false };
  }
    
    componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  getInitialState = () => {
        return({hidden : "hidden"});
    }

  componentWillMount = () => {
  
        var that = this;
        setTimeout(function() {
            that.showw();
        },  that.props.wait);
    }
    showw = () =>{
          this.setState({hidden : ""});
    }
    
  
  render() {
    
    return (<div>
      
      <Segment inverted style={{height:'4.2em'}}>
        
        <Image src={utsav} style={{
             backgroundRepeat: 'no-repeat',
             float: 'left',
             width: '4%',
             height: '150%',
             borderRadius: '50%',
             marginTop: '-1%',
             marginLeft: '2%',
             boxShadow: '0px 0px 2px #232323'}}/> 
       <p style={{fontSize:'1.5em', paddingLeft:'7%'}}> Utsav Goel</p>
    
      </Segment>
        
      <ReactRevealText show={this.state.show} style={{fontSize:'25px',fontFamily:'Times', width:'90%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
      &#8220;Magic happens only when you're wired&#8221; 
      </ReactRevealText>
      
      <br></br>
       
      {intro()}
      
      <Card raised='true'  style={{width:'70%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}}
     header='I am an undergraduate student in my penultimate year of Engineering at NSIT.'
      fluid color='red'
      meta='I am a Tech geek, loves developing apps and apart from development, I enjoy writing code which solves some real-world problems. My skill set includes Java & C/C++ and I am familiar with ES6 and ReactJS.'
      />


      {contact()} 

      <br></br>
      <p style={{fontSize:'12px', textAlign:'center'}}> This website is open-source. You can find it on my<a href=""> Github </a>. </p>
      </div>
    )
  }
}