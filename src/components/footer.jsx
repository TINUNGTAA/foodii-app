

import assets from "../assets/assets";

function Footer(){
    return(
        <section className="  lg:px-28 bg-gray-100 px-10">
            <div className="flex gap-[120px]">
                {/* left */}
            < div className="flex flex-1  flex-col">
            
            <div className="flex items-center gap-2">
          <span className="text-3xl font-bold bg-green-500 border px-2 rounded-lg text-white">F</span>
          <img src={assets.icon2} alt="icon" />
        </div>

                <div className="mt-6">
                    <p className="text-xl  lg:text-3xl text-gray-600 ">Savor the artistry where every dish is a culinary masterpiece</p>
                </div>

            </div>


          <div className="flex">
            <div className="px-12">
            <ul className="text-gray-500 text-xl space-y-6 ">
                <li className="font-bold text-2xl text-black mb-6">Useful links</li>
                <li ><a href="#">About us</a></li>
                <li ><a href="#">Events</a></li>
                <li ><a href="#">Blogs</a></li>
                <li ><a href="#">FQA</a></li>
                
            </ul>
            </div>
           
           <div className="px-12">
           <ul className="text-gray-500 text-xl space-y-6 ">
                <li className="font-bold text-2xl text-black mb-6">Useful links</li>
                <li ><a href="#">Home</a></li>
                <li ><a href="#">Offer</a></li>
                <li ><a href="#">Menus</a></li>
                <li ><a href="#">Reservation</a></li>
                
            </ul>
           </div>

           <div className="px-12">
           <ul className="text-gray-500 text-xl space-y-6 ">
                <li className="font-bold text-2xl text-black mb-6" >Contacts Us</li>
                <li ><a href="#">example@email.com</a></li>
                <li ><a href="#">+64 958 248 966</a></li>
                <li ><a href="#">Socila media</a></li>
                
                
            </ul>
           </div>

            

          </div>


            </div>

            <div className="flex mt-12 items-center py-6  ">
                <div className="flex flex-1 gap-6  ">
                <a href="#" className="cursor-pointer"><img src= {assets.facebook} className=" bg-primary p-3 rounded-full"/> </a>
                  <a href="#" className="cursor-pointer"><img src= {assets.insta} className="bg-[#EDFFEF] p-2 rounded-full"/></a>  
                 <a href="#" className="cursor-pointer"><img src= {assets.twitter} className="bg-[#EDFFEF] p-2 rounded-full"/></a>  
                <a href="#" className="cursor-pointer"><img src= {assets.youtube} className="bg-[#EDFFEF] p-2 rounded-full"/></a>    
                </div>


                <div className="flex flex-1">
                     
                    <p className="text-xl px-3">Copyright &copy; {new Date().getFullYear()} Dscode | All right rights </p>

                </div>

            </div>
        </section>
    )
} export default Footer;