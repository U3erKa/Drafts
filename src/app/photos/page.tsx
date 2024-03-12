import { FC, Suspense, use } from 'react';
import Link from 'next/link';
import { JSONPLACEHOLDER_RESOURCES, getFromJsonPlaceholder } from 'api/fetch';
import { Loading } from 'components';
import type { PhotoEntry } from 'api/types';

const PhotosListEntries: FC<{ photos: Promise<PhotoEntry[]> }> = ({
  photos,
}) => {
  const usablePhotos = use(photos);
  return (
    <ul>
      {usablePhotos.map(({ albumId, id, title, url, thumbnailUrl }) => (
        <li key={id}>
          <h1>{title}</h1>
          <a href={url}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumbnailUrl} alt={title} />
          </a>
          <p>Id: {albumId}</p>
        </li>
      ))}
    </ul>
  );
};

const PhotosList = function () {
  const photos = getFromJsonPlaceholder<PhotoEntry[]>(
    JSONPLACEHOLDER_RESOURCES.PHOTOS,
  );

  return (
    <main>
      <Link href="/">Home</Link>
      <Suspense fallback={<Loading />}>
        <PhotosListEntries photos={photos} />
      </Suspense>
    </main>
  );
};

export default PhotosList;
