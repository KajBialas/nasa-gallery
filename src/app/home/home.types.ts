export type PhotoDetailsType = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  /* eslint-disable camelcase */
  media_type: 'image' | 'video';
  service_version: string;
  /* eslint-enable camelcase */
  title: string;
  url: string;
};

export type UsePhotosType = {
  currentDate: Date;
  handleNextPhoto: () => void;
  handleAddFavourite: (date: Date) => void;
  isLoading: boolean;
  details: PhotoDetailsType | null;
};
