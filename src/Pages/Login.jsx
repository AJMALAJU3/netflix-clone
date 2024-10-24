import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import footer from '../Assets/footer.png'

function Login() {
  const [check, setCheck] = useState(false)
  return (
    <div className="relative w-screen h-screen">
      
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg 1800w"
        alt=""
      />
      <div className='bg-black bg-opacity-50 w-full h-full'>
        <div className='  mx-36'>

          <div className=' p-6'>
            <img src={logo} alt="Logo" className="w-40 h-auto" />
          </div>


        </div>

        <div className='flex justify-center h-max'>
          <div className=' bg-black bg-opacity-70 w-[450px]'>
            <div className='p-16'>
              <div className='pb-10 '>
                <h1 className='text-white text-3xl font-semibold text-left'>Sign In</h1>
              </div>
              <div className='gap-y-4 flex-col flex'>
                <input type="text" className='bg-transparent p-4 w-80 border-stone-500 border rounded-sm focus:border-red-600 focus:outline-none' placeholder='Email or mobile number' />
                <input type="text" className='bg-transparent p-4 w-80 border-stone-500 border rounded-sm focus:border-red-600 focus:outline-none' placeholder='Password' />
                <button className='bg-red-600 hover:bg-red-700 text-white rounded-sm py-2'>Sign In</button>
              </div>
              <div className='p-4'><h3 className='text-stone-400 '>OR</h3></div>
              <div className='flex flex-col'>
                <button className='bg-stone-700 hover:bg-opacity-80 text-white rounded-sm py-2'>Use a sign-in code</button>
              </div>
              <div className='p-4'><h4 className='text-stone-100 '>Forget password?</h4></div>
              <div className='flex flex-col'>
                <div className="flex items-center">
                  <label className="relative flex items-center cursor-pointer">
                    <input onClick={() => setCheck((p) => !p)}
                      type="checkbox"
                      className="absolute opacity-0 cursor-pointer"
                    />
                    <div

                      className={`flex items-center justify-center w-5 h-5 border border-white rounded-sm ${check ? 'bg-white' : 'bg-transparent'}`}
                    >
                      <div className={`${check ? 'flex' : 'hidden'} items-center justify-center text-black text-xl`}>
                        ✓
                      </div>
                    </div>
                  </label>
                  <span className="ml-2 text-white">Remember me</span>
                  <style jsx>{`
                      input:checked + div .tick {
                      display: flex; // Show the tick mark when checked
                      }
                      `}</style>
                </div>
              </div>
              <div className='p-4 flex text-lg items-center'><h2 className='text-stone-400 '>New to netflix?</h2><a className='text-white hover:underline  ml-2 p-0' href='/'>Sign up now</a></div>
              <div className='p-4 text-stone-600 text-xs text-start'><p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/" className='text-blue-600'>Learn more.</a></p></div>

            </div>

          </div>
        </div>
      </div>

      <div >
        <img src={footer} alt="" />
      </div>

    </div>

  )
}

export default Login
