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

        </>
      ) : event_name === 'tech-escape-room' ? (
        <>
        <Formpage formlink={"https://tally.so/r/3qypzd"} />

        </>
      ) : event_name === 'e-sports' ? (
        <>
        <Formpage formlink={"https://tally.so/r/mORe4g"} />

        </>
      ) : event_name === 'think-n-blink' ? (
        <>
        <Formpage formlink={"https://tally.so/r/3xGLXd"} />

        </>
      ) : (
        null
        // <h1>No form available for this event: {event_name}</h1>
      )}
    </div>
  );
};

export default Index;
