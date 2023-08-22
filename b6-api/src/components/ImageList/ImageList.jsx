import ImageItem from "./ImageItem";
import './ImageList.css';

function ImageList({ imagesPlaceHolder }) {
    return (
        <div className="imageList">
            {imagesPlaceHolder.map((image, i) => {
                return (<ImageItem key={i} image={image} />);
            })}
        </div>
    );
}

export default ImageList;