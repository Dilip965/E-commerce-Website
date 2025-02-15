
import React from 'react'
import '../selectdrop/selectdrop.css'
import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Selectdrop(prop) {
    const[isOpenselect,setisOpenselect]=useState(false);
    const[selectIndex,setselectIndex]=useState(0)
    const[selectitem,setselectitem]=useState("All category")

    function openselect(){

        setisOpenselect(!isOpenselect)
    }
   

    function closeSelect(name,index){
        
             setselectIndex(index);
             setisOpenselect(false)
             setselectitem(name)
    }




    return (

        <>
       
         
        <div className='dropdownone'>
            
            <span className='OpenSelect' onClick={openselect}>{selectitem}<ArrowDropDownIcon className='downarrow'/></span>

            {
                  isOpenselect===true &&
                  <div className='selectdrop'>
                  <div className='Searchfield'>
                  <input type="text" placeholder='search here.. '/>  
                  </div>
                
                  <div className='categorylist'>
                  <ul>

                  {

                    prop.data.map((item,index)=>{

                       return(

                        <li key={item} onClick={()=> closeSelect(item,index)}className={`{$selectindex===index ? 'active':' ' }`}>{item}</li>
                       )
                    })
                  }
                {/* <li onClick={()=> closeSelect('Milks and Dairies',0)}className={`{$selectindex===0 ? 'active':' ' }`}>Milks and Dairies</li>
                <li onClick={()=> closeSelect('Wines & Drinks',1)}className={`{$selectindex===1 ? 'active':' ' }`}>Wines & Drinks</li>
                <li onClick={()=> closeSelect('Clothing & beauty',2)}className={`{$selectindex===2 ? 'active':' ' }`}>Clothing & beauty</li>
                <li onClick={()=> closeSelect('Fresh Seafood',3)}className={`{$selectindex===3 ? 'active':' ' }`}>Fresh Seafood</li>
                <li onClick={()=> closeSelect('Pet Foods & Toy',5)}className={`{$selectindex===5 ? 'active':' ' }`}>Pet Foods & Toy</li>
                <li onClick={()=> closeSelect('Fast food',6)}className={`{$selectindex===6 ? 'active':' ' }`}>Fast food</li>
                <li onClick={()=> closeSelect('Baking material',7)}className={`{$selectindex===7 ? 'active':' ' }`}>Baking material</li>
                <li onClick={()=> closeSelect('Vegetables',8)}className={`{$selectindex===8 ? 'active':' ' }`}>Vegetables</li>
                <li onClick={()=> closeSelect('Fresh Fruit',9)}className={`{$selectindex===9 ? 'active':' ' }`}>Fresh Fruit</li>
                <li onClick={()=> closeSelect('Bread and Juice',10)}className={`{$selectindex===10 ? 'active':' ' }`}>Bread and Juice</li>
                <li onClick={()=> closeSelect('Milks and Dairies',11)}className={`{$selectindex===11 ? 'active':' ' }`}>Milks and Dairies</li>
                <li onClick={()=> closeSelect('Bread and Juice',12)}className={`{$selectindex===12 ? 'active':' ' }`}>Bread and Juice</li>
                 */}
            </ul>
            
                             
                    </div>   
                 
            
                </div>

            }

         
       
         

          </div>
        
  
        
        </>
    )
}

export default Selectdrop
