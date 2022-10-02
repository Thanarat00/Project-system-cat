import React, { Component } from 'react';
import './Uploadimage.css';



export class Uploadimage extends Component {
    state={
        profileImg: '/images/Upload-PNG-HD-Image.png'
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };
    render() {
        const { profileImg} = this.state
            return (
              
                    <div className="container">
                        <div className="img-holder">
                            <img src={profileImg} alt="" id="img" className="img" />
                        </div>
                        <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler}  multiple/>
                        <div className="label">
                             <label className="image-upload" htmlFor="input">
                                อัพโหลดรูปภาพ
                            </label>
              </div>
                    </div>
                
            );
        }
    }

export default Uploadimage
