import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/login/Login';
import Auth from './auth/Auth';
import App from './App';
import ProtectedRoute from './util/ProtectedRoute';
import StockCheckingRoute from './util/StockCheckingRoute';
import OrderscheckerRoute from './util/OrderscheckerRoute';
import Home from './portal/home/Home';
import DeliveryOrders from './portal/deliveryorders/DeliveryOrders';
import StockChecking from './portal/stockchecking/StockChecking';
import RealtimeStock from './portal/RealTimeStock/RealTimeStock';
import ProductLable from './portal/ProductLable/ProductLable';
import { Provider as DeliveryOrderProvider } from './context/DeliveryOrderContext';
import { Provider as AuthProvider } from './context/AuthContext';

// import DeliveryOrderContent from './portal/deliveryorders/deliveryOrderContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AuthProvider>
		<BrowserRouter basename={'/'}>
			
			<Routes>
				<Route path='/auth' element={<Auth />}>
					<Route path='login' element={<Login />} />
				</Route>

				<Route path="/" element={<App />}>
					<Route path='' element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					} />

					<Route path='/deliveryorders' element={
						<OrderscheckerRoute>
							<DeliveryOrderProvider>
								<DeliveryOrders />
							</DeliveryOrderProvider>
						</OrderscheckerRoute>
					} />

					<Route path='/stockchecking' element={
						<StockCheckingRoute>
							<StockChecking />
						</StockCheckingRoute>
					} />
					<Route path='/realtimestock' element={
						<ProtectedRoute>
							<RealtimeStock />
						</ProtectedRoute>
					}/>
					<Route path='/productlable' element={
						<ProtectedRoute>
							<ProductLable />
						</ProtectedRoute>
					}/>

				</Route>
			</Routes>
			
		</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
