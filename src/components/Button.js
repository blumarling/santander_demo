import React, { Component } from 'react'

const button = ({color, children}) =>  (
  <div className="btn" style={{color:color, borderColor:color}}>
    {children}
  </div>
)


export default button;
