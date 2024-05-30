import React from "react";
import { Route } from "react-router-dom";

import ProductDetails from "../product/ProductDetails";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Profile from "../User/Profile";
import UpdateProfile from "../User/UpdateProfile";
import ProtectedRoute from "../auth/ProtectedRoute";
import UploadAvatar from "../User/UploadAvatar";
import UpdatePassword from "../User/UpdatePassword";
import ForgotPassword from "../auth/ForgotPassword";
import ResetPassword from "../auth/ResetPassword";
import Cart from "../cart/Cart";
import Shipping from "../cart/Shipping";
import ConfirmOrder from "../cart/ConfirmOrder";
import PaymentMethod from "../cart/PaymentMethod";
import MyOrders from "../order/MyOrders";
import OrderDetails from "../order/OrderDetails";
import Invoice from "../invoice/Invoice";
import Caro from "../layout/Caro"
import Home from "../Home";

const userRoutes = () => {
    return (
        <>
            {/* Route for the home page */}
            <Route path="/" element={<><Caro /><WithContainer><Home /></WithContainer></>} />

            <Route path="/product/:id" element={
                <WithContainer>
                    <ProductDetails />
                </WithContainer>} />

            <Route path="/login" element={
                <WithContainer>
                    <Login />
                </WithContainer>} />

            <Route path="/register" element={
                <WithContainer>
                    <Register />
                </WithContainer>} />

            <Route path="/me/profile" element={
                <WithContainer>
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                </WithContainer>} />

            <Route path="/me/update_profile" element={
                <WithContainer>
                    <ProtectedRoute>
                        <UpdateProfile />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="me/upload_avatar" element={
                <WithContainer>
                    <ProtectedRoute>
                        <UploadAvatar />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="me/update_password" element={
                <WithContainer>
                    <ProtectedRoute>
                        <UpdatePassword />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="password/forgot" element={
                <WithContainer>
                    <ForgotPassword />
                </WithContainer>} />

            <Route path="password/reset/:token" element={
                <WithContainer>
                    <ResetPassword />
                </WithContainer>} />


            <Route path="/cart" element={
                <WithContainer>
                    <Cart />
                </WithContainer>} />


            <Route path="/shipping" element={
                <WithContainer>
                    <ProtectedRoute>
                        <Shipping />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/confirm_order" element={
                <WithContainer>
                    <ProtectedRoute>
                        <ConfirmOrder />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/payment_method" element={
                <WithContainer>
                    <ProtectedRoute>
                        <PaymentMethod />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/me/orders" element={
                <WithContainer>
                    <ProtectedRoute>
                        <MyOrders />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/me/order/:id" element={
                <WithContainer>
                    <ProtectedRoute>
                        <OrderDetails />
                    </ProtectedRoute>
                </WithContainer>} />


            <Route path="/invoice/order/:id" element={
                <WithContainer>
                    <ProtectedRoute>
                        <Invoice />
                    </ProtectedRoute>
                </WithContainer>} />
        </>
    )
}



// Component to provide a container for other components
function WithContainer({ children }) {
    return <div className="container">{children}</div>;
}

export default userRoutes