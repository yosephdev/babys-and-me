import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ProductManager: React.FC = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        currency: 'SEK',
        category: '',
        imageUrl: '',
        affiliateLink: '',
        advertiserName: '',
        advertiserId: '',
        commission: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/produkter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            toast.success('Product added successfully');

            // Reset form
            setProduct({
                name: '',
                description: '',
                price: '',
                currency: 'SEK',
                category: '',
                imageUrl: '',
                affiliateLink: '',
                advertiserName: '',
                advertiserId: '',
                commission: ''
            });
        } catch (error) {
            console.error('Error adding product:', error);
            toast.error('Failed to add product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add New Product</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Product Name
                    </label>
                    <Input
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <Textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                            Price
                        </label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                            Currency
                        </label>
                        <Input
                            id="currency"
                            name="currency"
                            value={product.currency}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                    </label>
                    <Input
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                        Image URL
                    </label>
                    <Input
                        id="imageUrl"
                        name="imageUrl"
                        value={product.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="affiliateLink" className="block text-sm font-medium text-gray-700 mb-1">
                        Affiliate Link
                    </label>
                    <Input
                        id="affiliateLink"
                        name="affiliateLink"
                        value={product.affiliateLink}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="advertiserName" className="block text-sm font-medium text-gray-700 mb-1">
                            Advertiser Name
                        </label>
                        <Input
                            id="advertiserName"
                            name="advertiserName"
                            value={product.advertiserName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="advertiserId" className="block text-sm font-medium text-gray-700 mb-1">
                            Advertiser ID
                        </label>
                        <Input
                            id="advertiserId"
                            name="advertiserId"
                            value={product.advertiserId}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="commission" className="block text-sm font-medium text-gray-700 mb-1">
                        Commission
                    </label>
                    <Input
                        id="commission"
                        name="commission"
                        value={product.commission}
                        onChange={handleChange}
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-baby-pink hover:bg-pink-600"
                    disabled={loading}
                >
                    {loading ? 'Adding...' : 'Add Product'}
                </Button>
            </form>
        </div>
    );
};

export default ProductManager;