"use client";
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const videosPerPage = 6;



export default function Testimonies() {
    const [videosData, setVideosData] = useState<string[]>([]);
    const [videos, setVideos] = useState<string[]>([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const data = [
            'https://www.youtube.com/embed/GtOipFwkM8U', 
            'https://www.youtube.com/embed/J8wK-q6dM2k', 
            'https://www.youtube.com/embed/6Gk4TK_1Zyc',
        ];

        setVideosData(data);
        setVideos(data.slice(0, videosPerPage));
    }, [])

    const fetchMoreVideos = () => {
        const nextVideos = videosData.slice(videos.length, videos.length + videosPerPage);

        if (nextVideos.length === 0) {
            setHasMore(false);
        } else {
            setVideos((prevVideos) => [...prevVideos, ...nextVideos]);
        }
    };


    return (
        <section className='testimonies p-5'>
            <h4 className='text-3xl font-semibold text-center text-gray-900'>
                Histórias inspiradoras para fortalecer a sua fé
            </h4>

            <div className="px-4 py-8">
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchMoreVideos}
                    hasMore={hasMore}
                    loader={<p className="text-center">Carregando...</p>}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {videos.map((video, index) => (
                            <div key={index} className="aspect-w-16 h-72 aspect-h-9">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src={video}
                                    title={`YouTube video ${index + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </section>
    );
}