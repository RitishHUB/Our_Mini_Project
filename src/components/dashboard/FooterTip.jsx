import React from 'react';

const FooterTip = ({ tip }) => (
  <div className="footer">
    <h3>💡 Tip of the Day</h3>
    <p style={{ margin: '10px 0 0 0', fontSize: '1rem', opacity: '0.95' }}>{tip}</p>
  </div>
);

export default FooterTip;
