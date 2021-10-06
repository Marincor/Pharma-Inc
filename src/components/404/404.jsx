import Lottie from 'react-lottie';
import { defaultOptions } from "./lottiesConfig"
import { Box } from "./styles";

export default function Page404() {
  return (
    <Box>
      <div>
        <Lottie options={defaultOptions} height={100} width={300} />
      </div>
      <h2>Something is not right... comeback to the homepage!</h2>
    </Box>
  );
}
