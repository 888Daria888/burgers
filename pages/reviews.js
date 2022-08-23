import Head from "next/head";




const Reviews = ({reviews}) => {
console.log(reviews);


   return (
      <>
         <Head>
            <title>Жирные бургеры | Отзывы клиентов</title>
            <meta name="title" content="Отзывы клиентов" />
         </Head>
         <div>
            <h1>Отзывы клиентов</h1>
            <div className="reviews">
               {!!reviews.length && reviews.slice(0,20).map(res => {
                  return (
                     <div key ={res.id} className='review'>
                        {res.id}{' '}
                        {`${res.body.slice(0,90)}...`}
                     </div>
                  )
               })}
            </div>
         </div>
      </>
   )
}

//функия, которая позволяет нам отобразить элементы из api и хранить их не только на стороне клиента, а еще и на сервере, например для поисковых страниц
export async function getServerSideProps(){
   const res = await fetch('https://jsonplaceholder.typicode.com/comments')
         const data = await res.json();
         return{
            props: {
               reviews: data.slice(0,20)
            }
         }
}
export default Reviews;