import React from 'react';

export default class ModalPick extends React.Component {

  render() {
    return (
      <div>
        <div style={{ backgroundColor: 'lightblue', height: 220, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingTop: 40 }}>
          <img src='/assets/images/amazingco-logo.png' className='w-full' />
        </div>

        <p style={{ color: '#ff765f', fontSize: 33, lineHeight: 2, paddingLeft: 15, paddingRight: 15 }}>Jeremy Cox</p>
        <p style={{ fontWeight: 'bold', fontSize: 21, lineHeight: 1.4, paddingLeft: 15, paddingRight: 15 }}>Mystery Picnic Yarra Valley</p>
        <p style={{ paddingLeft: 15, paddingRight: 15 }}>Show this to each provider to pickup your goods</p>
      </div>
    );
  }
}
