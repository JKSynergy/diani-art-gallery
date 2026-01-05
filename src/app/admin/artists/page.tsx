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
  Mail,
  Phone,
  MapPin,
  Star,
  BarChart3
} from 'lucide-react';

// Mock artists data
const mockArtists = [
  {
    id: '1',
    name: 'Amara Okafor',
    email: 'amara@example.com',
    phone: '+254 701 234 567',
    location: 'Nairobi, Kenya',
    specialty: 'Contemporary Painting',
    status: 'active',
    joinDate: '2023-01-15',
    artworksCount: 12,
    soldArtworks: 8,
    totalRevenue: 145000,
    rating: 4.8,
    bio: 'Contemporary artist known for vibrant coastal landscapes and abstract interpretations of East African culture.',
    website: 'https://amaraokafor.art',
    instagram: '@amaraokafor',
    lastActive: '2024-11-01'
  },
  {
    id: '2',
    name: 'Kesi Mwalimu',
    email: 'kesi@example.com',
    phone: '+254 712 345 678',
    location: 'Mombasa, Kenya',
    specialty: 'Mixed Media',
    status: 'active',
    joinDate: '2023-03-22',
    artworksCount: 8,
    soldArtworks: 5,
    totalRevenue: 89000,
    rating: 4.6,
    bio: 'Mixed media artist exploring themes of identity and tradition through contemporary techniques.',
    website: 'https://kesimwalimu.com',
    instagram: '@kesimwalimu',
    lastActive: '2024-10-30'
  },
  {
    id: '3',
    name: 'Jengo Tembo',
    email: 'jengo@example.com',
    phone: '+254 723 456 789',
    location: 'Diani, Kenya',
    specialty: 'Sculpture',
    status: 'active',
    joinDate: '2023-06-10',
    artworksCount: 6,
    soldArtworks: 3,
    totalRevenue: 125000,
    rating: 4.9,
    bio: 'Sculptor working with local materials to create contemporary interpretations of traditional forms.',
    website: '',
    instagram: '@jengotembo',
    lastActive: '2024-10-28'
  },
  {
    id: '4',
    name: 'Zara Hassan',
    email: 'zara@example.com',
    phone: '+254 734 567 890',
    location: 'Kilifi, Kenya',
    specialty: 'Digital Art',
    status: 'pending',
    joinDate: '2024-10-15',
    artworksCount: 3,
    soldArtworks: 0,
    totalRevenue: 0,
    rating: 0,
    bio: 'Digital artist creating immersive experiences that blend technology with African storytelling.',
    website: 'https://zarahassan.digital',
    instagram: '@zarahassan',
    lastActive: '2024-11-02'
  },
  {
    id: '5',
    name: 'Omar Kimani',
    email: 'omar@example.com',
    phone: '+254 745 678 901',
    location: 'Lamu, Kenya',
    specialty: 'Photography',
    status: 'inactive',
    joinDate: '2023-08-05',
    artworksCount: 15,
    soldArtworks: 10,
    totalRevenue: 67000,
    rating: 4.4,
    bio: 'Documentary photographer capturing the essence of coastal Kenya and its communities.',
    website: 'https://omarkimani.photo',
    instagram: '@omarkimani',
    lastActive: '2024-09-15'
  }
];

export default function AdminArtists() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

  const filteredArtists = mockArtists.filter(artist => {
    const matchesSearch = 
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || artist.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSelectAll = () => {
    if (selectedArtists.length === filteredArtists.length) {
      setSelectedArtists([]);
    } else {
      setSelectedArtists(filteredArtists.map(artist => artist.id));
    }
  };

  const handleSelectArtist = (artistId: string) => {
    setSelectedArtists(prev => 
      prev.includes(artistId) 
        ? prev.filter(id => id !== artistId)
        : [...prev, artistId]
    );
  };

  const artistStats = {
    total: mockArtists.length,
    active: mockArtists.filter(a => a.status === 'active').length,
    pending: mockArtists.filter(a => a.status === 'pending').length,
    inactive: mockArtists.filter(a => a.status === 'inactive').length
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
                className="bg-blue-50 text-blue-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
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
                <h1 className="text-3xl font-bold text-gray-900">Artists</h1>
                <p className="text-gray-600 mt-1">Manage your gallery's artist community</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Link href="/admin/artists/new" className="btn-primary px-4 py-2">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Artist
                </Link>
              </div>
            </div>
          </div>

          {/* Artist Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-2xl font-bold text-gray-900">{artistStats.total}</div>
              <div className="text-sm text-gray-600">Total Artists</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-2xl font-bold text-green-600">{artistStats.active}</div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-2xl font-bold text-yellow-600">{artistStats.pending}</div>
              <div className="text-sm text-gray-600">Pending Approval</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-2xl font-bold text-gray-600">{artistStats.inactive}</div>
              <div className="text-sm text-gray-600">Inactive</div>
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
                    placeholder="Search artists, email, specialty, location..."
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
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                </select>
                
                <button className="btn-outline px-4 py-2">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </button>
              </div>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedArtists.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <p className="text-blue-800">
                  {selectedArtists.length} artist{selectedArtists.length > 1 ? 's' : ''} selected
                </p>
                
                <div className="flex items-center space-x-3">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Approve Selected
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Send Message
                  </button>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    Suspend Selected
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Artists Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredArtists.map((artist) => (
              <div key={artist.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                {/* Artist Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedArtists.includes(artist.id)}
                        onChange={() => handleSelectArtist(artist.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3"
                      />
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {artist.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(artist.status)}`}>
                        {artist.status.charAt(0).toUpperCase() + artist.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-900">{artist.name}</h3>
                    <p className="text-sm text-gray-600">{artist.specialty}</p>
                    
                    <div className="flex items-center mt-2">
                      <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">{artist.location}</span>
                    </div>

                    {artist.rating > 0 && (
                      <div className="flex items-center mt-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gray-600">{artist.rating}/5.0</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Artist Stats */}
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{artist.artworksCount}</div>
                      <div className="text-xs text-gray-600">Artworks</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{artist.soldArtworks}</div>
                      <div className="text-xs text-gray-600">Sold</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        {artist.totalRevenue > 0 ? `${(artist.totalRevenue / 1000).toFixed(0)}K` : '0'}
                      </div>
                      <div className="text-xs text-gray-600">Revenue</div>
                    </div>
                  </div>
                </div>

                {/* Artist Contact */}
                <div className="px-6 py-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href={`mailto:${artist.email}`} className="hover:text-blue-600">
                        {artist.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href={`tel:${artist.phone}`} className="hover:text-blue-600">
                        {artist.phone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <div className="line-clamp-2">{artist.bio}</div>
                  </div>

                  <div className="mt-4 text-xs text-gray-500">
                    <div>Joined: {new Date(artist.joinDate).toLocaleDateString()}</div>
                    <div>Last active: {new Date(artist.lastActive).toLocaleDateString()}</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600" title="View Profile">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600" title="Edit Artist">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600" title="Send Message">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>

                    {artist.status === 'pending' && (
                      <div className="flex space-x-2">
                        <button className="btn-primary px-3 py-1 text-xs">
                          Approve
                        </button>
                        <button className="btn-outline px-3 py-1 text-xs">
                          Decline
                        </button>
                      </div>
                    )}

                    {artist.status === 'active' && (
                      <button className="text-red-400 hover:text-red-600" title="Suspend Artist">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center">
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
        </main>
      </div>
    </div>
  );
}