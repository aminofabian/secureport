'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, MessageCircle, ThumbsUp, Share2, Clock, User } from 'lucide-react';
import { getImageUrl } from '@/utils/imageUtils';

const podcasts = [
  {
    id: 1,
    title: "Cybersecurity in the Age of AI",
    description: "Discussing the impact of artificial intelligence on modern security practices.",
    videoUrl: "https://www.youtube.com/embed/your-video-id-1",
    thumbnail: getImageUrl("/5.jpg"),
    duration: "45:20",
    host: "Dr. Sarah Chen",
    views: "12.5K",
    likes: 856,
    comments: [
      {
        id: 1,
        user: "Alex Thompson",
        avatar: "/6.jpg",
        comment: "Great insights on AI implementation in security systems!",
        timestamp: "2 hours ago",
        likes: 24,
      },
      {
        id: 2,
        user: "Maria Garcia",
        avatar: "/7.jpg",
        comment: "The part about machine learning detection was fascinating.",
        timestamp: "5 hours ago",
        likes: 18,
      },
    ],
  },
  // Add more podcasts here...
];

export default function PodcastsSection() {
  const [activePodcast, setActivePodcast] = useState(podcasts[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 dark:from-black dark:to-emerald-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 dark:text-white">
            Security Talks
          </h2>
          <p className="text-emerald-800/80 dark:text-emerald-300/80 max-w-2xl mx-auto">
            Expert discussions on the latest cybersecurity trends and best practices
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              <iframe
                src={`${activePodcast.videoUrl}${isPlaying ? '?autoplay=1' : ''}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-900 dark:text-white">
                {activePodcast.title}
              </h3>
              <p className="text-emerald-800/70 dark:text-emerald-300/70">
                {activePodcast.description}
              </p>

              {/* Interaction Bar */}
              <div className="flex items-center justify-between border-y border-emerald-900/10 dark:border-emerald-400/10 py-4">
                <div className="flex items-center space-x-6">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center space-x-2 text-emerald-900 dark:text-emerald-400"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>
                  <button 
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center space-x-2 text-emerald-900 dark:text-emerald-400"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Comments ({activePodcast.comments.length})</span>
                  </button>
                  <button className="flex items-center space-x-2 text-emerald-900 dark:text-emerald-400">
                    <ThumbsUp className="w-5 h-5" />
                    <span>{activePodcast.likes}</span>
                  </button>
                </div>
                <button className="text-emerald-900 dark:text-emerald-400">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <AnimatePresence>
              {showComments && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <h4 className="font-semibold text-emerald-900 dark:text-white">
                    Comments
                  </h4>
                  <div className="space-y-4">
                    {activePodcast.comments.map((comment) => (
                      <CommentCard key={comment.id} comment={comment} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Playlist */}
          <div className="space-y-4">
            <h4 className="font-semibold text-emerald-900 dark:text-white">
              More Episodes
            </h4>
            <div className="space-y-4">
              {podcasts.map((podcast) => (
                <PodcastCard
                  key={podcast.id}
                  podcast={podcast}
                  isActive={podcast.id === activePodcast.id}
                  onClick={() => setActivePodcast(podcast)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommentCard({ comment }: { comment: typeof podcasts[0]['comments'][0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex space-x-4 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20"
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={comment.avatar}
          alt={comment.user}
          className="object-cover"
        />
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-medium text-emerald-900 dark:text-white">
            {comment.user}
          </span>
          <span className="text-sm text-emerald-800/60 dark:text-emerald-300/60">
            {comment.timestamp}
          </span>
        </div>
        <p className="text-emerald-800/80 dark:text-emerald-300/80">
          {comment.comment}
        </p>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-sm text-emerald-900 dark:text-emerald-400">
            <ThumbsUp className="w-4 h-4" />
            <span>{comment.likes}</span>
          </button>
          <button className="text-sm text-emerald-900 dark:text-emerald-400">
            Reply
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function PodcastCard({ 
  podcast, 
  isActive, 
  onClick 
}: { 
  podcast: typeof podcasts[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full flex space-x-4 p-3 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-emerald-900 dark:bg-emerald-600' 
                  : 'bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/40'}`}
    >
      <div className="relative w-24 aspect-video rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={podcast.thumbnail}
          alt={podcast.title}
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Play className={`w-6 h-6 ${isActive ? 'text-emerald-400' : 'text-white'}`} />
        </div>
      </div>
      <div className="flex-1 text-left space-y-1">
        <h5 className={`font-medium line-clamp-2 ${
          isActive ? 'text-white' : 'text-emerald-900 dark:text-white'
        }`}>
          {podcast.title}
        </h5>
        <div className="flex items-center space-x-3 text-sm">
          <div className="flex items-center space-x-1">
            <User className={`w-4 h-4 ${
              isActive ? 'text-emerald-300' : 'text-emerald-800/60 dark:text-emerald-300/60'
            }`} />
            <span className={isActive ? 'text-emerald-300' : 'text-emerald-800/60 dark:text-emerald-300/60'}>
              {podcast.host}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className={`w-4 h-4 ${
              isActive ? 'text-emerald-300' : 'text-emerald-800/60 dark:text-emerald-300/60'
            }`} />
            <span className={isActive ? 'text-emerald-300' : 'text-emerald-800/60 dark:text-emerald-300/60'}>
              {podcast.duration}
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
} 