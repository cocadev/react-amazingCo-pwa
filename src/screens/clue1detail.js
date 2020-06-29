import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from "../store/common/actions"
import Modal from 'react-modal';
import ModalPick from '../components/modalPick';
import Fade from 'react-reveal/Fade';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        borderRadius: 20,
        border: 0,
        margin: 0,
        padding: 0
    }
};

const customCallStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '75%',
        height: '30%',
        borderRadius: 20,
        border: 0,
        margin: 0,
        padding: 20
    }
};

const customClueStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        backgroundColor: '#393838',
        border: 0,
        margin: 0,
        padding: 20,
        ratio:'100'
    }
};

class Clue1Detail extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            modalIsCall: false,
            modalIsClue: false,
            height: 350
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.openModalCall = this.openModalCall.bind(this);
        this.closeModalCall = this.closeModalCall.bind(this);

        this.openModalClue = this.openModalClue.bind(this);
        this.closeModalClue = this.closeModalClue.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = event => {

        const { pageYOffset } = window;

        // console.log('event', event)

        if(pageYOffset < 260) {
            this.setState({ height: 350 - pageYOffset, ratio: 100 + pageYOffset/3 });
        }

        // console.log('pageYOffset', pageYOffset)
        // console.log('height', this.state.height)
        // console.log('ratio', this.state.ratio)

    };

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    openModalCall() {
        this.setState({ modalIsCall: true });
    }

    closeModalCall() {
        this.setState({ modalIsCall: false });
    }

    openModalClue() {
        this.setState({ modalIsClue: true });
    }

    closeModalClue() {
        this.setState({ modalIsClue: false });
    }

    scrollUp = () => {

        const doc = document.documentElement;
        const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        if (top > 0) {
            window.scrollTo(0, top - 3);
            setTimeout(this.scrollUp, 10)
        }

    };



    render() {

        const { data } = this.props;
        const { height } = this.state;

        console.log('*height*', this.state.height)

        return (
            <div>

                <div className='eee-img3' style={{ backgroundImage: 'url(' + data.stops[0].medias[0].url + ')', height: height, backgroundSize:this.state.ratio +'%' }}>
                    <Link to='/experience/1/clue1'>
                        <img src='/assets/images/back-button.png' style={{ width: 60, height: 25, margin: 12 }} alt="description of image" />
                    </Link>
                    <div className="pattern"></div>

                </div>


                <div className='eee-view'>

                    <p className='headText'>You are off to</p>
                    <div style={{ width: 40, height: 40, backgroundColor: '#b2e282', borderRadius: 20, padding: 12, float: 'right', marginTop: -40 }}>
                        <i className="fa fa-lock" style={{ fontSize: 15, color: '#fff' }}></i>
                    </div>

                    <hr />
                    <p className='headText' style={{ color: '#ff765f' }}>{data.stops[0].provider.name}</p>

                    <p className='titleText'>{data.stops[0].action}</p>

                    <i className="fas fa-long-arrow-alt-right" style={{ fontSize: 14, float: 'left', marginTop: 3 }}></i>
                    <p className='smallText'>&nbsp;&nbsp;{data.stops[0].where.address}</p>

                    <i className="fa fa-phone" style={{ fontSize: 12, float: 'left', marginTop: 5 }}></i>
                    <p className='smallText'>&nbsp;&nbsp;{data.stops[0].provider.phone}</p>

                    <p></p>
                    <hr />

                    <p className='headText'>More to explore</p>
                    <p className='smallText'>If you want to stay and explore the area - here some fantastic walks, viewpoints and activities you might want to explore!</p>

                </div>


                <div style={{ backgroundColor: '#f7f8f9', padding: 12, paddingBottom: 2, position: 'relative' }}>
                    <i className="fas fa-map-marker-alt" style={{ fontSize: 14, float: 'left', marginTop: 3, color: '#535353' }}></i>
                    <div style={{ paddingLeft: 20 }}>
                        <p className='smallText' style={{ fontWeight: 'bold' }}>{data.stops[0].pois[0].name}</p>
                        <p className='smallText'>{data.stops[0].pois[0].text}</p>
                    </div>
                </div>

                <div onClick={() => window.scrollTo(-220, 0)} style={{ backgroundColor: '#fff', padding: 12, paddingBottom: 2, position: 'relative' }}>
                    <i className="fas fa-map-marker-alt" style={{ fontSize: 14, float: 'left', marginTop: 3, color: '#535353' }}></i>
                    <div style={{ paddingLeft: 20 }}>
                        <p className='smallText' style={{ fontWeight: 'bold' }}>{data.stops[0].pois[1].name}</p>
                        <p className='smallText'>{data.stops[0].pois[1].text}</p>
                    </div>
                </div>


                <Fade bottom>
                    <div className='eee-img2'
                        style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingTop: 0.1, textAlign: 'center', backgroundImage: 'url(' + data.stops[1].medias[0].url + ')' }}

                    >
                        <div className='grad2' style={{ padding: 7, borderRadius: 60, margin: 10, backgroundColor: '#52a8ef', color: '#fff', paddingLeft: 22, height: 30 }}>
                            <Link to='/experience/1/clue2'>
                                <span style={{ position: 'absolute', left: 30, color: '#fff', fontWeight: 'bold' }}>Next Clue</span>
                            </Link>
                            <i className="fa fa-lock" style={{ fontSize: 15, color: '#fff', position: 'absolute', right: 22 }}></i></div>
                        <div onClick={this.scrollUp}>
                            <i className="fas fa-arrow-up" style={{ fontSize: 15, color: '#fff', textAlign: 'center', right: 22, marginTop: 12 }}></i>
                        </div>
                    </div>
                </Fade>


                <div style={{ textAlign: 'center', color: '#c4c4c4', }}>
                    <div onClick={this.openModal} style={{ width: 80, padding: 12, display: 'inline-block' }}>
                        <i className="fa fa-list-alt" style={{ fontSize: 20 }}></i>
                        <p style={{ fontSize: 11, marginTop: 6 }}>Pickups</p>
                    </div>
                    <div onClick={this.openModalClue} style={{ width: 80, padding: 12, display: 'inline-block' }}>
                        <i className="fas fa-wifi" style={{ fontSize: 20 }}></i>
                        <p style={{ fontSize: 11, marginTop: 6 }}>Clues</p>
                    </div>
                    <div onClick={this.openModalCall} style={{ width: 80, padding: 12, display: 'inline-block' }}>
                        <i className="fa fa-phone" style={{ fontSize: 20 }}></i>
                        <p style={{ fontSize: 11, marginTop: 6 }}>Hello</p>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    overlayClassName="Overlay"
                    closeTimeoutMS={1000}
                >

                    <ModalPick />
                    <div className='w-full' >
                        <center>
                            <div onClick={this.closeModal} className='modalclosebtn'>
                                <i className="fa fa-close" style={{ fontSize: 12, color: '#fff' }}></i>
                            </div>
                        </center>
                    </div>

                </Modal>

                <Modal
                    isOpen={this.state.modalIsCall}
                    onRequestClose={this.closeModalCall}
                    style={customCallStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    overlayClassName="Overlay"
                    closeTimeoutMS={1000}
                >

                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: 17, fontWeight: 'bold', marginTop: 12 }}>Call AmazingCo</p>
                        <p style={{ fontSize: 16, lineHeight: 1.2, marginTop: 20 }}>Would you like to call AmazingCo 1800 123 456</p>
                        <div onClick={this.closeModalCall} style={{ position: 'absolute', bottom: 10, left: '45%' }} >
                            <p style={{ fontSize: 17, color: '#007aff' }}>Call</p>
                        </div>
                    </div>

                </Modal>

                <Modal
                    isOpen={this.state.modalIsClue}
                    onRequestClose={this.closeModalClue}
                    style={customClueStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    overlayClassName="Overlay"
                    closeTimeoutMS={1000}
                >

                    <div style={{ textAlign: 'start' }}>
                        <p style={{ fontSize: 22, fontWeight: 'bold', marginTop: 22, color: '#fff' }}>Yarra Valley Clue List</p>

                        <div className='eee-img2 w3-card-4 shadow'
                            style={{ marginTop: 60, borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingTop: 0.1, textAlign: 'center', backgroundImage: 'url(' + data.stops[1].medias[0].url + ')' }}

                        >
                            <div onClick={this.openModalFinal} className='grad2' style={{ padding: 7, borderRadius: 60, margin: 10, backgroundColor: '#52a8ef', color: '#fff', paddingLeft: 22, height: 30 }}>
                                <Link to='/experience/1/clue2/'>
                                    <span style={{ position: 'absolute', left: 50, fontWeight: 'bold', color: '#fff', fontWeight: 'bold' }}>Final Instruction</span>
                                </Link>
                                <i className="fa fa-lock" style={{ fontSize: 15, color: '#fff', position: 'absolute', right: 50 }}></i></div>
                        </div>

                        <div className='eee-img2 w3-card-4 shadow'
                            style={{ marginTop: -10, borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingTop: 0.1, textAlign: 'center', backgroundImage: 'url(' + data.stops[0].medias[0].url + ')' }}

                        >
                            <div onClick={this.openModalFinal} className='grad2' style={{ padding: 7, borderRadius: 60, margin: 10, backgroundColor: '#52a8ef', color: '#fff', paddingLeft: 22, height: 30 }}>
                                <Link to='/experience/1/clue1/'>
                                    <span style={{ position: 'absolute', left: 50, fontWeight: 'bold', color: '#fff', fontWeight: 'bold' }}>Clue One</span>
                                </Link>
                                <i className="fa fa-lock" style={{ fontSize: 15, color: '#fff', position: 'absolute', right: 50 }}></i></div>
                        </div>

                        <div className='eee-img2 w3-card-4 shadow'
                            style={{ marginTop: -10, height: 190, borderRadius: 20, paddingTop: 0.1, textAlign: 'center', backgroundImage: 'url(' + data.product.presentation.medias[0].url + ')' }}

                        >
                            <div onClick={this.openModalFinal} className='grad2' style={{ padding: 7, borderRadius: 60, margin: 10, backgroundColor: '#52a8ef', color: '#fff', paddingLeft: 22, height: 30 }}>
                                <Link to='/experience/1/'>
                                    <span style={{ position: 'absolute', left: 50, fontWeight: 'bold', color: '#fff', fontWeight: 'bold' }}>Welcome Introduction</span>
                                </Link>
                                <i className="fa fa-lock" style={{ fontSize: 15, color: '#fff', position: 'absolute', right: 50 }}></i></div>
                        </div>

                        <center>
                            <div onClick={this.closeModalClue} className='modalclosebtn'>
                                <i className="fa fa-close" style={{ fontSize: 12, color: '#fff' }}></i>
                            </div>
                        </center>
                    </div>

                </Modal>


            </div>
        );
    }
}

export default connect(
    state => ({ data: state.common.data, }),
    dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Clue1Detail);

