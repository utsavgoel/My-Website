import React, { Component } from 'react'
import { Segment,Image, Card, Button } from 'semantic-ui-react'
import utsav from './images/img.png' 
import './App.css'
import TypeWriter from 'react-typewriter';
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
    <div style={{ textAlign:'center',marginLeft:'auto',marginRight:'auto',width:'80%'}}>  
      <br></br>
      <p style={{marginTop:'5%',fontSize:'25px'}}>
      Lets Get in touch
      </p>

      <p style={{fontSize:'18px'}}>
            I'm always looking to connect and chat with new people.
        <br></br>Feel free to reach out.
      </p>
    </div>
      <div style={{textAlign:'center', marginTop:'25px'}}>
        <Button style={{border: '5px double white'}} circular size='big' color='linkedin' icon='linkedin' href="https://www.linkedin.com/in/utsav-goel-a0040b125/" target="_blank" />
        <Button style={{border: '5px double white',marginLeft:'15px'}} circular size='big' color='black' icon='github' href="https://github.com/utsavgoel" target="_blank" />
        <Button style={{border: '5px double white',marginLeft:'15px'}} circular size='big' color='facebook' icon='facebook f' href="https://www.facebook.com/goelutsav" target="_blank"/>
        <Button style={{border: '5px double white',marginLeft:'15px'}} circular size='big' color='red' icon='file text' href="" target="_blank"/>
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
             width: '50px',
             height: '150%',
             borderRadius: '50%',
             marginTop: '-5px',
             marginLeft: '10px',
             boxShadow: '0px 0px 2px #232323'}}/> 
       <p style={{fontSize:'1.5em', paddingLeft:'4em'}}> Utsav Goel</p>
    
      </Segment>
        
      <ReactRevealText show={this.state.show} style={{fontSize:'25px',fontFamily:'Times', width:'90%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
      &#8220;Magic happens only when you're wired&#8221; 
      </ReactRevealText>
      
      <br></br>
       
      {intro()}
      
      <Card raised style={{width:'70%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}}
     header='I am an undergraduate student in my penultimate year of Engineering at NSIT.'
      fluid color='red'
      meta='I am a Tech geek, loves developing apps and apart from development, I enjoy writing code which solves some real-world problems. My skill set includes Java & C/C++ and I am familiar with ES6 and ReactJS.'
      />


      {contact()} 

      <br></br>
      <p style={{fontSize:'12px', textAlign:'center'}}> This website is open-source. You can find it on my<a href="https://github.com/utsavgoel/My-Website"> Github </a>. </p>
      </div>
    )
  }
}