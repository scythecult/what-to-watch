type TFavoritesCount = {
  count: number;
};

const FavoritesCount = ({ count }: TFavoritesCount) => (
  <h1 className="page-title user-page__title">
    My list <span className="user-page__film-count">{count}</span>
  </h1>
);

export { FavoritesCount };
