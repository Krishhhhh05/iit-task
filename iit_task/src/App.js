import './App.css';
import React from "react";
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { BiSun } from 'react-icons/bi';
import { AiFillCloud } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.css';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { BiWind } from 'react-icons/bi';
import { BsCloudRain } from 'react-icons/bs';
import { TbTemperature } from 'react-icons/tb';
import { BsUmbrella } from 'react-icons/bs';
import { CiTimer } from 'react-icons/ci';

const data = [
  {
    "name": "25%",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "29%",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "33%",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "39%",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "43%",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "48%",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "53%",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]
function App() {

  return (
    <div className="App ">

      <div className='grid grid-cols-4'>
        <div id='left' class="bg-[#5C9CE5]	h-screen rounded-[60px]">
          <div className="relative h-screen">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vjwM-4cwG7fxt57BXmfQMwHaEK%26pid%3DApi&f=1&ipt=f6afc055b905e9e12904af03cecd2d450f9b5787068c059db0686aa7c74cd422&ipo=images"
              alt="Image"
              className="absolute inset-0 object-cover w-full h-full rounded-[60px]"
            />
            <div className='absolute inset-0 p-3 m-3 float-left'>

              <div className=' flex-row mt-6 '>
                <div className='flex flex-row justify-between w-full font-bold text-lg'>Mumbai
                  <div className='flex-justify-end'> 12:06</div>

                </div>
                <div className='flex flex-row justify-between w-full  font-semibold text-lg'>Today 08/07                   <div className='flex-justify-end'> 12:06</div>

                </div>


              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white font-bold text-6xl">17.C</p><br />
              <p className="text-white">Winter</p>    </div>
          </div>

        </div>
        <div id='left' class="col-span-3 bg-[#9FC4E7] h-screen rounded-[60px]">
          <div className=' p-4'>
            <div className='font-bold float-left ml-6 '>
              Welcome!
            </div>
            <br />
            <div className='font-light float-left ml-6'>
              Check out today's weather          </div>
            <br />
            <div id="first white div" className='bg-white h-1/4 m-6 rounded-[60px] p-4'>
              <div className=' flex'>
                <div className=' flex flex-grow p-2  ml-4'>Upcoming hours
                </div>
                <div className='  p-2  ml-4'>
                  <button class="bg-gray-200 text-gray-400 py-1 px-4 rounded mr-2">Rain Precipitation</button>

<button class="bg-gray-200  text-gray-800 font-bold py-1 px-4 rounded">Next Days</button>

                </div>

              </div>
              <div className=' flex flex-row p-1  '>
                <div className='flex-column px-8 ml-4 mr-10'>
                  <h6>Now</h6>
                  <BiSun size={25} />
                  <h6>27°C</h6>
                </div>

                <div className='flex-column ml-10 mr-12'>
                  <h6>11.00</h6>
                  <BiSun size={25} />
                  <h6>28°C</h6>
                </div>
                <div className='flex-column  mx-14'>
                  <h6>12.00</h6>
                  <AiFillCloud size={25} />
                  <h6>28°C</h6>
                </div>

                <div className='flex-column mx-14'>
                  <h6>13.00</h6>
                  <AiFillCloud size={25} />
                  <h6>29°C</h6>
                </div>

                <div className='flex-column mx-16'>
                  <h6>14.00</h6>
                  <BiSun size={25} />
                  <h6>30°C</h6>
                </div>

                <div className='flex-column mx-12'>
                  <h6>15.00</h6>
                  <AiFillCloud size={25} />
                  <h6>29°C</h6>
                </div>
                <div className='flex-column mx-12'>
                  <h6>16.00</h6>
                  <AiFillCloud size={25} />
                  <h6>29°C</h6>
                </div>

              </div>

              <AreaChart width={950} height={190} data={data}
                margin={{ top: 10, right: 40, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
              </AreaChart>
            </div>
            <div className='font-bold float-left ml-6'>
              More details of today's weather            </div><br />
            <div id="second" className='grid grid-cols-3 ml-9 mt-2'>
              <div className='bg-white w-56  h-24  rounded-[40px] p-4 '>
                <div className='flex flex-row justify-between'>Humidity
                  <div className='bg-[#5C9CE5] w-7 h-7 rounded-md mr-2'>
                    <MdOutlineWaterDrop size={25} color="white" />
                  </div>
                </div>
                <div class="progress mr-1 -mb-2 mt-2" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar w-75"></div>
                </div>
              </div>
              <div className='bg-white w-56  h-24  rounded-[40px] p-4'>
                <div className='flex flex-row justify-between'>Wind
                  <div className='bg-[#5C9CE5] w-7 h-7 rounded-md mr-2'>
                    <BiWind size={25} color="white" />
                  </div>
                </div>
                <div class="progress mr-1 -mb-2 mt-2" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar w-75"></div>
                </div>
              </div>
              <div className='bg-white w-56  h-24 rounded-[40px] p-4'>
                <div className='flex flex-row justify-between'>Precipitation
                  <div className='bg-[#5C9CE5] w-7 h-7 rounded-md mr-2'>
                    <BsCloudRain size={25} color="white" />
                  </div>
                </div>
                <div class="progress mr-1 -mb-2 mt-2" role="progressbar" aria-label="Basic example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar w-75"></div>
                </div>
              </div>
              <div className='bg-white w-56  h-24  rounded-[40px] mt-3 p-4'>
                <div className='flex flex-row justify-between'>UV Index
                  <div className='bg-[#5C9CE5] w-7 h-7 rounded-md mr-2'>
                    <BiSun size={25} color="white" />
                  </div>
                </div>
                <div class="progress mr-1 -mb-2 mt-2" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar w-75"></div>
                </div>
              </div>
              <div className='bg-white w-56  h-24  rounded-[40px] mt-3 p-4'>
                <div className='flex flex-row justify-between'>Feels like
                  <div className='bg-[#5C9CE5] w-7 h-7 rounded-md mr-2'>
                    <TbTemperature size={25} color="white" />
                  </div>
                  

                </div>
                <div class="progress mr-1 -mb-2 mt-2" role="progressbar" aria-label="Basic example" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar w-75"></div>
                </div>
              </div>
              <div className='bg-white w-56  h-24  rounded-[40px] mt-3 p-4'>
                <div className='flex flex-row justify-between'>Chance of rain
                  <div className='bg-[#5C9CE5] w-7 h-7 rounded-md mr-2'>
                    <BsUmbrella size={25} color="white" />
                  </div>
                </div>
                <div class="progress mr-1 -mb-2 mt-2" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar w-75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
