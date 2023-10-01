const generateFilms = (filmCount = 20) =>
  Array.from({ length: filmCount })
    .fill('')
    .map(() => ({
      id: crypto.randomUUID(),
    }));

export { generateFilms };
