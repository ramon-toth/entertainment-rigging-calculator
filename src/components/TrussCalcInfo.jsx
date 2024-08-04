import React from 'react'
import Card from './Card'

function TrussCalcInfo() {
  return (
    <Card header={<span className="block text-lg font-medium leading-6 text-gray-900 ">Truss Load Calculator</span>}>
        <div className="">
            <p>This calculator is designed to help calculate and visualize the forces on the supports of a straight truss section.
            It takes into consideration Uniformly distributed loads (UDL) and point loads.
            </p>
            <p>Up to 8 support locations can be added.</p>
            <p><b>Currently only basic support is available for cantilever loads. </b>Full support is coming in a future update.
            Cantilevered loads are currenly added in full to the first adjacent support. Cantilever length and back span are not yet accounted for. </p>
            <p className='mt-6'>This tool is inteded as a visualization aid <b>for trained and certified riggers only. </b></p>
            <p>Improper use of rigging equipment can result in property damage, serious injuries, or death.</p>
        </div>
        </Card>
  )
}

export default TrussCalcInfo