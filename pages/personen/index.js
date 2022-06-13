import React from 'react'
import Buttons from '../../components/Buttons/Component'

function PersonPage() {
  return (
    <div>
      <Buttons buttonText="Vorige"/>
      <Buttons buttonText="Volgende"/>
    <div>
      Image
    </div> 
    <div>
      Naam {/* Hier komt naam props  */}
    </div> 


        <div>
          <h6>Front-end Developer</h6>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
          <Buttons buttonText="Lees meer"/>
        </div>
      


    </div>

  )
}

export default PersonPage