import { useState, useEffect } from "react";
import axios from "axios";

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with your actual MockAPI URLs
  const productApiUrl = "https://dummyjson.com/c/7e08-1f7b-429d-b8c4";
  const categoryApiUrl = "https://dummyjson.com/c/cb69-0603-4ffa-ae61";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(productApiUrl);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(categoryApiUrl);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false); // Assuming both fetches are done here. You might want to handle loading differently for each.
      }
    };

    fetchProducts();
    fetchCategories();
  }, [productApiUrl, categoryApiUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {categories.map((category) => {
        // Filter products belonging to the current category
        const categoryProducts = products.filter(
          (product) => product.category === category.id
        );

        return (
          <div key={category.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categoryProducts.length > 0 ? (
                categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-lg p-4 shadow-md bg-white"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-md"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">₦{product.price}</p>
                    <p className="text-gray-500">{product.stock} in stock</p>
                    <p className="text-gray-500 text-sm">
                      {product.description}
                    </p>
                  </div>
                ))
              ) : (
                <p>No products available in this category.</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDisplay;
