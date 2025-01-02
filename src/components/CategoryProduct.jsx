import { useEffect, useState } from "react";
import axios from "axios";

const CategoryProduct = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        //catgeoryURL
        const categoryUrl = await axios.get(
          "https://dummyjson.com/c/cb69-0603-4ffa-ae61"
        );
        setCategories(categoryUrl.data);

        //productURL
        const productUrl = await axios.get(
          "https://dummyjson.com/c/5c35-d730-44f3-9160"
        );
        setProducts(productUrl.data);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //filter cateogry products
  const groupedProducts = categories.map((category) => {
    return {
      ...category,
      products: products.filter(
        (product) => product.category === category.name
      ),
    };
  });

  return (
    <div className="mx-1 md:mx-8 mt-20 md:mt-40 mb-8 md:mb-20">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {groupedProducts.map((category) => (
            <div
              key={category.id}
              className="mt-8 border-r-2 border-l-2 border-b-2 border-[#FADC41]"
            >
              <h2 className="text-lg md:text-xl font-bold text-black p-2 bg-[#FADC41]">
                {category.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {category.products.length > 0 ? (
                  category.products.map((product) => (
                    <div
                      key={product.id}
                      className="product-item p-4 border rounded shadow-lg"
                    >
                      <img
                        className="w-full h-32 object-cover rounded"
                        src={product.image}
                        alt={product.name}
                      />
                      <h3 className="text-lg md:text-xl font-semibold mt-2 text-center">
                        {product.name}
                      </h3>
                      {/* <p className="text-xs md:text-sm text-gray-500 text-center">
                        {product.description}
                      </p> */}
                      <p className="mt-2 text-center font-bold text-gray-700">
                        Price: ₦{product.price}
                      </p>
                      {/* <p className="text-center">Stock: {product.stock}</p> */}
                      <p
                        className={`text-center ${
                          product.stock < 5 ? "text-red-500" : "text-gray-700"
                        }`}
                      >
                        Stock: {product.stock}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No products found in this category.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
