
import React from 'react';
import './Circle.css';
export default function Circle() {



  return (
    <div className='content'>
      <div className='circle'>
    <div id="my-pie-chart-container">
    <figure id="my-pie-chart"></figure>
        <div id="legenda">
        <div className="pie-chart">
          <div className="slice first"></div>
          <div className="slice second"></div>
          <div className="slice third"></div>
        </div>
          <div className='list'>
          <div className="entry">
            <div id="color-green" className="entry-color"></div>
            <div className="entry-text">зеленый сегмент</div>
          </div>
          <div className="entry">
          <div id="color-pink" className="entry-color"></div>
          <div className="entry-text">розовый сегмент</div>
          </div>
          <div className="entry">
            <div id="color-gray" className="entry-color"></div>
            <div className="entry-text">серый сегмент</div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
