
import "leaflet/dist/leaflet.css"
import background from '/pattern-bg.png'
import arrow from '/arrow.svg'
import { useState,useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import MarkerPosition from './MarkerPosition'

function App() {
  const [address, setAddress] = useState(null)
  const[ipAddress, setIpAddress] = useState("")
  const apiKey = import.meta.env.VITE_API_KEY;



 useEffect(()=>{
  try {
    const getData = async()=>{
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=106.193.176.110`)
      const data = await res.json();
      setAddress(data)
    }
    getData();
    
  } catch (error) {
    console.log(error.message); 
  }
 },[])



  return (
    <>
      <section>
        <div className="absolute w-full -z-10">
          <img src={background} alt="" className="w-full h-80" />
        </div>

        <div className="max-w-xl mx-auto p-8">
          <h1 className="font-bold text-2xl lg:text-3xl text-white pb-8 text-center">
            IP Address Tracker
          </h1>

          <form
            // onSubmit={handleSubmit}
            autoComplete="off"
            className="w-full flex"
          >
            <input
              type="text"
              name="ipaddress"
              id="ipaddress"
              placeholder="Search for any IP address or domain"
              className="w-full py-2 px-4 rounded-l-lg"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button type="submit" className="bg-gray-400 border-black py-2 px-4 rounded-r-lg">
              <img src={arrow} alt="" />
            </button>
          </form>
        </div>

        {address && (
          <>
            <article className="p-8">
              <div
                className="bg-white rounded-xl p-8 shadow max-w-6xl mx-auto grid grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:text-left -mb-10 relative lg:-mb-32"
                style={{
                  zIndex: 10000,
                }}
              >
                <article className="lg:border-r lg:border-slate-400 p-6">
                  <h2 className="text-sm uppercase text-slate-600">
                    IP Address
                  </h2>
                  <p className="font-bold text-slate-900 text-2xl">
                    {/* {address.ip} */}
                  </p>
                </article>

                <article className="lg:border-r lg:border-slate-400 p-6">
                  <h2 className="text-sm uppercase text-slate-600">Location</h2>
                  <p className="font-bold text-slate-900 text-2xl">
                    {address.location.city}, {address.location.region}
                  </p>
                </article>

                <article className="lg:border-r lg:border-slate-400 p-6">
                  <h2 className="text-sm uppercase text-slate-600">Timezone</h2>
                  <p className="font-bold text-slate-900 text-2xl">
                    UTC {address.location.timezone}
                  </p>
                </article>

                <article className="p-6">
                  <h2 className="text-sm uppercase text-slate-600">ISP</h2>
                  <p className="font-bold text-slate-900 text-2xl">
                    {address.isp}
                  </p>
                </article>
              </div>
            </article>
      <div className='relative z-10'>
            <MapContainer 
            center={[address.location.lat, address.location.lng]} 
            zoom={13} 
            scrollWheelZoom={true}
            style={{height:"500px" ,width:"100vw"}}>
      <TileLayer
      attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     <MarkerPosition address = {address}/>
         </MapContainer>
         </div>
          </>
        )}
        
      </section>
    </>
  )
}

export default App
