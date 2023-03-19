import React,{useState, useEffect} from 'react'
import axios from 'axios';

const News = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.newscatcherapi.com/v2/latest_headlines', {
      params: {
        countries: 'pl', topic: 'news', page: '1'
      },
      headers: {
        "Access-Control-Allow-Origin": '*',
        'x-api-key': `GCTLiIPqEnQwll6ycKmWnigy94frBROcuy_RFrzCBd0`
      }
    })
      .then(res => {
        const data = res.data
        const articles = data.articles
       
        setData(articles)
        console.log(articles[1])
      })
      .catch(err => { console.log(err) })
  }, []);


  return (
    <div className="mx-40 md:mx-10 sm:mx-10 sm:mt-0 mt-5 text-black">
      {data.filter(item => item.author != 'Wykop Sp. Z O.O.').map(item =>
        <div key={item.id} className="flex justify-start gap-10 px-10 py-5 sm:py-0 sm items-center text-center bg-gray-50 text-black border-b-2 border-gray-200">

          
          <div className="flex gap-10 items-center">
            <div className="w-60 sm:hidden">
              <img src={item.media} alt="media" className="rounded-xl"/>
            </div>
            <div className="text-left w-[80%]">
              <div className="flex gap-4 capitalize font-bold">
                <p className="text-blue-500">{item.topic}</p>
                <p>{item.author}</p>
              </div>
              <a href={item.link} className="text-4xl sm:text-lg font-bold hover:text-blue-500 hover:cursor-pointer py-2">{item.title}</a>
              <p className="py-2">{item.excerpt > 10 ? item.excerpt : null}</p>
              <p>{item.published_date}</p>
            </div>
          </div>
           
        </div>
      )} 
    </div>
  )
}

export default News
