import React from 'react'

class Total extends React.Component{
    render() {
        return (
            
        )
    }
}
export default Total;

const total = Object.keys(this.state.selected).reduce(
    (acc, curr) => acc + this.state.selected[curr].cost,
    0
  );