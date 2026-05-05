import Image from "next/image";


const getCategories = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data;
    
}


export default async function Home() {
  const categories = await getCategories()
  console.log("All Categories, ",categories.news_category);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-12">

      <div className="col-span-3">
        <h2 className="text-xl font-semibold text-gray-600">All Categories</h2>
        <ul className="space-y-2 mt-4">
          {
            categories.news_category.map(category=><li key={category.category_name} className="bg-slate-200 p-2 rounded-md text-lg">{category.category_name}</li>)
          }
        </ul>
      </div>



      <div className="col-span-6 bg-purple-300">
        <h2>All News</h2>
      </div>


      <div className="col-span-3 bg-red-300">
        <h2>All Social</h2>
      </div>

    </div>
  );
}
