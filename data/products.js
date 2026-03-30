const products = [
    {
        id: 1,
        name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop",
        price: 348.00,
        rating: 4.8,
        reviewCount: 2341,
        description: "Industry-leading noise cancellation with Auto NC Optimizer. Crystal clear hands-free calling with 4 beamforming microphones. Up to 30-hour battery life with quick charging.",
        amazonUrl: "https://www.amazon.com/dp/B09XS7JWHH"
    },
    {
        id: 2,
        name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&h=500&fit=crop",
        price: 89.95,
        rating: 4.7,
        reviewCount: 5678,
        description: "7-in-1 functionality: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer. 6 quart capacity perfect for families.",
        amazonUrl: "https://www.amazon.com/dp/B00FLYWNYQ"
    },
    {
        id: 3,
        name: "Apple AirPods Pro (2nd Generation)",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&h=500&fit=crop",
        price: 249.00,
        rating: 4.9,
        reviewCount: 8923,
        description: "Active Noise Cancellation and Adaptive Transparency. Personalized Spatial Audio with dynamic head tracking. Touch control for media playback.",
        amazonUrl: "https://www.amazon.com/dp/B0D1XD1ZV3"
    },
    {
        id: 4,
        name: "Nike Air Max 270 Running Shoes",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
        price: 150.00,
        rating: 4.6,
        reviewCount: 3421,
        description: "Max Air unit in the heel provides exceptional cushioning. Breathable mesh upper for lightweight comfort. Rubber outsole for durable traction.",
        amazonUrl: "https://www.amazon.com/dp/B07BSHR3JW"
    },
    {
        id: 5,
        name: "Dyson V15 Detect Cordless Vacuum",
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&h=500&fit=crop",
        price: 749.99,
        rating: 4.8,
        reviewCount: 1876,
        description: "Reveals invisible dust with a laser. Piezo sensor counts particles 15,000 times a second. High Torque cleaner head for carpets and hard floors.",
        amazonUrl: "https://www.amazon.com/dp/B08PQ2KWHS"
    },
    {
        id: 6,
        name: "Yoga Mat with Alignment Lines",
        category: "Sports",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
        price: 34.99,
        rating: 4.5,
        reviewCount: 4532,
        description: "Extra thick 6mm for superior comfort. Alignment lines help proper positioning. Eco-friendly TPE material, non-slip surface.",
        amazonUrl: "https://www.amazon.com/dp/B07X5JBCLS"
    },
    {
        id: 7,
        name: "La Mer Moisturizing Cream",
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
        price: 380.00,
        rating: 4.9,
        reviewCount: 987,
        description: "Luxurious moisturizing cream with Miracle Broth. Penetrates deep to hydrate and renew. Perfect for all skin types.",
        amazonUrl: "https://www.amazon.com/dp/B0015SJJ4G"
    },
    {
        id: 8,
        name: "LEGO Star Wars Millennium Falcon",
        category: "Toys",
        image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=500&h=500&fit=crop",
        price: 849.99,
        rating: 4.9,
        reviewCount: 2341,
        description: "7541 pieces for ultimate building experience. Detailed interior with cockpit, cargo area, and more. For Star Wars fans ages 16+.",
        amazonUrl: "https://www.amazon.com/dp/B07YP3DN3W"
    },
    {
        id: 9,
        name: "Samsung 65\" QLED 4K Smart TV",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop",
        price: 1297.99,
        rating: 4.7,
        reviewCount: 1567,
        description: "Quantum Dot technology for over a billion colors. Object Tracking Sound for immersive audio. Smart Hub with streaming apps.",
        amazonUrl: "https://www.amazon.com/dp/B09SH9JGH9"
    },
    {
        id: 10,
        name: "Instant Pot Air Fryer",
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=500&h=500&fit=crop",
        price: 119.95,
        rating: 4.6,
        reviewCount: 3210,
        description: "6-in-1 appliance: air fryer, bake, roast, reheat, dehydrate, and proof. EvenCrisp technology for crispy results with little oil.",
        amazonUrl: "https://www.amazon.com/dp/B08GWGX4Y5"
    },
    {
        id: 11,
        name: "Fitbit Charge 5 Advanced Tracker",
        category: "Sports",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
        price: 149.95,
        rating: 4.4,
        reviewCount: 2890,
        description: "Built-in GPS, HR sensor, SpO2 monitor. Sleep tracking with sleep score. 7-day battery life. Amazon Alexa built-in.",
        amazonUrl: "https://www.amazon.com/dp/B0932QS3N7"
    },
    {
        id: 12,
        name: "Classic Leather Jacket",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        price: 199.99,
        rating: 4.5,
        reviewCount: 1234,
        description: "Genuine leather, timeless design. Quilted lining for warmth. Multiple pockets for convenience. Perfect for any season.",
        amazonUrl: "https://www.amazon.com/dp/B07ZPKF7VY"
    }
];
