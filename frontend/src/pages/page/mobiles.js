const mobiles = [
    {
        name: "Samsung Galaxy Note 10",
        brand: "Samsung",
        price: 48000,
        id: "985621",
        stock: 0,
        index: 1,
        description: "The Samsung Galaxy Note 10 features a stunning 6.3-inch Infinity-O display, a powerful Exynos 9825 processor, and an impressive triple-camera setup. With its S Pen stylus, it offers enhanced productivity and creativity. Its sleek design, top-notch performance, and versatile camera make it a flagship contender."
    },
    {
        name: "iPhone 11",
        brand: "Apple",
        price: 59900,
        id: "874512",
        stock: 15,
        index: 2,
        description: "The iPhone 11 boasts a 6.1-inch Liquid Retina display, the powerful A13 Bionic chip, and an advanced dual-camera system. With its exceptional battery life and stunning camera capabilities, it delivers an incredible smartphone experience. The sleek design and iOS ecosystem further enhance its appeal."
    },
    {
        name: "OnePlus 8T",
        brand: "OnePlus",
        price: 42999,
        id: "745896",
        stock: 8,
        index: 3,
        description: "The OnePlus 8T offers a 6.55-inch Fluid AMOLED display with a 120Hz refresh rate, providing smooth and immersive visuals. Powered by the Snapdragon 865 processor, it delivers exceptional performance. Its quad-camera setup, along with OxygenOS, ensures a premium user experience."
    },
    {
        name: "Google Pixel 6",
        brand: "Google",
        price: 79900,
        id: "159357",
        stock: 18,
        index: 5,
        description: "The Google Pixel 6 showcases a 6.4-inch OLED Smooth Display with a high refresh rate, offering a seamless user experience. Equipped with the Tensor chip, its AI capabilities enhance camera performance and overall device responsiveness. The dual-camera system, along with its clean Android experience, delivers exceptional usability and photography."
    },
    {
        name: "Sony Xperia 1 III",
        brand: "Sony",
        price: 119900,
        id: "753951",
        stock: 0,
        index: 8,
        description: "The Sony Xperia 1 III features a 6.5-inch 4K OLED display and is powered by the Snapdragon 888 processor, delivering top-tier performance. Its triple-camera system with ZEISS optics offers exceptional photography capabilities. With its 5G connectivity and sleek design, it's a premium choice for multimedia enthusiasts."
    },
    {
        name: "Xiaomi Redmi Note 10 Pro",
        brand: "Xiaomi",
        price: 17999,
        id: "632154",
        stock: 25,
        index: 5,
        description: "The Xiaomi Redmi Note 10 Pro boasts a 6.67-inch Super AMOLED display with a 120Hz refresh rate, providing vivid visuals. Powered by the Snapdragon 732G processor, it offers smooth performance. With its quad-camera system and long-lasting battery, it's a reliable choice for budget-conscious users."
    },
    {
        name: "Realme 8 Pro",
        brand: "Realme",
        price: 17999,
        id: "987654",
        stock: 20,
        index: 6,
        description: "The Realme 8 Pro features a 6.4-inch Super AMOLED display with a 60Hz refresh rate, delivering vibrant visuals. Powered by the Snapdragon 720G processor, it offers decent performance. Its quad-camera setup, along with a large battery, makes it a compelling option for photography enthusiasts."
    },
    {
        name: "LG Velvet",
        brand: "LG",
        price: 37990,
        id: "147258",
        stock: 10,
        index: 8,
        description: "The LG Velvet showcases a 6.8-inch P-OLED display, offering vivid colors and sharp visuals. Powered by the Snapdragon 765G processor, it balances performance and efficiency. Its triple-camera setup and sleek design, along with 5G connectivity, make it an attractive mid-range option."
    },
    {
        name: "Asus ROG Phone 5",
        brand: "Asus",
        price: 49999,
        id: "369852",
        stock: 8,
        index: 8,
        description: "The Asus ROG Phone 5 features a 6.78-inch AMOLED display with a 144Hz refresh rate, catering to gamers with smooth visuals. Powered by the Snapdragon 888 processor, it offers top-tier gaming performance. Its unique design, AirTrigger buttons, and robust gaming features make it a gaming-centric powerhouse."
    },
    {
        name: "Samsung Galaxy S21 Ultra",
        brand: "Samsung",
        price: 119999,
        id: "123456",
        stock: 7,
        index: 1,
        description: "The Samsung Galaxy S21 Ultra features a 6.8-inch Dynamic AMOLED display with a 120Hz refresh rate, providing stunning visuals. With its powerful Exynos 2100/Snapdragon 888 processor and a versatile quad-camera system, including a 108MP sensor, it delivers exceptional performance and photography capabilities."
    },
    {
        name: "Sony Xperia 5 III",
        brand: "Sony",
        price: 99999,
        id: "654321",
        stock: 10,
        index: 2,
        description: "The Sony Xperia 5 III boasts a 6.1-inch OLED display with a 120Hz refresh rate, offering a high-quality viewing experience. Powered by the Snapdragon 888 processor, it ensures top-tier performance. With its triple-camera setup and a compact design, it's an ideal choice for multimedia enthusiasts."
    },
    {
        name: "Google Pixel 6 Pro",
        brand: "Google",
        price: 89900,
        id: "987654",
        stock: 12,
        index: 3,
        description: "The Google Pixel 6 Pro showcases a 6.7-inch LTPO OLED display with a high refresh rate, providing smooth visuals. Equipped with the Tensor chip, its AI capabilities enhance camera performance and overall device responsiveness. The triple-camera system, along with clean Android experience, offers exceptional usability and photography."
    },
    {
        name: "Xiaomi Mi 11 Ultra",
        brand: "Xiaomi",
        price: 69999,
        id: "456789",
        stock: 8,
        index: 4,
        description: "The Xiaomi Mi 11 Ultra features a 6.81-inch AMOLED display with a 120Hz refresh rate, providing immersive visuals. Powered by the Snapdragon 888 processor and equipped with a versatile triple-camera setup, including a 50MP sensor, it offers top-notch performance and excellent photography capabilities."
    },
    {
        name: "OnePlus 9 Pro",
        brand: "OnePlus",
        price: 64999,
        id: "135792",
        stock: 15,
        index: 5,
        description: "The OnePlus 9 Pro offers a 6.7-inch Fluid AMOLED display with a 120Hz refresh rate, ensuring smooth visuals. Powered by the Snapdragon 888 processor and featuring a Hasselblad quad-camera system, it delivers exceptional performance and photography capabilities."
    },
    {
        name: "Motorola Edge 20 Pro",
        brand: "Motorola",
        price: 54999,
        id: "246801",
        stock: 9,
        index: 6,
        description: "The Motorola Edge 20 Pro features a 6.7-inch OLED display with a 144Hz refresh rate, providing a smooth viewing experience. Powered by the Snapdragon 870 processor and equipped with a triple-camera setup, including a 108MP sensor, it offers reliable performance and good photography capabilities."
    },
    {
        name: "Asus Zenfone 8 Flip",
        brand: "Asus",
        price: 64999,
        id: "112233",
        stock: 6,
        index: 2,
        description: "The Asus Zenfone 8 Flip showcases a 6.67-inch Super AMOLED display with a 90Hz refresh rate, delivering vibrant visuals. Powered by the Snapdragon 888 processor and featuring a unique flip camera system, it offers versatile photography options and a seamless display experience."
    },
    {
        name: "Realme GT Neo 2",
        brand: "Realme",
        price: 31999,
        id: "445566",
        stock: 11,
        index: 8,
        description: "The Realme GT Neo 2 offers a 6.62-inch Super AMOLED display with a 120Hz refresh rate, providing smooth and vibrant visuals. Powered by the Snapdragon 870 processor and featuring a triple-camera setup, it delivers reliable performance and decent photography capabilities at an affordable price."
    },
];




export default mobiles