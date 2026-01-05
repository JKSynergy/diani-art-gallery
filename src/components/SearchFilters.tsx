'use client'

interface SearchFiltersProps {
  filters: {
    search: string
    medium: string
    priceRange: string
    availability: string
    sortBy: string
  }
  onFilterChange: (key: string, value: string) => void
  onClearFilters: () => void
  mediums: string[]
  priceRanges: Array<{ value: string; label: string }>
  className?: string
}

export default function SearchFilters({
  filters,
  onFilterChange,
  onClearFilters,
  mediums,
  priceRanges,
  className = ''
}: SearchFiltersProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm sticky top-4 ${className}`}>
      <h2 className="text-lg font-semibold mb-4">Filter & Search</h2>
      
      {/* Search */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search by title or artist..."
          value={filters.search}
          onChange={(e) => onFilterChange('search', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {/* Medium Filter */}
      <div className="mb-6">
        <label htmlFor="medium" className="block text-sm font-medium text-gray-700 mb-2">
          Medium
        </label>
        <select
          id="medium"
          value={filters.medium}
          onChange={(e) => onFilterChange('medium', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          {mediums.map(medium => (
            <option key={medium} value={medium}>
              {medium === 'all' ? 'All Mediums' : medium}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <select
          id="price"
          value={filters.priceRange}
          onChange={(e) => onFilterChange('priceRange', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          {priceRanges.map(range => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Availability Filter */}
      <div className="mb-6">
        <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
          Availability
        </label>
        <select
          id="availability"
          value={filters.availability}
          onChange={(e) => onFilterChange('availability', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="all">All Artworks</option>
          <option value="available">Available</option>
          <option value="sold">Sold</option>
        </select>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-2">
          Sort By
        </label>
        <select
          id="sortBy"
          value={filters.sortBy}
          onChange={(e) => onFilterChange('sortBy', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="title">Title: A to Z</option>
          <option value="artist">Artist: A to Z</option>
        </select>
      </div>

      {/* Clear Filters */}
      <button
        onClick={onClearFilters}
        className="w-full text-primary-600 hover:text-primary-700 text-sm font-medium"
      >
        Clear All Filters
      </button>
    </div>
  )
}