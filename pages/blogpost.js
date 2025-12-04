import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { ArrowLeft, Calendar, User, Tag, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { createPageUrl } from '@/utils';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');

  const { data: post, isLoading } = useQuery({
    queryKey: ['publication', postId],
    queryFn: async () => {
      const publications = await base44.entities.Publication.filter({ id: postId });
      return publications[0];
    },
    enabled: !!postId
  });

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#93B0AE]" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-light text-[#0B1E47] mb-4">Post not found</h2>
        <Link to={createPageUrl('Publications')} className="text-[#93B0AE] hover:text-[#0B1E47] transition-colors">
          ← Back to Publications
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0B1E47] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(#93B0AE 1px, transparent 1px), linear-gradient(90deg, #93B0AE 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to={createPageUrl('Publications')}
              className="inline-flex items-center gap-2 text-[#93B0AE] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Publications
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="outline" className="bg-[#C5E5C1]/20 text-white border-[#C5E5C1]/50">
                Blog
              </Badge>
              {post.category && (
                <span className="text-sm text-[#93B0AE]">{post.category}</span>
              )}
              {post.division && (
                <span className="text-sm text-[#93B0AE] capitalize">{post.division}</span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#93B0AE]/70">
              {post.author && (
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {post.author}
                </span>
              )}
              {post.published_date && (
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {format(new Date(post.published_date), 'MMMM d, yyyy')}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {post.thumbnail_url && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12 -mt-24 relative z-10"
            >
              <img
                src={post.thumbnail_url}
                alt={post.title}
                className="w-full aspect-video object-cover shadow-2xl"
              />
            </motion.div>
          )}

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg prose-slate max-w-none"
          >
            {post.description && (
              <p className="text-xl text-[#0B1E47]/70 font-light leading-relaxed mb-8 border-l-4 border-[#93B0AE] pl-6">
                {post.description}
              </p>
            )}

            {post.content && (
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-light text-[#0B1E47] mt-12 mb-6">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-light text-[#0B1E47] mt-10 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-medium text-[#0B1E47] mt-8 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="text-[#0B1E47]/70 font-light leading-relaxed mb-6">{children}</p>,
                  a: ({ children, href }) => <a href={href} className="text-[#93B0AE] hover:text-[#0B1E47] underline transition-colors" target="_blank" rel="noopener noreferrer">{children}</a>,
                  ul: ({ children }) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="text-[#0B1E47]/70 font-light">{children}</li>,
                  blockquote: ({ children }) => <blockquote className="border-l-4 border-[#C5E5C1] pl-6 my-8 italic text-[#0B1E47]/60">{children}</blockquote>,
                  code: ({ children }) => <code className="bg-[#F8FAF9] px-2 py-1 text-sm font-mono text-[#0B1E47]">{children}</code>,
                  pre: ({ children }) => <pre className="bg-[#0B1E47] text-[#93B0AE] p-6 overflow-x-auto my-8 text-sm">{children}</pre>,
                }}
              >
                {post.content}
              </ReactMarkdown>
            )}
          </motion.article>
        </div>
      </section>

      {/* Back to Publications */}
      <section className="relative bg-[#F8FAF9] py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <Link
            to={createPageUrl('Publications')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B1E47] text-white font-medium hover:bg-[#091F46] transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            Back to Publications
          </Link>
        </div>
      </section>
    </div>
  );
}
