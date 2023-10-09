const generateFilms = (filmCount = 20) =>
  Array.from({ length: filmCount }, () => ({
    id: crypto.randomUUID(),
  }));

export { generateFilms };
