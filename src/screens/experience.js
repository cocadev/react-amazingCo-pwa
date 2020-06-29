import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './styles/experience.css';
import '../index.css';
import * as actions from "../store/common/actions"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Fade from 'react-reveal/Fade';

class Experience extends Component {

    componentDidMount() {
        axios.get(` https://raw.githubusercontent.com/amazing-co/ac-route/master/MP-123456-010219.json`)
            .then(res => {
                const data = res.data;
                this.props.actions.setData(data);
            })
    }

    render() {

        const { data } = this.props;

        if(!data){
            return(
                <div>
                    Loading...
                </div>
            )
        }

        return (

            <Fade bottom>
                <div className='amazing p-12 mt-20'>
                    <div className='position-relative mt-20' >
                    <p style={{color:'#000', fontWeight:'bold', fontSize:23, margin:12}}>Your Experience</p>

                        <div className='card-view w3-card-4'>
                            <h4 className='card-text'>{data.product.name}</h4>
                            <Link to='/experience/1'>
                                <div className='btn btn-danger ml-20' style={{ float: 'left', borderRadius: 15 }}>Start Experience</div>
                            </Link>
                        </div>
                        <img src={data.product.presentation.medias[0].url} className='card-img' alt='no images' />
                    </div>
                </div>
            </Fade>
        );
    }
}

export default connect(
    state => ({ data: state.common.data, }),
    dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Experience);
