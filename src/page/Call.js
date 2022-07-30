import React, { Component } from 'react'
import Figure from 'react-bootstrap/Figure';

export class Call extends Component {
  render() {
    return (
        <div class="p-3 mb-2 bg-dark  text-dark">

            <div className="step">
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
        </div>
    )
  }
}

export default Call