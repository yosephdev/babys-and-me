import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import SeedDatabase from '@/components/admin/SeedDatabase';
import ProductManager from '@/components/admin/ProductManager';

const Admin = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();
    const [productCount, setProductCount] = useState<number>(0);
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Fetch product count
            const countResponse = await fetch('/api/products/count');
            if (countResponse.ok) {
                const countData = await countResponse.json();
                setProductCount(countData.count || 0);
            }

            // Fetch categories
            const categoriesResponse = await fetch('/api/products/categories');
            if (categoriesResponse.ok) {
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData.categories || []);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut();
            navigate('/');
        } catch (error) {
            console.error("Error signing out:", error);
            toast.error("Failed to sign out");
        }
    };

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
                                <p className="text-3xl font-bold">{loading ? "Loading..." : productCount}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">Categories</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">{loading ? "Loading..." : categories.length}</p>
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

                    {/* Seed Database Component */}
                    <SeedDatabase onSeedComplete={fetchData} />

                    <div className="mt-8">
                        <ProductManager />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Admin;