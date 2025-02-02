import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import Footer from './Footer'

function CheckOut() {
  return (
    <div>
        <Header/>
        <HeaderHome/>

        <div className='flex  mx-5 lg:mx-20 2xl:mx-60 lg:mt-20 mt-10 mb-10 xl:px-5 md:text-xl '>
          <div className='flex   justify-around '>
          <div><span className='hidden sm:inline'>My</span> Account</div>
          <div className=''>/</div>
          <div>Product</div>
          <div className=''>/</div>
          <div><span className='hidden md:inline'>View</span> Cart</div>
          <div className=''>/</div>
          <div>CheckOut</div>
          

          </div>
        </div>

































        <div className=''>
        <h1 className='xl:mx-20 xl:px-5 mx-5 text-3xl mb-10 '>Billing Details</h1>

<div className='xl:flex xl:mx-20 xl:mb-40'>
    {/* billing details form */}
    <div className='mx-5 xl:mr-40'>
        <div className='xl:w-[475px] 2xl:w-[700px] mb-10'>
            <p className='mb-2 text-gray-500 md:text-xl'>First Name <span className='text-happy'>*</span></p>
            <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

        </div>
        <div className=' mb-10'>
        <p className='mb-2 text-gray-500 md:text-xl'>Company Name</p>
        <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

        </div>
        <div className=' mb-10'>
        <p className='mb-2 text-gray-500 md:text-xl'>Street Address <span className='text-happy'>*</span></p>
        <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

        </div>
        <div className=' mb-10'>
        <p className='mb-2 text-gray-500 md:text-xl'> Apartment, floor, etc. (optional)</p>
        <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />
        </div>
        <div className=' mb-10 md:text-xl'>
        <p className='mb-2 text-gray-500'>Town/City <span className='text-happy'>*</span></p>
        <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

        </div>
        <div className=' mb-10 md:text-xl'>
        <p className='mb-2 text-gray-500'> Phone Number <span className='text-happy'>*</span></p>
        <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

        </div>
        <div className=' mb-10 md:text-xl'>
        <p className='mb-2 text-gray-500'>Email Address <span className='text-happy'>*</span></p>
        <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />
        </div>
        <div className='flex items-center'>
            <div className='mr-2'><img src="checkOut_checkbox.svg" alt="" /></div>
           <div className=''>Save this information <span className='hidden sm:inline'>for faster check-out next time</span>  </div>
        </div>
    </div>

    {/* product details */}

    <div className='mx-5 my-10 xl:w-2/5 xl:mx-2'>
      {/* lcd monitor */}
      <div className='flex items-center justify-between mb-3'>
      <div className='flex items-center my-8'>
        <div className='mr-2 xl:mr-4'><img src="gamer_cart.svg" alt="" /></div>
        <div className='md:text-xl xl:text-2xl font-baseline'>LCD Monitor</div>
      </div>
      <p className='md:text-xl xl:text-2xl'>$650</p>
      </div>
      <div className='flex items-center justify-between mb-10'>
      <div className='flex items-center '>
        <div className='mr-2 xl:mr-4'><img src="monitor_cart.svg" alt="" /></div>
        <div className='md:text-xl xl:text-2xl font-baseline'>H1 Gamepad</div>
      </div>
      <p className='md:text-xl xl:text-2xl'>$650</p>
      </div>
      {/* gamepad */}
      

      {/* Subtotal */}
      <div className='flex items-center justify-between border-b-2 mt-2 pb-4 mb-4'>
        <div className='md:text-xl xl:text-2xl font-baseline'>SubTotal:</div>
        <div className='md:text-xl xl:text-2xl'>$1750</div>
      </div>

      {/* shipping */}
      <div className='flex items-center justify-between border-b-2 pb-4 '>
        <div className='md:text-xl xl:text-2xl font-baseline'>Shipping:</div>
        <div className='md:text-xl xl:text-2xl'>Free</div>
      </div>

      {/* total */}
      <div className='flex items-center justify-between mt-4 mb-4'>
        <div className='md:text-xl xl:text-2xl font-baseline'>Total:</div>
        <div className='md:text-xl xl:text-2xl'>$1750</div>
      </div>

      {/* bank and methods of payment */}
      <div className='flex items-center justify-between my-10'>
        <div><input type="radio" name="" id="" className='mr-4' /><span className='md:text-xl xl:text-2xl font-baseline'>Bank</span></div>
        <div><img src="check_out_bank.svg" alt="" /></div>
      </div>

      {/* cash on delivery */}
      <div className='my-10'>
        <input type="radio" className='mr-4' /> <span className='md:text-xl xl:text-2xl font-baseline'>Cash On delivery</span> 
      </div>

      <div className='my-2 md:flex  xl:w-[530px] 2xl:w-[600px] xl:my-10 mb-10'>
        <div className='mb-2 md:mr-2 xl:w-7/12'><input type="text" placeholder='Coupon Code' className='px-4 py-4 w-full text-center md:text-start rounded-md md:text-xl border border-black bg-transparent md:px-10' /></div>
        <div className='xl:w-5/12'><button className='bg-sammy text-white px-5 py-4  rounded-md md:text-xl w-full '>Apply Coupon</button></div>
      </div>

      {/* coupon code */}
      <div></div>

      <button className='bg-sammy text-white px-5 py-3 md:text-xl font-medium rounded-md hover:bg-hover'>Place Order</button>

    </div>

</div>
        </div>

        <Footer/>
    </div>
  )
}

export default CheckOut