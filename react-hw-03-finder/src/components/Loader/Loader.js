import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spiner = () => {
  return (
    <Loader
      style={{ textAlign: 'center' }}
      type="Oval"
      color="#00BFFF"
      height={50}
      width={50}
      timeout={3000} //3 secs
    />
  );
};
export default Spiner;
