import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Download, FileText, BookOpen, Calendar, ArrowRight, Filter, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { format } from 'date-fns';
import { createPageUrl } from '@/utils';

const typeLabels = {
  blog: 'Blog',
  equity_report: 'Equity Report',
  research_paper: 'Research Paper',
  project_report: 'Project Report'
};

const typeColors = {
  blog: 'bg-[#C5E5C1]/20 text-[#0B1E47] border-[#C5E5C1]',
  equity_report: 'bg-[#93B0AE]/20 text-[#0B1E47] border-[#93B0AE]',
  research_paper: 'bg-[#0B1E47]/10 text-[#0B1E47] border-[#0B1E47]/30',
  project_report: 'bg-purple-100 text-purple-800 border-purple-200'
};

export default function Publications() {
  const [activeType, setActiveType] = useState('all');

  const { data: publications = [], isLoading } = useQuery({
    queryKey: ['publications'],
    queryFn: () => base44.entities.Publication.list('-published_date')
  });

  const filteredPublications = activeType === 'all' 
    ? publications 
    : publications.filter(pub => pub.type === activeType);

  const blogs = filteredPublications.filter(p => p.type === 'blog');
  const reports = filteredPublications.filter(p => p.type !== 'blog');

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0B1E47] py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(#93B0AE 1px, transparent 1px), linear-gradient(90deg, #93B0AE 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[#93B0AE] text-sm font-medium tracking-[0.3em] uppercase mb-6">Research Library</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight mb-8">
              Publications
            </h1>
            <p className="text-[#93B0AE]/80 text-lg font-light leading-relaxed">
              Access our equity reports, research papers, project documentation, and blog articles. Download reports for offline reading.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative bg-white py-8 border-b border-[#0B1E47]/10 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4">
            <Filter size={18} className="text-[#93B0AE]" />
            <Tabs value={activeType} onValueChange={setActiveType}>
              <TabsList className="bg-[#F8FAF9]">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="blog">Blogs</TabsTrigger>
                <TabsTrigger value="equity_report">Equity Reports</TabsTrigger>
                <TabsTrigger value="research_paper">Research Papers</TabsTrigger>
                <TabsTrigger value="project_report">Project Reports</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-[#F8FAF9] py-16 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-[#93B0AE]" />
            </div>
          ) : filteredPublications.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FileText size={48} className="mx-auto text-[#93B0AE]/40 mb-4" />
              <h3 className="text-xl font-medium text-[#0B1E47] mb-2">No publications yet</h3>
              <p className="text-[#0B1E47]/60">Check back soon for new content.</p>
            </motion.div>
          ) : (
            <div className="space-y-16">
              {/* Blogs Section */}
              {(activeType === 'all' || activeType === 'blog') && blogs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-light text-[#0B1E47] mb-8 flex items-center gap-3">
                    <BookOpen size={24} className="text-[#93B0AE]" />
                    Blog Articles
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog, index) => (
                      <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={createPageUrl(`BlogPost?id=${blog.id}`)}
                          className="group block bg-white border border-[#0B1E47]/10 hover:border-[#93B0AE]/50 hover:shadow-lg transition-all duration-500 h-full"
                        >
                          {blog.thumbnail_url && (
                            <div className="aspect-video bg-[#F8FAF9] overflow-hidden">
                              <img src={blog.thumbnail_url} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                          )}
                          <div className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <Badge variant="outline" className={typeColors.blog}>Blog</Badge>
                              {blog.category && (
                                <span className="text-xs text-[#0B1E47]/50">{blog.category}</span>
                              )}
                            </div>
                            <h3 className="text-lg font-medium text-[#0B1E47] mb-2 group-hover:text-[#93B0AE] transition-colors line-clamp-2">
                              {blog.title}
                            </h3>
                            {blog.description && (
                              <p className="text-sm text-[#0B1E47]/60 font-light line-clamp-2 mb-4">{blog.description}</p>
                            )}
                            <div className="flex items-center justify-between text-xs text-[#0B1E47]/50">
                              {blog.author && <span>{blog.author}</span>}
                              {blog.published_date && (
                                <span className="flex items-center gap-1">
                                  <Calendar size={12} />
                                  {format(new Date(blog.published_date), 'MMM d, yyyy')}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reports Section */}
              {(activeType === 'all' || activeType !== 'blog') && reports.length > 0 && (
                <div>
                  <h2 className="text-2xl font-light text-[#0B1E47] mb-8 flex items-center gap-3">
                    <FileText size={24} className="text-[#93B0AE]" />
                    {activeType === 'all' ? 'Reports & Papers' : typeLabels[activeType] + 's'}
                  </h2>
                  <div className="space-y-4">
                    {reports.map((report, index) => (
                      <motion.div
                        key={report.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white border border-[#0B1E47]/10 p-6 lg:p-8 hover:border-[#93B0AE]/40 hover:shadow-lg transition-all duration-500"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                          <div className="w-14 h-14 bg-[#0B1E47] flex items-center justify-center shrink-0">
                            <FileText size={24} className="text-white" strokeWidth={1.5} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <Badge variant="outline" className={typeColors[report.type]}>
                                {typeLabels[report.type]}
                              </Badge>
                              {report.category && (
                                <span className="text-xs text-[#0B1E47]/50">{report.category}</span>
                              )}
                              {report.division && (
                                <span className="text-xs text-[#93B0AE] capitalize">{report.division}</span>
                              )}
                            </div>
                            <h3 className="text-xl font-medium text-[#0B1E47] mb-2">{report.title}</h3>
                            {report.description && (
                              <p className="text-[#0B1E47]/60 font-light text-sm">{report.description}</p>
                            )}
                            <div className="flex items-center gap-4 mt-3 text-xs text-[#0B1E47]/50">
                              {report.author && <span>By {report.author}</span>}
                              {report.published_date && (
                                <span className="flex items-center gap-1">
                                  <Calendar size={12} />
                                  {format(new Date(report.published_date), 'MMM d, yyyy')}
                                </span>
                              )}
                            </div>
                          </div>

                          {report.file_url && (
                            <a
                              href={report.file_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0"
                            >
                              <Button
                                variant="outline"
                                className="border-[#0B1E47]/20 text-[#0B1E47] hover:bg-[#0B1E47] hover:text-white hover:border-[#0B1E47] transition-all duration-300 gap-2"
                              >
                                <Download size={16} />
                                Download
                              </Button>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
