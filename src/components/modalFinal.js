import React from 'react';
 
export default class ModalFinal extends React.Component {
 
  render() {
    return (
      <div>
          <div style={{backgroundColor:'lightblue', height:160, borderBottomLeftRadius:20, borderBottomRightRadius:20 }} className='gradient'>
            <img src='/assets/images/123.png' className='w-full'/>
            <div className='position-center position-absolute w-80' style={{top:'16%'}}>
              <img src='/assets/images/amazingco-logo.png' className='w-full'/>
              <p style={{fontSize:20, textAlign:'center', color:'#fff', fontWeight:'bold'}}>Time Better Spent</p>  
            </div>
          </div>

          <p style={{fontWeight:'bold', fontSize:21, lineHeight:1.4, paddingLeft:15, paddingRight:15, marginTop:60}}>Thank You....</p>
          <p style={{ paddingLeft:15, paddingRight:15, lineHeight:1.5}}>From us at AmazingCo, we hope you've had a ball, when you 're planning your next date - you know who to call!</p>

          <p style={{color:'#ff765f', fontSize:22, lineHeight:2, paddingLeft:15, paddingRight:15, fontWeight:'bold', marginTop:10}}>Don't forget</p>
          <p style={{ paddingLeft:15, paddingRight:15, fontSize:12}}>Drop off Your Picnic Basket To</p>

          <p style={{ paddingLeft:15, paddingRight:15, fontWeight:'bold', marginTop:30, fontSize:12, lineHeight:0.75}}>The Deli Platter Before 5pm.</p>
          <p style={{ paddingLeft:15, paddingRight:15, fontWeight:'bold', marginTop:0, fontSize:12, lineHeight:0.75}}>1514 Mt Dandenong Tourist Rd.</p>
          <p style={{ paddingLeft:15, paddingRight:15, fontWeight:'bold', marginTop:0, fontSize:12, lineHeight:0.75}}>Olina, Victoria, 3788</p>

      </div>
    );
  }
}
