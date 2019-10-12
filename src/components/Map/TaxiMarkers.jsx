import React from 'react'
import TaxiMarker from './TaxiMarker'

import data from '../../api/exampleData'

const markers = data.drivers.map(driver => [driver.location.latitude, driver.location.longitude])

const TaxiMarkers = () => {
  return (
    <>
      {markers.map((position, idx) => <TaxiMarker position={position} popupHtml={`Taxi ${idx}`} key={idx} />)}
    </>
  )
}

export default TaxiMarkers
