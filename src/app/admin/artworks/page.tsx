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
  Plus,
  Eye,
  Edit,
  Trash2,
  Upload,
  BarChart3,
  Download
} from 'lucide-react';

// Mock artworks data
const mockArtworks = [
  {
    id: '1',
    title: 'Ocean Waves at Sunset',
    artist: 'Amara Okafor',
    medium: 'Oil on Canvas',
    dimensions: '120x80cm',
    price: 25000,
    status: 'available',
    dateAdded: '2024-10-15',
    views: 324,
    sales: 2,
    image: '/api/placeholder/200/200'
  },
  {
    id: '2',
    title: 'Abstract Dreams',
    artist: 'Kesi Mwalimu',
    medium: 'Acrylic on Canvas',
    dimensions: '100x70cm',
    price: 15000,
    status: 'sold',
    dateAdded: '2024-10-10',
    views: 198,
    sales: 1,
    image: '/api/placeholder/200/200'
  },
  {
    id: '3',
    title: 'Coastal Harmony',
    artist: 'Jengo Tembo',
    medium: 'Mixed Media',
    dimensions: '90x90cm',
    price: 35000,
    status: 'reserved',
    dateAdded: '2024-10-08',
    views: 156,
    sales: 0,
    image: '/api/placeholder/200/200'
  },
  {
    id: '4',
    title: 'Sunrise Over Kilifi',
    artist: 'Amara Okafor',
    medium: 'Watercolor',
    dimensions: '60x40cm',
    price: 22000,
    status: 'available',
    dateAdded: '2024-10-05',
    views: 287,
    sales: 0,
    image: '/api/placeholder/200/200'
  }
];

export default function AdminArtworks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedArtworks, setSelectedArtworks] = useState<string[]>([]);

  const filteredArtworks = mockArtworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || artwork.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'sold': return 'bg-blue-100 text-blue-800';
      case 'reserved': return 'bg-orange-100 text-orange-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSelectAll = () => {
    if (selectedArtworks.length === filteredArtworks.length) {
      setSelectedArtworks([]);
    } else {
      setSelectedArtworks(filteredArtworks.map(artwork => artwork.id));
    }
  };

  const handleSelectArtwork = (artworkId: string) => {
    setSelectedArtworks(prev => 
      prev.includes(artworkId) 
        ? prev.filter(id => id !== artworkId)
        : [...prev, artworkId]
    );
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
                className="bg-blue-50 text-blue-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
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
                className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
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
                <h1 className="text-3xl font-bold text-gray-900">Artworks</h1>
                <p className="text-gray-600 mt-1">Manage your gallery's artwork collection</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="btn-outline px-4 py-2">
                  <Upload className="w-4 h-4 mr-2" />
                  Import
                </button>
                
                <button className="btn-outline px-4 py-2">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
                
                <Link href="/admin/artworks/new" className="btn-primary px-4 py-2">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Artwork
                </Link>
              </div>
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
                    placeholder="Search artworks, artists..."
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
                  <option value="available">Available</option>
                  <option value="sold">Sold</option>
                  <option value="reserved">Reserved</option>
                  <option value="draft">Draft</option>
                </select>
                
                <button className="btn-outline px-4 py-2">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </button>
              </div>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedArtworks.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <p className="text-blue-800">
                  {selectedArtworks.length} artwork{selectedArtworks.length > 1 ? 's' : ''} selected
                </p>
                
                <div className="flex items-center space-x-3">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Bulk Edit
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Change Status
                  </button>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    Delete Selected
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Artworks Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedArtworks.length === filteredArtworks.length && filteredArtworks.length > 0}
                        onChange={handleSelectAll}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Artwork
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Artist
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Added
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredArtworks.map((artwork) => (
                    <tr key={artwork.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedArtworks.includes(artwork.id)}
                          onChange={() => handleSelectArtwork(artwork.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{artwork.title}</div>
                            <div className="text-sm text-gray-500">{artwork.medium}</div>
                            <div className="text-xs text-gray-400">{artwork.dimensions}</div>
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {artwork.artist}
                      </td>
                      
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        KSh {artwork.price.toLocaleString()}
                      </td>
                      
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(artwork.status)}`}>
                          {artwork.status.charAt(0).toUpperCase() + artwork.status.slice(1)}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {artwork.views}
                      </td>
                      
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(artwork.dateAdded).toLocaleDateString()}
                      </td>
                      
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-gray-400 hover:text-gray-600">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-400 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
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
                  Showing {filteredArtworks.length} of {mockArtworks.length} artworks
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