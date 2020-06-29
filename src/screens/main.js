import React, { Component } from 'react';
import { FormControl, } from 'react-bootstrap';
import '../App.css';
import { Link } from "react-router-dom";

class Main extends Component {

    render() {
        return (
            <div className='amazing'>
                <div className='position-relative' >
                    <div className='logo-view'>
                        <img src={'/assets/images/amazingco-logo.png'} className='logo-img' alt={'no image'} />
                        <h4 className='logo-text'>Time better spent</h4>
                    </div>
                    <img src={'/assets/images/background.png'} className='background-img img-responsive' alt='no images' />

                </div>
                <div>
                    <p className='text-center mt-30'>Enter your experience code.</p>
                    <div className='input-view mt-10 position-relative'>
                        <Link to='/experience'>
                            <div className="go-button bg-ea">GO</div>
                        </Link>
                        <FormControl
                            className='go-input'
                            type="code"
                            placeholder=""
                            defaultValue="MP-123456-010219"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
