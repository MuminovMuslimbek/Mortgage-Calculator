import React, { useRef, useState } from 'react'
import HomeImg from './assets/home.svg'
import BtnCalcul from './assets/btn.svg'

const App = () => {
  const [mortage, setMortage] = useState(null)
  const [persent, setPersent] = useState(null)
  const [term, setTerm] = useState(null)

  function onSubmit() {
    mortage
  }
  return (
    <div className='flex justify-center items-center h-full'>
      <div className="max-w-[1008px] w-full shadow-xl flex bg-white rounded-[24px]">
        <div className="bg-white p-10 flex flex-col rounded-tl-[24px] rounded-bl-[24px] gap-10 ">
          <div className="flex justify-between items-center">
            <h1 className='text-[24px] text-[#133041] font-semibold'>Mortgage Calculator</h1>
            <button className='text-[#4E6E7E] text-[16px] underline'>Clear All</button>
          </div>
          <div className='flex flex-col gap-6 max-w-[504px] w-full'>
            <div className="flex flex-col gap-3">
              <label htmlFor="amount" className='text-[#4E6E7E] text-[16px] font-medium'>Mortgage Amount</label>
              <div className='flex w-full border-[1px] border-solid border-[#6B94A8] rounded-[4px] gap-2 '>
                <div className='text-[#4E6E7E] text-[18px] font-bold py-[12.5px] px-[16px] rounded-[4px] bg-[#E4F4FD]'>£</div>
                <input onChange={setMortage} className='px-2 outline-none w-full rounded-[4px]' id='amount' type="number" />
              </div>
            </div>
            <div className="flex gap-[24px] w-full">
              <div className="flex flex-col gap-3">
                <label htmlFor="term" className='text-[#4E6E7E] text-[16px] font-medium'>Mortgage Term</label>
                <div className="flex w-full border-[1px] border-solid border-[#6B94A8] rounded-[4px] gap-2 ">
                  <input onChange={setPersent} className='px-3 outline-none w-full rounded-[4px]' id='term' type="number" />
                  <div className='text-[#4E6E7E] text-[18px] font-bold py-[12.5px] px-[16px] rounded-[4px] bg-[#E4F4FD]'>years</div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="rate" className='text-[#4E6E7E] text-[16px] font-medium'>Interest Rate</label>
                <div className="flex w-full border-[1px] border-solid border-[#6B94A8] rounded-[4px] gap-2 ">
                  <input onChange={setTerm} className='px-3 outline-none w-full rounded-[4px]' id='rate' type="number" />
                  <div className='text-[#4E6E7E] text-[18px] font-bold py-[12.5px] px-[16px] rounded-[4px] bg-[#E4F4FD]'>%</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h3 className='text-[#4E6E7E] text-[16px] font-medium'>Mortgage Type</h3>
              <label for="repayment" className="flex items-center  w-full border-[1px] border-solid border-[#6B94A8] rounded-[4px] gap-4 cursor-pointer py-[12px] px-[16px] ">
                <input className='w-5 h-5 border-1 border-[#6B94A8] checked:bg-[#6B94A8] cursor-pointer' type="radio" id="repayment" name="mortgageType" />
                <label className='text-[#133041] cursor-pointer text-[18px] font-bold' for="repayment">Repayment</label>
              </label>
              <label for="interestOnly" className="flex items-center  w-full border-[1px] border-solid border-[#6B94A8] rounded-[4px] gap-4 cursor-pointer py-[12px] px-[16px] ">
                <input className='w-5 h-5 border-1 border-[#6B94A8] checked:bg-[#6B94A8] cursor-pointer' type="radio" id="interestOnly" name="mortgageType" />
                <label className='text-[#133041] cursor-pointer text-[18px] font-bold' for="interestOnly">Interest Only</label>
              </label>
            </div>
          </div>
          <button onSubmit={onSubmit} className='flex items-center gap-3 py-[16px] px-[40px] bg-[#D8DB2F] max-w-[314px] w-full  rounded-[999px] active:scale-95 transition-[0.3s]'>
            <img
              className='pointer-events-none text-[18px] text-[#133041] font-bold'
              src={BtnCalcul} />
            Calculate Repayments
          </button>
        </div>
        <div className="bg-[#133041] hidden flex-col justify-center max-w-[504px] w-full p-10 items-center text-center gap-4 rounded-bl-[80px] rounded-tr-[24px] rounded-br-[24px]">
          <img src={HomeImg} className='max-w-[192px] w-full h-[192px] pointer-events-none' />
          <h3 className='text-[24px] text-white font-semibold'>Results shown here</h3>
          <p className='text-[16px] text-[#9ABED5] font-medium leading-6 '>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
        </div>
        <div className="bg-[#133041] flex flex-col justify-center max-w-[504px] w-full p-10 items-start gap-10 rounded-bl-[80px] rounded-tr-[24px] rounded-br-[24px]">
          <div className='flex flex-col g-4'>
            <h3 className='text-[24px] text-white font-semibold'>Your results</h3>
            <p className='text-[16px] text-[#9ABED5] font-medium leading-6 '>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
          </div>
          <div className='bg-[#00000040] border-t-4 border-lime-500 rounded-[8px] flex flex-col p-8 w-full gap-[22px]'>
            <div className='flex flex-col items-start gap-2'>
              <h5 className='text-[#9ABED5] text-4 font-medium'>Your monthly repayments</h5>
              <p className='text-[#D8DB2F] text-[56px] font-bold'>£1,797.74</p>
            </div>
            <div className='h-[1px] w-360 bg-[#9ABED540] rounded-[8px]'></div>
            <div className='flex flex-col items-start gap-2'>
              <h5 className='text-[#9ABED5] text-4 font-medium'>Total you'll repay over the term</h5>
              <p className='text-[#FFFFFF] text-[24px] font-bold'>£539,322.94</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
