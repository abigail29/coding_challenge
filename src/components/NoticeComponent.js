import React from 'react'

const NoticeComponent = (props) => {
  let className;
  let otherClassName;

  if(props.submitted){
    otherClassName = "bottom-arrow"
    className = "hidden"
  }else{
    className = "bottom-arrow"
    otherClassName = "hidden"
  }
  return (
    <div>
      <div className={className}>
        <p>${props.dLeft} still needed for this project.</p>
      </div>
      <div className={otherClassName}>
        <p>Thank you for donating!</p>
      </div>
    </div>

  )
}

export default NoticeComponent;
