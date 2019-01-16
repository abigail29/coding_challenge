import React from 'react'
import Progress from 'react-progressbar'
import NoticeComponent from './NoticeComponent.js'

const ProgressComponent = (props) => {

  return (

    <div>
      <NoticeComponent
      dLeft={props.dLeft}
      submitted={props.submitted}
      />

      <Progress
      completed={props.dPercentage}
      className="progress"
      color= "red"
      />

    </div>
  )
}

export default ProgressComponent;
