import React from 'react';

export default class ModalFeed extends React.Component {

  render() {
    return (
      <div>
        <div style={{ height: 120, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingTop: 40 }}>
          <img src='/assets/images/amazingco-logo.png' className='w-full' />
        </div>

        <p style={{ fontWeight: 'bold', fontSize: 21, lineHeight: 1.4, paddingLeft: 15, paddingRight: 15, marginTop:20 }}>
How likely are you to recommend Mystery Picnic Yarra Valley?</p>
        <p style={{ paddingLeft: 15, paddingRight: 15, marginTop:20, fontSize:12 }}>0 = Unlikely. 10 = Very Likely</p>

        <div style={{backgrounColor:'pink', textAlign:'center', marginTop:20}}>
          <div className='numbers'>1</div>
          <div className='numbers'>2</div>
          <div className='numbers'>3</div>
          <div className='numbers'>4</div>
          <div className='numbers'>5</div>
        </div>

        <div style={{backgrounColor:'pink', textAlign:'center', marginTop:10}}>
          <div className='numbers'>6</div>
          <div className='numbers'>7</div>
          <div className='numbers'>8</div>
          <div className='numbers'>9</div>
          <div className='numbers'>10</div>
        </div>

      </div>
    );
  }
}
