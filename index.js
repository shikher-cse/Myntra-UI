import React  from  "react";
import ReactDOM from "react-dom";
import "./file.css";



const Navbar=()=>{
  return(
    <div class= "navbar">
      <img  src ="http://t0.gstatic.com/images?q=tbn:ANd9GcR46hc6ARTHBMOhiVLmIjx2XjomcFqFkdFAje05lglAk9SwIlh6"
      alt ="MyntraLogo" class ="navbar_buttons_images"/>
      <button type ="button" class ="navbar_buttons" id ="navbar_buttons_men" >MEN</button>
      <button type ="button" class ="navbar_buttons" id ="navbar_buttons_women">WOMEN</button>
      <button type ="button" class ="navbar_buttons" id ="navbar_buttons_kids">KIDS</button>
      <button type ="button" class ="navbar_buttons" id ="navbar_buttons_homes">HOME & LIVING</button>
      <button type ="button" class ="navbar_buttons" id ="navbar_buttons_beauty">BEAUTY</button>
      <button type ="button" class ="navbar_buttons" id="navbar_buttons_studio">STUDIO<sup class="sup">NEW</sup></button>
      <button type ="search" class ="navbar_buttons" id ="navbar_buttons_search"></button>
      <input type ="text" class ="navbar_buttons"
      placeholder="Search for products,brands and more" id = "navbar_buttons_searchbox"></input>
    </div>
  )
}
const Container=()=>{
  return(
    <div>
    <div class ="container">
      <button type ="button" class ="container_button_left" id ="container_button_left_first">Flat<br/><p class="p1">80% 0ff</p></button>
      <button type ="button" class ="container_button_left" id ="container_button_left_second">Flat<br/><p class="p1">80% 0ff</p></button>
      <button type ="button" class ="container_button_left" id ="container_button_left_third">Flat<br/><p class="p1">80% 0ff</p></button>
      <button type ="button" class ="container_button_right" id ="container_button_right_first">Flat<br/><p class="p1">80% 0ff</p></button>
      <button type ="button" class ="container_button_right" id ="container_button_right_second">Flat<br/><p class="p1">80% 0ff</p></button>
      <button type ="button" class ="container_button_right" id ="container_buttonright_third">Flat<br/><p class="p1">80% 0ff</p></button>
      </div>
      <div class ="image_button">
      <button type ="button" class ="container_button_left_image1" id ="d_image"></button>
      <button type ="button" class ="container_button_left_image2" id ="d_image"></button>
      <button type ="button" class ="container_button_left_image3" id ="d_image"></button>
      <button type ="button" class ="container_button_right_image1" id ="d_image"></button>
      <button type ="button" class ="container_button_right_image2" id ="d_image"></button>
      <button type ="button" class ="container_button_right_image3" id ="d_image"></button>
      </div>
    </div>
  )
}
const Product =[

{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/46981fb5-0bce-4374-bd23-2f856fc72d1e1641702713475-Spaces-_Romee_-_more.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/8beb32fb-d897-4060-a6ab-ef7c1d3b52881641966742187-Cortina-_Alina_Decor-_Sej_by_Nisha_Gupta_-_more.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/4423a2c3-9471-4e1b-a29e-7a0b3b4aca201641702712802-DB-_Clovia.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/b6c006e4-50f8-4af4-b637-0b66a2c6202f1642129866286-3.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/12e631d4-307f-4f40-8677-7ad21751fe8e1642129866276-4.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/b32e177c-0343-4e0a-8211-21d80d155ab71641702713243-Philips.jpg"
},
{
Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/0fc5470b-50db-4c0d-a8da-66d70cd0a4201641702713195-Paco_-_CH_.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/38083860-05b6-4e60-84f7-e33ba4c83a541641702713105-Maybelline.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/0c6a01c0-e063-4100-a62b-5e5e4dce5cde1641966742792-Rubans.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/6080a4a2-d3ce-43c8-a132-e158f7b6b3451642130663828-26.jpg"
}

]
const Prod =({Images})=>{
  return(
    <div class= "product_container">
     <img  src ={Images} alt ="Product_Images" class ="x"/>
    </div>
  )
}
const Winter=[
  {
   Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/5046ca81-d40b-4669-99ac-8ca35fa1e06a1641884921452-RTF-Winterwear_Pantaloons.jpg"
  },
  {
    Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/378d6fae-cedb-4006-bb4e-d3805a9446fd1641884921431-RTF-Winterwear_Mango_H_M.jpg"
  },
  {
    Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/2f9f27ab-5d79-46ac-beeb-487d9cb4fb271641884921417-RTF-Winterwear_HRx.jpg"
  },
  {
    Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/5b7a32cd-715f-4d39-b8ab-cfb8a96426251641884921511-RTF-Winterwear_Wrogn_USPA.jpg"
  },
  {
    Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/9677a355-d48f-44ca-a037-fa94400161cc1641884921466-RTF-Winterwear_Roadster.jpg"
  }
]
const Win =({Images})=>{
  return(
    <div class ="winterImages">
      <img src ={Images} alt ="WinterImages" class="wi"/>
    </div>
  )
}
const Topbrands=[{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/2c1ff1c8-ac34-428f-8b0c-4bbfbf75bfe51641877277850-Mothercare.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/2218abb9-e40f-4e43-abce-dfb022e34f671641877277825-Levis.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/3a7dbe60-6aab-4d5e-8b05-aff113dba13e1641877277893-UCB_1.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/f559ad84-915d-470b-83b1-cf7c889a6a391641877277877-U.S._Polo_Assn..jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/f559ad84-915d-470b-83b1-cf7c889a6a391641877277877-U.S._Polo_Assn..jpg"
}
]
 const Toppbrands =({Images})=>{
   return(
     <div>
       <img src ={Images} alt ="topBrandss" class="tb"/>
     </div>
   )
 }

