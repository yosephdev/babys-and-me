import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const products = [
    {
        id: '201',
        name: '3-pack strumpor',
        description: 'Mjuka och slitstarka strumpor för barn i 3-pack.',
        image: 'https://www.polarnopyret.se/globalassets/productimages-polarnopyret/7322859456474.jpg?ref=BD617A1BFC',
        price: '80 SEK',
        url: 'https://pin.polarnopyret.se/t/t?a=1126522829&as=1971524470&t=2&tk=1&url=https://www.polarnopyret.se/barnklader/underklader/strumpor/3-pack-strumpor-gramelange-60290287-186?size=5637161847'
    },
    {
        id: '202',
        name: '3-pack strumpor',
        description: 'Mjuka och slitstarka strumpor för barn i 3-pack.',
        image: 'https://www.polarnopyret.se/globalassets/productimages-polarnopyret/7322859453749.jpg?ref=3FD0BCD310',
        price: '80 SEK',
        url: 'https://pin.polarnopyret.se/t/t?a=1126522829&as=1971524470&t=2&tk=1&url=https://www.polarnopyret.se/barnklader/underklader/strumpor/3-pack-strumpor-mork-marinbla-60290287-483?size=5637165133'
    },
    {
        id: '203',
        name: 'Merinoull tröja baby',
        description: 'Mjuk och varm tröja i merinoull för bebisar.',
        image: 'https://www.polarnopyret.se/globalassets/productimages-polarnopyret/7325852868213_1.jpg?ref=DE7F1F474F',
        price: '140 SEK',
        url: 'https://pin.polarnopyret.se/t/t?a=1126522829&as=1971524470&t=2&tk=1&url=https://www.polarnopyret.se/barnklader/klader/overdelar/langarmade-t-shirts/merinoull-troja-baby-gramelange-60379186-186?size=5637158272'
    },
    {
        id: '204',
        name: 'Merinoull tröja',
        description: 'Mjuk och varm tröja i merinoull för barn.',
        image: 'https://www.polarnopyret.se/globalassets/productimages-polarnopyret/7325851934834_1.jpg?ref=8B4DFDFD2C',
        price: '99 SEK',
        url: 'https://pin.polarnopyret.se/t/t?a=1126522829&as=1971524470&t=2&tk=1&url=https://www.polarnopyret.se/barnklader/klader/overdelar/langarmade-t-shirts/merinoull-troja-mork-marinbla-60346151-483?size=5637157052'
    }
];

const PolarnProducts = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">Polarn O. Pyret</h2>
                    <a
                        href="https://pin.polarnopyret.se/t/t?a=1126522829&as=1971524470&t=2&tk=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-baby-pink hover:underline"
                    >
                        Vårt mål är tre barn i varje plagg, minst.
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map(product => (
                        <a
                            key={product.id}
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
                        >
                            <div className="aspect-square bg-gray-50 relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.currentTarget.src = '/images/placeholder-product.png';
                                    }}
                                />
                            </div>
                            <div className="p-4 flex-grow">
                                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                                <p className="text-baby-pink font-bold">{product.price}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Button className="btn-secondary" asChild>
                        <Link to="/produkter?category=Kläder%20%26%20Accessoarer">
                            Se fler produkter från Polarn O. Pyret <ChevronRight className="w-5 h-5 ml-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PolarnProducts;