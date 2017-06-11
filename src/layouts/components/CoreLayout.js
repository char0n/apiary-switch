import React from 'react';

const CoreLayout = ({ children }) => (
  <section className="core-layout">
    {children}
  </section>
);

CoreLayout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default CoreLayout;
