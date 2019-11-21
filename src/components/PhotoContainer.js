import React from 'react';
import Photos from './Photos';
import NoResults from './NoResults';

const PhotoContainer = (props) => {
  const results = props.data;
  let photos;

  if (results.length > 0) {
    photos = results.map(photo => <Photos url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} />);
  } else {
    photos = <NoResults />
  }

  return (
    <div className="photo-container">
      <h2>Results for { props.title }</h2>
      <ul>
        {/* renders the list of photos using a JSX expression */}
        { photos }
      </ul>
    </div>
  );
}

export default PhotoContainer;
