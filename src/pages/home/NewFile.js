import React from 'react'
import './NewFile.css'


// Render a YouTube video player

const NewFile = () => {
  return (
    <div className='scnd-component-container'>
      <div className='scnd-component-inner-container'>
        <div className='scnd-component-part-one'>
          <h1>
            Reshaping Employment <br /> Experiences in the Middle East
          </h1>
          <h2>
            Orchestrate your HR function with <br /> speed and flexibility
          </h2>
          <h3>Looking for a way to simplify and rationalize your human resources management processes? The search is over! </h3>
          <p>palm.hr is the game-changing management system employers in the Middle East have been waiting for. Our next-gen HR software seamlessly integrates into today’s workplaces, making it easier to orchestrate HR functions. Our HRMS is here to help reshape your employment experience with speed and flexibility.</p>
          <p style={{ marginBottom: '5vh' }}> No more spending hours trying to find documents, staling spreadsheets, or dealing with overwhelming email exchanges. palm.hr offers an intuitive way to ease how you manage and communicate with people. You get everything organized in one place so everyone can be more productive more quickly, allowing for hassle-free workdays.</p>
          <a href="/">Schedule a call with our team</a>
        </div>
        <div className='scnd-component-part-two'>
        <video className='video-section' controls="true">
        <source  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />

    </video>
    

            </div>
        </div>

      </div>
      )
}

      export default NewFile