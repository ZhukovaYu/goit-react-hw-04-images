import '../ImageGallery/ImageGallery.css';

export const ImageGallery = ({ images, openModal }) => {
    return (
        
        <ul className="gallery">
            {images.map(image => {
                return <li key={image.id} >
                    <img className ="photo-card"
                    src={image.webformatURL} 
                    alt={image.tags} 
                    onClick={() => openModal(image.largeImageURL)} 
                    />
                    </li>
            }) }
            </ul>
        
    )
}