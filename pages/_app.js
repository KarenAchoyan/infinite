import PropTypes from "prop-types";
import store from "store/store";
import "antd/dist/reset.css";
import '@/styles/fonts.css'
import '@/styles/globals.css'


function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />)
}

App.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.func,
};

export default store.withRedux(App);