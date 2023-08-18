import React, { useEffect, useState } from 'react'
import{Country, State} from "country-state-city"
import Selector from './Selector'

const Consult = () => {
    let countryData = Country.getAllCountries();
    // const [stateData,setStateData] = useState()
    const [country,setCountry] = useState(countryData[0]);
    // const [state,setState] = useState()

//    useEffect(()=>{
//     setStateData(State.getStatesOfCountry(country?.isoCode));
    
//    },[country])

//    useEffect(()=>{
//     stateData && setState(stateData[0]);
//    },[stateData]);
    
  return (
    <>
    <section className='min-h-screen px-3 grid place-items-center selection:text-white selection:bg-teal-500 bg-gradient-to-r from-teal-400 to-teal-500'>
        
        <div>
            <h2 className='text-2xl font-bold text-teal -900'>
                Country , state and city selectors
            </h2>
            <br/>
            <div className='flex flex-wrap gap-3 bg-teal-300 rounded-lg p-8'>
                <div>
                    <p className='text-teal-800 font-semibold'>country:</p>
                    <Selector data={countryData}
                     selected={country} 
                     setSelected={setCountry}/>
                </div>
                {/* <div>
                    <p className='text-teal-800 font-semibold'>State:</p>
                    <Selector 
                    data={State}
                     selected={country} 
                     setSelected={setCountry}/>
                </div> */}
            </div>
        </div>
    </section>
    </>

  )
}

export default Consult