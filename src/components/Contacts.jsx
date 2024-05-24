import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import Footer from './Footer'

function Contacts() {
  return (
    <div>
        <Header/>
        <HeaderHome/>

        <div className='flex mx-5 xl:mx-10 2xl:mx-20 lg:mx-10 lg:mt-20 mt-10 mb-10   '>
          <div className='flex    justify-around '>
          <div className='text-gray-600'>Home</div>
          <div className='mx-2'>/</div>
          <div>Contacts</div>
          </div>
        </div>

    <div className='lg:flex lg:items-baseline mb-20 xl:mb-40 '>
       <div className='2xl:mx-20 xl:mx-10 mx-5 shadow-sm  lg:mr-20'>
            <div>
                <form action="">
                    <div className=' md:flex justify-center  '>
                         <div className='flex-1'><input type="text" placeholder='Your Name *' className='pl-4 py-2 rounded-sm mb-4 md:w-[95%] md:mr-2 w-full' /></div>
                         <div className='flex-1'><input type="text" placeholder='Your Email *'  className='pl-4  py-2 rounded-sm mb-4 md:w-[95%] md:mr-2 w-full '/></div>
                         <div className='flex-1'><input type="text" placeholder='Your Phone *'  className='pl-4 py-2 rounded-sm mb-4 md:w-full w-full '/></div>
                    </div>
                    <div >
                    <div><input type="text" placeholder='Your Message *'  className='pl-4 py-2 rounded-sm mb-4  pb-60 w-full '/></div>

                    </div>
                <div className='flex justify-end  md:mx-0'>
                <button className='bg-sammy px-8 py-2 text-white rounded-sm text-lg font-medium'>Send Message</button>

                </div>

                </form>
            </div>
        </div>


        <div className='mx-5 my-20 md:my-0'>
           <div className='bg-purpl-500 md:px-40 lg:px-0'>
           <div className='md:mb-10 md:mt-6  '>
                <div className=' flex items-center'>
                    <div className='mr-3'><img src="/contact_phone.svg" alt="" /></div>
                    <div>Call To Us</div>
                </div>
                <p className='py-2'>We are available 24/7, 7 days a week.</p>
                <p className='py-2'>Phone: +8801611112222</p>
            </div>
           </div>
            <div className='border-b-2 border-gray-300 my-10 sm:my-0 md:mb-10 md:w-1/2 md:flex mx-auto  lg:w-full'></div>
            <div className='md:px-40 lg:px-0'>
                <div className='flex items-center'>
                    <div className='mr-3'><img src="/contacts_email.svg" alt="" /></div>
                    <div>Write To Us</div>
                </div>
                <p className='py-4'>Fill out our form and we will contact you within 24 hours.</p>
                <p className='py-2'>Emails: customer@exclusive.com</p>
                <p className='py-2'>Emails: support@exclusive.com</p>
            </div>
        </div>

       </div>
        <Footer/>
    </div>
  )
}

export default Contacts