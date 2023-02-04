import { iconStar } from '@/media/svg/star';

export const showRating = (rate: number) => {
  const rating = Math.round(rate);
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(iconStar('#F26A61'));
    } else {
      stars.push(iconStar('#E9E9EB'));
    }
  }
  return stars;
};
