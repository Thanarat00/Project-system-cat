import React, { Component } from 'react'
import Figure from 'react-bootstrap/Figure';
import Register from './Register';

export class Call extends Component {
  render() {
    return (
       

            <div className="step">
                <Register />
                    <p>1.สมัครสมาชิก </p>
                    <br></br>
                        <Figure>
                        <Figure.Image
                            width={900}
                            height={180}
                            alt="171x180"
                            src="/images/LINE.png"
                        />
                        <Figure.Caption>
                            
                        </Figure.Caption>
                        </Figure>

                        <p>1.สมัครสมาชิก </p>
                    <br></br>
                        <Figure>
                        <Figure.Image
                            width={900}
                            height={180}
                            alt="171x180"
                            src="/images/email.jpg"
                        />
                        <Figure.Caption>
                            
                        </Figure.Caption>
                        </Figure>

                        <p>1.สมัครสมาชิก </p>
                    <br></br>
                        <Figure>
                        <Figure.Image
                            width={900}
                            height={180}
                            alt="171x180"
                            src="/images/call.png"
                        />
                        <Figure.Caption>
                            
                        </Figure.Caption>
                        </Figure>
 


                        </div>
        
    )
  }
}

export default Call