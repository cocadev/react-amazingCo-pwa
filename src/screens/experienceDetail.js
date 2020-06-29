import React, { Component } from 'react';
import '../App.css';
import '../index.css';
import './styles/experienceDetail.css';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from "../store/common/actions"
import Fade from 'react-reveal/Fade';

class ExperienceDetail extends Component {

    render() {
        const {data} = this.props;
        return (
            <div>

                <div className='eee-img3' style={{backgroundImage:'url('+ data.product.presentation.medias[0].url +')'}}>

                    <Link to='/experience/'>
                        <img src='/assets/images/back-button.png' style={{ width: 60, height: 25, margin: 12 }}/>
                    </Link>

                    <div style={{ marginTop:100, marginLeft:20 }}>
                        <img src={data.weather.medias[0].url} className='icon-img' alt='no image' />
                        <h5 className='color-white'>{data.weather.from} / {data.weather.to}</h5>
                        <h4 className='color-white mt-30'>{data.product.name}</h4>
                        <h2 className='color-white line-height-7'>{data.product.shortName}</h2>
                    </div>

                </div>


                <div className='eee-view'>

                    <h3 style={{ fontWeight: 600 }}>{data.introduction.title}</h3><br />
                    <span style={{ fontSize: 19, color: '#4a4a4a' }}>{data.introduction.subTitle}</span><br /><br />
                    <h4 style={{ fontSize: 13, lineHeight: 1.6 }}>{data.introduction.text}</h4>

                    <hr/>

                    <span style={{ fontSize: 13, lineHeight: 1.6 }}>The day is meant to be fun, and a little challenging, but not stressful! Give the clues your best shot but if you get stuck or lost we can give you some help. All the clues are designed to be solvable using Google if needed - so if you type a few key words from the clue into the search engine it will help you on your way!</span>
                    <br />
                    <br />


                    <span style={{ fontSize: 13, lineHeight: 1.6, color: '#f77257', fontWeight: 500 }}>Don't forget to take plenty of pictures, and feel free to explore other areas of interest along the way.</span>

                </div>

                <div className='eee-img4'>

                    <div style={{ bottom: 0, justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: 12, marginRight: 12, paddingTop:180 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: 5, fontSize: 13 }}>I have read the terms & conditions and </span><br />
                        <span style={{ marginLeft: 10, fontSize: 13 }}>agree to return my picnic basket upon </span><br />
                        <span style={{ marginLeft: 5, fontSize: 13 }}>completion of the Mystery Experience</span><br />
                        <Link onClick={window.scrollTo(0, 0)} to='/experience/1/clue1'>
                            <div className='' style={{ padding: 14, borderRadius: 60, margin: 20, backgroundColor: '#52a8ef', color: '#fff' }}>See Clue One</div>
                        </Link>
                    </div>

                </div>

                <br />
            </div>
        );
    }
}

export default connect(
    state => ({ data: state.common.data, }),
    dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(ExperienceDetail);