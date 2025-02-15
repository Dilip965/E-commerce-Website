import React from 'react'
import logo from "../../assets/images/logo.jpg"
import "../header/header.css"
import SearchIcon from '@mui/icons-material/Search';
import Selectdrop from '../selectdrop/Selectdrop';
import { useState,useEffect } from 'react';
import axios from 'axios';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';



function Header() {

 const[categories,setcategories]=useState(['Milks and Dairies',
  'Wines & Drinks',
  'Clothing & beauty',
  'Fresh Seafood',
  'Pet Foods & Toy',
  'Fast food',
  'Baking material',
  'Vegetables',
  'Fresh Fruit',
  'Bread and Juice',
  'Milks and Dairies',
  'Bread and Juice',
  'standard',
  'basic'

 ]

 )



const country = []; // Global array (Not recommended for React, but as per your request)

useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
}, []);

const getCountry = async (url) => {
    try {
        await axios.get(url).then((res) => {
            if (res != null) {
               
                res.data.data.map((item, index) => {
                    country.push(item.country);
                    // console.log(item.country); 


                });
            }
        });
    } catch (error) {
        console.log(error.message);
    }
};



    return (
        <>
      
<header>


         <div className='container-header'>

            <div className='row '>
                {/* first div */}
         <div className='col-sm-2'>
              <img src={logo} alt="logo" />

         </div> 
          {/*second div*/}

         <div className='col-sm-5'>

       
            <div className='Header_Search d-flex' id='1'>
                    <Selectdrop data={categories} />
                    <div className='Onesearch'>

                              <input type="text" placeholder='Search for Item ...'/>
                              <SearchIcon className='Search_Icon' />
                    </div>
                    </div>
         </div>

      {/*thir div */}

          <div className='col-sm-5 d-flex ' id='2'>
           <LocationOnSharpIcon/>
          <Selectdrop className="countrylist" data={country} />
          </div>

            </div>

            
          </div> 

</header>

        </>
    )
}

export default Header

