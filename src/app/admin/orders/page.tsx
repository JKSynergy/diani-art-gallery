'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Package, 
  Users, 
  Calendar,
  ShoppingBag,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3
} from 'lucide-react';

// Mock orders data
const mockOrders = [
  {
    id: 'ORD-001',
    customer: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+254 712 345 678'
    },
    artwork: {
      title: 'Ocean Waves at Sunset',
      artist: 'Amara Okafor',
      price: 25000
    },
    orderDate: '2024-11-01',
    status: 'completed',
    paymentStatus: 'paid',
    paymentMethod: 'MPESA',
    shippingAddress: '123 Diani Beach Road, Diani, Kenya',
    trackingNumber: 'TRK123456789',
    notes: 'Customer requested careful packaging'
  },
  {
    id: 'ORD-002',
    customer: {
      name: 'David Kim',
      email: 'david.kim@email.com',
      phone: '+254 723 456 789'
    },
    artwork: {
      title: 'Abstract Dreams',
      artist: 'Kesi Mwalimu',
      price: 15000
    },
    orderDate: '2024-10-31',
    status: 'shipped',
    paymentStatus: 'paid',
    paymentMethod: 'Credit Card',
    shippingAddress: '456 Nairobi Avenue, Nairobi, Kenya',
    trackingNumber: 'TRK987654321',
    notes: ''
  },
  {
    id: 'ORD-003',
    customer: {
      name: 'Maria Santos',
      email: 'maria.santos@email.com',
      phone: '+254 734 567 890'
    },
    artwork: {
      title: 'Coastal Harmony',
      artist: 'Jengo Tembo',
      price: 35000
    },
    orderDate: '2024-10-30',
    status: 'reserved',
    paymentStatus: 'deposit_paid',
    paymentMethod: 'PESAPAL',
    shippingAddress: '789 Mombasa Road, Mombasa, Kenya',
    trackingNumber: '',
    notes: 'Customer paid 10% deposit, remaining balance due in 5 days'
  },
  {
    id: 'ORD-004',
    customer: {
      name: 'James Wilson',
      email: 'james.wilson@email.com',
      phone: '+254 745 678 901'
    },
    artwork: {
      title: 'Sunrise Over Kilifi',
      artist: 'Amara Okafor',
      price: 22000
    },
    orderDate: '2024-10-29',
    status: 'processing',
    paymentStatus: 'paid',
    paymentMethod: 'MPESA',
    shippingAddress: '321 Kilifi Creek, Kilifi, Kenya',
    trackingNumber: '',
    notes: 'Artwork being prepared for shipping'
  },
  {
    id: 'ORD-005',
    customer: {
      name: 'Linda Chen',
      email: 'linda.chen@email.com',
      phone: '+254 756 789 012'
    },
    artwork: {
      title: 'Traditional Patterns',
      artist: 'Kesi Mwalimu',
      price: 18000
    },
    orderDate: '2024-10-28',
    status: 'pending',
    paymentStatus: 'pending',
    paymentMethod: 'Credit Card',
    shippingAddress: '654 Lamu Street, Lamu, Kenya',
    trackingNumber: '',
    notes: 'Waiting for payment confirmation'
  }
];

export default function AdminOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'reserved': return 'bg-orange-100 text-orange-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'deposit_paid': return 'bg-orange-100 text-orange-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'processing': return <Clock className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map(order => order.id));
    }
  };

  const handleSelectOrder = (orderId: string) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const orderStats = {
    total: mockOrders.length,
    pending: mockOrders.filter(o => o.status === 'pending').length,
    processing: mockOrders.filter(o => o.status === 'processing').length,
    shipped: mockOrders.filter(o => o.status === 'shipped').length,
    completed: mockOrders.filter(o => o.status === 'completed').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-serif font-bold text-gray-900">
                Diani Art Gallery
              </Link>
              <span className="ml-4 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                Admin
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
                View Site
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-gray-900 text-sm">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-8 px-4">
            <div className="space-y-2">
              <Link
                href="/admin"
                className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <BarChart3 className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
              
              <Link
                href="/admin/artworks"
                className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <Package className="mr-3 h-5 w-5" />
                Artworks
              </Link>
              
              <Link
                href="/admin/artists"
                className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <Users className="mr-3 h-5 w-5" />
                Artists
              </Link>
              
              <Link
                href="/admin/exhibitions"
                className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Exhibitions
              </Link>
              
              <Link
                href="/admin/orders"
                className="bg-blue-50 text-blue-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <ShoppingBag className="mr-3 h-5 w-5" />
                Orders
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
                <p className="text-gray-600 mt-1">Manage customer orders and fulfillment</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="btn-outline px-4 py-2">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Order Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-2xl font-bold text-gray-900">{orderStats.total}</div>
              <div className="text-sm text-gray-600">Total Orders</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-2xl font-bold text-yellow-600">{orderStats.pending}</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-2xl font-bold text-orange-600">{orderStats.processing}</div>
              <div className="text-sm text-gray-600">Processing</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-2xl font-bold text-blue-600">{orderStats.shipped}</div>
              <div className="text-sm text-gray-600">Shipped</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-2xl font-bold text-green-600">{orderStats.completed}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search orders, customers, artworks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 min-w-[120px]"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                
                <button className="btn-outline px-4 py-2">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </button>
              </div>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedOrders.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <p className="text-blue-800">
                  {selectedOrders.length} order{selectedOrders.length > 1 ? 's' : ''} selected
                </p>
                
                <div className="flex items-center space-x-3">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Mark as Shipped
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Update Status
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Export Selected
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Orders Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                        onChange={handleSelectAll}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Artwork
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedOrders.includes(order.id)}
                          onChange={() => handleSelectOrder(order.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {getStatusIcon(order.status)}
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">#{order.id}</div>
                            {order.trackingNumber && (
                              <div className="text-xs text-gray-500">
                                Tracking: {order.trackingNumber}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{order.customer.name}</div>
                          <div className="text-sm text-gray-500">{order.customer.email}</div>
                          <div className="text-xs text-gray-400">{order.customer.phone}</div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{order.artwork.title}</div>
                          <div className="text-sm text-gray-500">by {order.artwork.artist}</div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        KSh {order.artwork.price.toLocaleString()}
                      </td>
                      
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div>
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPaymentStatusColor(order.paymentStatus)}`}>
                            {order.paymentStatus.replace('_', ' ').charAt(0).toUpperCase() + order.paymentStatus.replace('_', ' ').slice(1)}
                          </span>
                          <div className="text-xs text-gray-500 mt-1">{order.paymentMethod}</div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(order.orderDate).toLocaleDateString()}
                      </td>
                      
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-gray-400 hover:text-gray-600" title="View Order">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600" title="Edit Order">
                            <Edit className="w-4 h-4" />
                          </button>
                          {order.status === 'processing' && (
                            <button className="text-blue-400 hover:text-blue-600" title="Mark as Shipped">
                              <Truck className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="bg-white px-6 py-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing {filteredOrders.length} of {mockOrders.length} orders
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}