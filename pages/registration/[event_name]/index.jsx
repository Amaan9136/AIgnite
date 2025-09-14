import { useRouter } from 'next/router';
import Formpage from '../../../components/forms';

const Index = () => {
  const router = useRouter();
  const { event_name } = router.query;

  return (
    <div>
      {event_name === 'techxhibit' ? (
        <>
        <Formpage formlink={"https://tally.so/r/wkLgR6"} />
        <h1>hiii</h1>
        </>
      ) : (
        <h1>No form available for this event: {event_name}</h1>
      )}
    </div>
  );
};

export default Index;
