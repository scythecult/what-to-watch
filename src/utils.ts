const generateRatingValues = (count: number) =>
  Array.from({ length: count })
    .fill('')
    .map((_, index) => index + 1)
    .reverse();

export { generateRatingValues };
