import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { supabase, supabaseUrl } from '../utils/supabaseClient';
import { useGallery } from '../utils/GalleryContext';
import ModalImage from './ModalImage';

interface ImageData {
    id: number;
    webformatURL: string;
}

const SharedImages = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const { setImageData } = useGallery();

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const { data, error } = await supabase.storage
                .from('sharedimages')
                .list('');

            if (error) {
                throw new Error(error.message);
            }

            if (data && data.length > 0) {
                const imageUrls = data.map((image: any) => ({
                    id: image.id,
                    webformatURL: `${supabaseUrl}/storage/v1/object/public/sharedimages/${image.name}`
                }));
                setImages(imageUrls);
                setImageData(imageUrls);
            } else {
                setImages([]);
            }
        } catch (error: any) {
            console.error('Error getting images:', error.message);
        }
    };

    const memoizedImages = useMemo(() => images.slice(1), [images]);

    const openModal = (imageUrl: string) => {
        setShowModal(true);
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage('');
    };

    const handleDownload = async () => {
        try {
            const response = await fetch(selectedImage);
            const blob = await response.blob();
            const webformatURL = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = webformatURL;
            a.download = 'image.jpg';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(webformatURL);
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    };

    return (
        <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
            <Masonry
                breakpointCols={{ default: 4, 1100: 4, 800: 3, 500: 2 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column m-5"
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                {memoizedImages.map(image => (
                    <div key={image.id} className='masonry-item'>
                        <Image
                            src={image.webformatURL}
                            alt={`Image ${image.id}`}
                            width={600}
                            height={400}
                            className='rounded-lg overflow-hidden hover:opacity-50 transition-opacity duration-300 m-2 cursor-pointer'
                            onClick={() => openModal(image.webformatURL)}
                            priority
                        />
                    </div>
                ))}
            </Masonry>
            {showModal && (
                <ModalImage
                    src={selectedImage}
                    alt="Selected Image"
                    onDownload={handleDownload}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default SharedImages;
