export type StarringProps = {
  starring?: string[];
};

const MAX_STARRING_AMOUNT = 3;

export const Starring = ({ starring = [] }: StarringProps) => {
  if (!starring.length) {
    return null;
  }

  return (
    <p className="film-card__starring">
      <strong>
        Starring: {starring.map((star) => `${star} `)}
        {starring.length >= MAX_STARRING_AMOUNT && 'and other'}
      </strong>
    </p>
  );
};
