import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, RefreshCw, LogOut } from "lucide-react";
import { syncProductsFromAdtraction } from "@/services/adtractionApi";

import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import SeedDatabase from "@/components/admin/SeedDatabase";

const Admin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [productFormData, setProductFormData] = useState({
    name: "",
    description: "",
    price: "",
    currency: "SEK",
    category: "",
    advertiser_name: "",
    advertiser_id: "",
    image_url: "",
    affiliate_link: "",
    commission: "5%"
  });

  // Fetch categories
  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch('/api/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      return await response.json();
    }
  });

  // Fetch products count
  const { data: productCount, refetch: refetchProductCount, isLoading: isLoadingCount } = useQuery({
    queryKey: ["productCount"],
    queryFn: async () => {
      const response = await fetch('/api/products/count');
      if (!response.ok) throw new Error('Failed to fetch product count');
      const data = await response.json();
      return data.count || 0;
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProductFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSyncProducts = async () => {
    try {
      setIsLoading(true);
      await syncProductsFromAdtraction();
      toast.success("Products synced successfully!");
      refetchProductCount();
    } catch (error) {
      console.error("Error syncing products:", error);
      toast.error("Failed to sync products");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productFormData)
      });
      if (!response.ok) throw new Error('Failed to add product');
      
      toast.success("Product added successfully!");
      setProductFormData({
        name: "",
        description: "",
        price: "",
        currency: "SEK",
        category: "",
        advertiser_name: "",
        advertiser_id: "",
        image_url: "",
        affiliate_link: "",
        commission: "5%"
      });
      refetchProductCount();
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearProducts = async () => {
    if (!confirm("Are you sure you want to delete all products? This action cannot be undone.")) {
      return;
    }
    
    try {
      setIsLoading(true);
      const response = await fetch('/api/products/clear', { method: 'POST' });
      if (!response.ok) throw new Error('Failed to clear products');
      
      toast.success("All products cleared successfully!");
      refetchProductCount();
    } catch (error) {
      console.error("Error clearing products:", error);
      toast.error("Failed to clear products");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out");
    }
  };

  if (isLoadingCategories || isLoadingCount) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-baby-pink" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button variant="outline" onClick={handleSignOut} className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{productCount || 0}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{categories?.length || 0}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Last Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{new Date().toLocaleDateString()}</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Product Name</label>
                  <Input 
                    id="name" 
                    name="name"
                    value={productFormData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
                  <Textarea 
                    id="description" 
                    name="description"
                    value={productFormData.description}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium mb-1">Price</label>
                    <Input 
                      id="price" 
                      name="price"
                      type="number"
                      value={productFormData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="currency" className="block text-sm font-medium mb-1">Currency</label>
                    <Input 
                      id="currency" 
                      name="currency"
                      value={productFormData.currency}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
                  <select 
                    id="category" 
                    name="category"
                    value={productFormData.category}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select Category</option>
                    {categories?.map((category) => (
                      <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="image_url" className="block text-sm font-medium mb-1">Image URL</label>
                  <Input 
                    id="image_url" 
                    name="image_url"
                    value={productFormData.image_url}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="affiliate_link" className="block text-sm font-medium mb-1">Affiliate Link</label>
                  <Input 
                    id="affiliate_link" 
                    name="affiliate_link"
                    value={productFormData.affiliate_link}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="advertiser_name" className="block text-sm font-medium mb-1">Advertiser Name</label>
                    <Input 
                      id="advertiser_name" 
                      name="advertiser_name"
                      value={productFormData.advertiser_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="advertiser_id" className="block text-sm font-medium mb-1">Advertiser ID</label>
                    <Input 
                      id="advertiser_id" 
                      name="advertiser_id"
                      value={productFormData.advertiser_id}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="commission" className="block text-sm font-medium mb-1">Commission</label>
                  <Input 
                    id="commission" 
                    name="commission"
                    value={productFormData.commission}
                    onChange={handleInputChange}
                  />
                </div>
                
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Adding...
                    </>
                  ) : 'Add Product'}
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Sync Products</h2>
                <p className="text-gray-600 mb-4">
                  Manually sync products from Adtraction API. This will fetch the latest product data and update your database.
                </p>
                
                <Button onClick={handleSyncProducts} disabled={isLoading} className="flex items-center">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <RefreshCw className="mr-2 h-4 w-4" />
                  )}
                  Sync Products from Adtraction
                </Button>
              </div>
              
              <SeedDatabase />
              
              <div>
                <h3 className="text-xl font-bold mb-4">Database Management</h3>
                <p className="text-gray-600 mb-4">
                  Performing database operations can affect your live data. Proceed with caution.
                </p>
                
                <Button variant="outline" className="mr-4">
                  Export Database
                </Button>
                
                <Button variant="destructive" onClick={handleClearProducts}>
                  Clear Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
