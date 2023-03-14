const api_key = "your_api_key_here";
const url = `http://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listPromotionProduct/${api_key}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Extract relevant data from the API response and categorize the products
        const products = data.result.products.map(product => ({
            name: product.productName,
            image: product.imageUrl,
            price: product.minPrice,
            description: product.description,
            category: product.categoryName // Categorize products based on their category attribute
        }));

        // Organize products by category
        const categories = {};
        products.forEach(product => {
            if (!categories[product.category]) {
                categories[product.category] = [];
            }
            categories[product.category].push(product);
        });

        // Display the products on the product.js page, organized by category
        for (const [category, products] of Object.entries(categories)) {
            // Use JavaScript to create HTML elements for each category and its products
            // and add them to the product.js page
        }
    })
    .catch(error => console.error(error));
