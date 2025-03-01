import React from 'react'

const About = () => {
  return (
    <div className="p-6 w-full flex items-center justify-center flex-col">
      
      {/* { About Us } */}
      <div className="max-w-7xl bg-amber-100 px-12 py-5 mt-2 mb-8 rounded-lg flex flex-col items-center">
        <div className='text-3xl font-semibold pb-4 md:pb-2'>About Us</div>
        <div className='flex flex-col gap-y-5 md:grid md:grid-cols-2'>
          <img className='place-self-center rounded-xl w-auto h-70 md:h-[90%] object-cover' src='https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2023/03/05/food-categoriesjpg-20230305103538.jpg' alt='About Us' />
          <div className='text-md px-12 py-auto place-self-center text-center md:text-start'>
            <p>Lorem ipsum dolor sit amet. Aut voluptatem sunt ad optio nemo et quia inventore ut optio nesciunt. Est explicabo rerum ad harum culpa non culpa adipisci. A alias perferendis ea commodi fugiat est error quidem eum rerum consequatur vel quae exercitationem ut esse nulla qui deserunt eius! Aut obcaecati provident in laudantium quidem in earum explicabo rem sint numquam non voluptas voluptas. Sit neque galisum et praesentium numquam id libero consequatur vel facere fugit qui odit quae. Aut minima sapiente ut cupiditate nemo ad repellat dolorem et reprehenderit doloribus. Eos nulla repellat qui iure ipsa eum laudantium ipsa 33 totam minima! Et dolor quisquam non ducimus velit aut optio iusto et recusandae vitae. Sed consequatur obcaecati ut sint consequatur non iste repellendus eum dolor eveniet. Et laboriosam quia est minus omnis et amet veritatis.
            </p>
          </div>
        </div>
      </div>

      {/* Freaky Jane */}
      <div className="max-w-7xl w-full h-[50vh] bg-cover bg-[url(/ZAMN2.png)] md:bg-[url(/ZAMN.png)] p-8 border-transparent mx-auto self-stretch md:grid md:grid-cols-5">
        <div className='md:col-span-2'></div>
        <div className="self-center place-self-end lg:place-self-center translate-y-87 md:translate-y-0 md:w-9/12 lg:w-11/12 bg-white bg-opacity-50 rounded-lg p-6 md:col-span-3">
          <div className='border-b-amber-700 border-b-4 pb-3'>
            <div className="text-2xl font-semibold text-black">Meet the Creator:</div>
            <div className="text-2xl font-semibold text-black">Freaky Jane</div>
          </div>
          <div className='text-md pt-3'>
            <p>I'm the one who shared the recipes and voice behind Teras Rumah Nenek. I hope anyone can make delicious food with daily ingredients even if you're busy and living up frugal-life.</p>
          </div>
        </div>
      </div>
      <div className='max-w-7xl w-full h-[35vh] bg-[#013748] md:w-0 md:h-0'></div>

    </div>
  )
}

export default About
