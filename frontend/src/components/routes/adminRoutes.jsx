import React from 'react'
import { Route } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";
import Dashboard from '../admin/Dashboard';
import ListProducts from '../admin/ListProducts';
import NewProduct from '../admin/NewProduct';
import UpdateProduct from '../admin/UpdateProduct';
import UploadImages from '../admin/UploadImages';
import ListOrders from '../admin/ListOrders';
import ProcessOrder from '../admin/ProcessOrder';
import ListUsers from '../admin/ListUsers';
import UpdateUser from '../admin/UpdateUser';
import ProductReviews from '../admin/ProductReviews';

const adminRoutes = () => {
    return (
        <>

            <Route path="/admin/dashboard" element={
                <WithContainer>
                    <ProtectedRoute admin={true}>
                        <Dashboard />
                    </ProtectedRoute>
                </WithContainer>} />

            <Route path="/admin/products" element={
                <WithContainer>
                    <ProtectedRoute admin={true}>
                        <ListProducts />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/admin/product/new" element={
                <WithContainer>
                    <ProtectedRoute admin={true}>
                        <NewProduct />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/admin/products/:id" element={
                <WithContainer>
                    <ProtectedRoute admin={true}>
                        <UpdateProduct />
                    </ProtectedRoute>
                </WithContainer>} />

            <Route path="/admin/products/:id/upload_images" element={
                <WithContainer>
                    <ProtectedRoute admin={true}>
                        <UploadImages />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/admin/orders" element={
                <WithContainer>
                    <ProtectedRoute admin={true}>
                        <ListOrders />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/admin/orders/:id" element={
                <WithContainer>
                    <ProtectedRoute admin={true}>
                        <ProcessOrder />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/admin/users" element={
                <WithContainer>
                    <ProtectedRoute admin={true}>
                        <ListUsers />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/admin/users/:id" element={
                <WithContainer>
                    <ProtectedRoute admin={true}>
                        <UpdateUser />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/admin/reviews" element={
                <WithContainer>
                    <ProtectedRoute admin={true}>
                        <ProductReviews />
                    </ProtectedRoute>
                </WithContainer>} />


        </>
    )
}


// Component to provide a container for other components
function WithContainer({ children }) {
    return <div className="container">{children}</div>;
}

export default adminRoutes