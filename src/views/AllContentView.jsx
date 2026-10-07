import React, { useState, useMemo } from 'react';
import { 
  Table2, 
  Search, 
  Filter, 
  ArrowUpDown, 
  ArrowUpRight, 
  Eye, 
  Layers, 
  Sparkles,
  Download
} from 'lucide-react';

export default function AllContentView({ analytics, onSelectPost }) {
  const { allPosts, profile } = analytics;

  const [searchFilter, setSearchFilter] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('views'); // 'views', 'likes', 'comments', 'engagementRate', 'date'
  const [sortDirection, setSortDirection] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Filter & Sort Logic
  const filteredPosts = useMemo(() => {
    let result = [...allPosts];

    if (searchFilter) {
      const q = searchFilter.toLowerCase();
      result = result.filter(
        (p) =>
          p.hook?.toLowerCase().includes(q) ||
          p.caption?.toLowerCase().includes(q) ||
          p.topic?.toLowerCase().includes(q) ||
          p.pillar?.toLowerCase().includes(q)
      );
    }

    if (selectedFormat !== 'ALL') {
      result = result.filter((p) => p.format === selectedFormat);
    }

    if (selectedCategory !== 'ALL') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result.sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (sortBy === 'date') {
        valA = new Date(valA).getTime();
        valB = new Date(valB).getTime();
      }

      if (sortDirection === 'desc') {
        return (valB || 0) - (valA || 0);
      } else {
        return (valA || 0) - (valB || 0);
      }
    });

    return result;
  }, [allPosts, searchFilter, selectedFormat, selectedCategory, sortBy, sortDirection]);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSortToggle = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(field);
      setSortDirection('desc');
    }
  };

  // Export current filtered table to CSV
  const handleExportCsv = () => {
    const headers = ['ID', 'Date', 'Format', 'Topic', 'Pillar', 'Category', 'Views', 'Likes', 'Comments', 'EngagementRate', 'Hook'];
    const rows = filteredPosts.map(p => [
      p.id,
      p.date,
      p.format,
      `"${p.topic}"`,
      `"${p.pillar}"`,
      `"${p.category}"`,
      p.views,
      p.likes,
      p.comments,
      p.engagementRate,
      `"${(p.hook || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `instalens_${profile.username}_analyzed_content.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="view-content-area animate-fade-in">
      {/* Header */}
      <div className="section-heading-box" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 className="section-title">
            <Table2 size={24} color="var(--accent-cyan)" />
            All Analyzed Content ({filteredPosts.length} of {allPosts.length} Items)
          </h1>
          <p className="section-description">
            Complete inventory of analyzed posts, Reels, and carousels. Click any row to open the AI Deep Inspection Panel.
          </p>
        </div>

        <button 
          onClick={handleExportCsv}
          className="btn-outline"
          style={{ gap: '6px', fontSize: '0.82rem' }}
        >
          <Download size={14} /> Export CSV
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="glass-panel" style={{ padding: '16px 20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        {/* Search */}
        <div style={{ flex: '1 1 240px', position: 'relative' }}>
          <input 
            type="text"
            placeholder="Search by hook, topic, or caption..."
            value={searchFilter}
            onChange={(e) => {
              setSearchFilter(e.target.value);
              setCurrentPage(1);
            }}
            style={{
              width: '100%',
              padding: '8px 12px 8px 36px',
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xs)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              outline: 'none'
            }}
          />
          <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        </div>

        {/* Format Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Format:</span>
          <select
            value={selectedFormat}
            onChange={(e) => {
              setSelectedFormat(e.target.value);
              setCurrentPage(1);
            }}
            style={{
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xs)',
              color: 'var(--text-primary)',
              padding: '6px 10px',
              fontSize: '0.82rem',
              outline: 'none'
            }}
          >
            <option value="ALL">All Formats</option>
            <option value="Reel">Reels Only</option>
            <option value="Carousel">Carousels Only</option>
            <option value="Image">Single Images</option>
          </select>
        </div>

        {/* Sort selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => handleSortToggle(e.target.value)}
            style={{
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xs)',
              color: 'var(--text-primary)',
              padding: '6px 10px',
              fontSize: '0.82rem',
              outline: 'none'
            }}
          >
            <option value="views">Most Views</option>
            <option value="likes">Most Likes</option>
            <option value="comments">Most Comments</option>
            <option value="engagementRate">Highest Engagement</option>
            <option value="date">Most Recent</option>
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
        <div className="data-table-wrapper" style={{ border: 'none' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '45px' }}>#</th>
                <th onClick={() => handleSortToggle('date')} style={{ cursor: 'pointer' }}>
                  Date <ArrowUpDown size={12} style={{ display: 'inline' }} />
                </th>
                <th>Format</th>
                <th>Opening Hook / AI Summary</th>
                <th>Pillar & Topic</th>
                <th>Category</th>
                <th onClick={() => handleSortToggle('views')} style={{ cursor: 'pointer' }}>
                  Views <ArrowUpDown size={12} style={{ display: 'inline' }} />
                </th>
                <th onClick={() => handleSortToggle('likes')} style={{ cursor: 'pointer' }}>
                  Likes <ArrowUpDown size={12} style={{ display: 'inline' }} />
                </th>
                <th onClick={() => handleSortToggle('comments')} style={{ cursor: 'pointer' }}>
                  Comments <ArrowUpDown size={12} style={{ display: 'inline' }} />
                </th>
                <th onClick={() => handleSortToggle('engagementRate')} style={{ cursor: 'pointer' }}>
                  Eng. % <ArrowUpDown size={12} style={{ display: 'inline' }} />
                </th>
                <th>Tier</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPosts.map((post, idx) => {
                const globalIndex = (currentPage - 1) * itemsPerPage + idx + 1;
                let badgeClass = 'badge-moderate';
                if (post.performanceLevel === 'High') badgeClass = 'badge-high';
                else if (post.performanceLevel === 'Above Average') badgeClass = 'badge-above';
                else if (post.performanceLevel === 'Low') badgeClass = 'badge-low';

                return (
                  <tr 
                    key={post.id} 
                    className="clickable-row"
                    onClick={() => onSelectPost(post)}
                    title="Click to open Deep Inspection Panel"
                  >
                    <td style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {globalIndex}
                    </td>
                    <td style={{ fontSize: '0.78rem', whiteSpace: 'nowrap' }}>
                      {new Date(post.date).toLocaleDateString()}
                    </td>
                    <td>
                      <span className={`format-tag ${post.format}`}>
                        {post.format}
                      </span>
                    </td>
                    <td style={{ maxWidth: '320px' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.85rem', lineHeight: 1.35, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        "{post.hook}"
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '2px' }}>
                        {post.caption}
                      </div>
                    </td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {post.pillar}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--accent-indigo)' }}>
                        #{post.topic}
                      </div>
                    </td>
                    <td>
                      <span className="category-badge">{post.category}</span>
                    </td>
                    <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                      {post.views?.toLocaleString()}
                    </td>
                    <td>{post.likes?.toLocaleString()}</td>
                    <td>{post.comments?.toLocaleString()}</td>
                    <td style={{ fontWeight: 600, color: 'var(--success)' }}>
                      {post.engagementRate}%
                    </td>
                    <td>
                      <span className={`badge ${badgeClass}`} style={{ fontSize: '0.68rem', padding: '2px 6px' }}>
                        {post.performanceLevel}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredPosts.length)} of {filteredPosts.length} posts
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="btn-outline btn-sm"
              style={{ opacity: currentPage === 1 ? 0.4 : 1 }}
            >
              Previous
            </button>
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 8px', fontWeight: 600, color: 'var(--text-primary)' }}>
              Page {currentPage} of {totalPages || 1}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages || totalPages === 0}
              className="btn-outline btn-sm"
              style={{ opacity: currentPage === totalPages ? 0.4 : 1 }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
