const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// DATABASE PRODUK PROFESIONAL
const products = [
    {
        id: 1,
        name: "Ayam Kampung Hidup (Super)",
        category: "daging",
        price: 85000,
        unit: "ekor",
        weight: "1.2kg - 1.5kg",
        stock: 20,
        desc: "Ayam asli kampung organik, dibesarkan dengan sistem umbaran (free-range).",
        image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800"
    },
    {
        id: 2,
        name: "Ayam Karkas Bersih",
        category: "daging",
        price: 95000,
        unit: "ekor",
        weight: "0.9kg - 1.1kg",
        stock: 12,
        desc: "Ayam potong siap masak, sudah bersih dari bulu & jeroan. Kemasan higienis.",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=800"
    },
    {
        id: 3,
        name: "Telur Ayam Kampung (Isi 10)",
        category: "telur",
        price: 35000,
        unit: "pack",
        weight: "Isi 10 Butir",
        stock: 45,
        desc: "Telur segar harian, kaya Omega-3, kuning telur jingga pekat alami.",
        image: "https://images.unsplash.com/photo-1516448398574-84258919f642?q=80&w=800"
    },
    {
        id: 4,
        name: "Telur Ayam Kampung (1 Rak)",
        category: "telur",
        price: 98000,
        unit: "rak",
        weight: "Isi 30 Butir",
        stock: 15,
        desc: "Paket hemat untuk kebutuhan mingguan keluarga sehat. Stok terbatas.",
        image: "https://images.unsplash.com/photo-1582722134053-53d7e8284534?q=80&w=800"
    },
    {
        id: 5,
        name: "Ati Ampela Segar",
        category: "daging",
        price: 15000,
        unit: "bungkus",
        weight: "Isi 5 Pasang",
        stock: 10,
        desc: "Jeroan segar hasil potong pagi ini. Bersih dan siap olah.",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800"
    }
];

// API ROUTE
app.get('/api/products', (req, res) => res.json(products));

app.post('/api/orders', (req, res) => {
    console.log("Order Received:", req.body);
    res.json({ success: true });
});

// Serve Frontend untuk Vercel
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// EXPORT UNTUK VERCEL
module.exports = app;