const Mostloved=[{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/e29cd784-b6ee-4e2e-9807-d631c5d062cb1642011117202-Libas_HP-Top-Tile.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/c46aecf8-af8b-438e-8e0a-82a4c2671c651642011117216-Vishudh_HP-Top-Tile.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/901bb1a2-6d87-44b0-af68-33e3949dfedf1642057411431-levis.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/0f5b184b-4228-49e8-b5b9-5f66944ff8c81642057411413-fm.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/35a1bbe4-c633-4844-87f3-d86c325fcc3f1642057411421-highlander.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/ce6a4f0f-d21c-4cb4-92cd-ceff11d539901642050725137-Loreal.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/49d665a9-daf6-4bf4-9534-803cf18731b61642052041267-Lakme_HP-Tile_Jan-15_Revised.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/6da9d88e-fea2-4dd3-8036-b1d2b690b3c31642057411378-addias.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/41894ee0-a61d-4bf9-a8b7-8562b088f5c41642008846967-Sassafras-Top-Tile.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/0b6d70ea-809b-4a83-88fa-edfac575418f1642070092339-image_jpeg1610275137.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/72647bad-dd76-447d-9eab-b5254cb989631642069093033-boat-home.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/322b2df8-3962-46df-8584-2b3c7266489a1642059032671-Hp-tiles.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/a020270d-e6e6-478e-8543-f558d5451be91642070092355-image_jpeg771926449.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/42edad3e-03c5-492c-af5f-3b9fa2dafb391641904807658-max-1.jpg"
},
{
  Images:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/01decb45-54d3-4d8a-8042-f7f58dfbc78f1642064707706-ck.jpg"
}
]
const Most =({Images})=>{
  return(
    <div >
      <img src ={Images} alt ="Most Loved Brands" class ="mlb"/>
    </div>
  )
}


const Citibank =(props)=>{
  return(
    <div>
      <div class ="citi_bank"></div>
      <div class ="citi_bank2"></div>
      <button type="button" class="citi_button"></button>
      <div class ="product_container"  >
        {Product.map((x) =>{
          return(
            <div class ="x">
            <Prod {...x}/>
            </div>
          )
        })}
      </div>
      <button type ="button" class ="citi_button2"></button>
      <div class ="winter_container">
        {Winter.map((wins)=>{
          return(
            <Win {...wins}/>
          )
        })}
      </div>
      <button type ="button" class="topbrands"/>
      <div class="topbrands_container">
        {Topbrands.map((tp)=>{
          return(
            <Toppbrands {...tp}/>
          )
        })}
      </div>

      <button type ="button " class ="mostlovedbrands"/>
      <div class ="mostloved_container">
        {Mostloved.map((ms)=>{
          return(
            <Most {...ms}/>
          )
        })}

      </div>


      </div>
  )
}




// const Containerr=()=>{
//   return(
//     <div class ="containerr">

//     </div>
//   )
// }







function Display(){
  return(
    <div>
          <Container/>
          <Citibank/>
          <Navbar/>
   
    </div>
  )
}


ReactDOM.render(<Display/>,   document.getElementById("root"));