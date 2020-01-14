import { StyleSheet } from 'react-native';
// import { Dimensions, StatusBar } from 'react-native';
import { px2dp, onePix } from '../utils';


export default StyleSheet.create({
  container: {
    flex: 1,
    width: '96%',
    marginTop: '8%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: px2dp(10),
    borderTopRightRadius: px2dp(10),
    elevation: 5,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowColor: '#000000',
  },
  titleText: {
    fontSize: 22,
    color: '#333',
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingTop: px2dp(30),
    paddingBottom: px2dp(10),
  },

  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  bottom_bar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  button: {
    padding: px2dp(28),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3399ff'
  },
  buttonText: {
    fontSize: px2dp(16),
    color: '#fff'
  }
});
