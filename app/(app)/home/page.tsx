"use client"
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import VideoCard from '@/components/VideoCard'
import { Video } from '@/types'

function Home() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchVideos = useCallback(async () => {
    try {
      const response = await axios.get("/api/videos")
      if (Array.isArray(response.data)) {
        setVideos(response.data)
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Failed to fetch videos:", error);
      setError("Failed to fetch videos")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchVideos()
  }, [fetchVideos])

  const handleDownload = useCallback(async (url: string, title: string) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'video/mp4',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to download video');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', `${title}.mp4`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl); 
    } catch (error) {
      console.error('Download error:', error);
      
    }
  }, []);


  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Videos</h1>
      {videos.length === 0 ? (
        <div className="text-center text-lg text-gray-500">
          No videos available
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onDownload={handleDownload}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home
