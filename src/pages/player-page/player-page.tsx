import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Player } from '../../components/player/player';
import { mockDetails } from '../../mocks/details';

const PlayerPage = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-console
  console.log(id);

  return (
    <>
      <Helmet>
        <title>Что посмотреть. Вы смотрите {mockDetails?.name}</title>
      </Helmet>

      {mockDetails && <Player film={mockDetails} />}
    </>
  );
};

export { PlayerPage };
