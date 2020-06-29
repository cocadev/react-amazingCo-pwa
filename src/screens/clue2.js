import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from "../store/common/actions"
import Modal from 'react-modal';
import ModalPick from '../components/modalPick';

const styles = {
    btn: {
        padding: 14,
        borderRadius: 60,
        margin: 20,
        backgroundColor: '#52a8ef',
        color: '#fff',
        textAlign: 'center',

    },
};
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
        padding: 20
    }
};

class Clue2 extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            modalIsCall: false,
            modalIsClue: false


        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.openModalCall = this.openModalCall.bind(this);
        this.closeModalCall = this.closeModalCall.bind(this);

        this.openModalClue = this.openModalClue.bind(this);
        this.closeModalClue = this.closeModalClue.bind(this);
    }

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

    render() {

        const { data } = this.props;

        return (
            <div>
                <div className='eee-img3' style={{ backgroundImage: 'url(' + data.stops[1].medias[0].url + ')' }}>
                    <Link to='/experience/1/'>
                        <img src='/assets/images/back-button.png' style={{ width: 60, height: 25, margin: 12 }} />
                    </Link>

                    <div style={{ marginTop: 200, marginLeft: 20 }}>
                        <h4 className='color-white'>Clue</h4>
                        <h2 className='color-white line-height-7'>Two</h2>
                    </div>
                </div>

                <div className='eee-view'>

                    <p style={{ fontWeight: 600, fontSize: 19, color: '#000' }}>{data.stops[1].title}</p>
                    <p style={{ fontSize: 18, color: '#4a4a4a', marginTop: 20, lineHeight: 1.4 }}>{data.stops[1].subTitle}</p>
                    <p style={{ fontSize: 13, lineHeight: 1.6 }}>{data.stops[1].text}</p>

                    <hr />

                    <Link to='/experience/1/clue2'>
                        <div style={styles.btn}>Check the Code</div>
                    </Link>

                    <Link onClick={window.scrollTo(0, 0)} to='/experience/1/clue2/detail'>
                        <div className='text-center' style={{ color: '#52a8ef' }}>Skip code</div>
                    </Link>
                </div>

                <hr />

                <div style={{ textAlign: 'center', color: '#c4c4c4' }} onClick={() => this.setState({ modal1: true })}>
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
                            style={{ marginTop:60, borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingTop: 0.1, textAlign: 'center', backgroundImage: 'url(' + data.stops[1].medias[0].url + ')' }}

                        >
                            <div onClick={this.openModalFinal} className='grad2' style={{ padding: 7, borderRadius: 60, margin: 10, backgroundColor: '#52a8ef', color: '#fff', paddingLeft: 22, height: 30 }}>
                                <Link to='/experience/1/clue2/'>
                                    <span style={{ position: 'absolute', left: 50, fontWeight:'bold', color:'#fff', fontWeight:'bold' }}>Final Instruction</span>
                                </Link>
                                <i className="fa fa-lock" style={{ fontSize: 15, color: '#fff', position: 'absolute', right: 50 }}></i></div>
                        </div>

                        <div className='eee-img2 w3-card-4 shadow'
                            style={{ marginTop:-10,  borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingTop: 0.1, textAlign: 'center', backgroundImage: 'url(' + data.stops[0].medias[0].url + ')' }}

                        > 
                            <div onClick={this.openModalFinal} className='grad2' style={{ padding: 7, borderRadius: 60, margin: 10, backgroundColor: '#52a8ef', color: '#fff', paddingLeft: 22, height: 30 }}>
                                <Link to='/experience/1/clue1/'>
                                   <span style={{ position: 'absolute', left: 50, fontWeight:'bold', color:'#fff', fontWeight:'bold' }}>Clue One</span>
                                </Link>
                                <i className="fa fa-lock" style={{ fontSize: 15, color: '#fff', position: 'absolute', right: 50 }}></i></div>
                        </div>

                        <div className='eee-img2 w3-card-4 shadow'
                            style={{marginTop:-10, height:190, borderRadius: 20, paddingTop: 0.1, textAlign: 'center', backgroundImage: 'url(' + data.product.presentation.medias[0].url + ')' }}

                        >
                            <div onClick={this.openModalFinal} className='grad2' style={{ padding: 7, borderRadius: 60, margin: 10, backgroundColor: '#52a8ef', color: '#fff', paddingLeft: 22, height: 30 }}>
                                <Link to='/experience/1/'>
                                  <span style={{ position: 'absolute', left: 50, fontWeight:'bold', color:'#fff', fontWeight:'bold' }}>Welcome Introduction</span>
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
)(Clue2);

