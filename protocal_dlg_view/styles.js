import { StyleSheet } from 'react-native';
// import { Dimensions, StatusBar } from 'react-native';
import { px2dp, onePix } from '../utils';


export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: '2%',
    right: 0,
    width: '96%',
    alignSelf: 'center',
    height: px2dp(520),
    backgroundColor: '#ffffff',
    alignItems: 'center',
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
    fontWeight: 'bold',
    paddingTop: px2dp(30),
    paddingBottom: px2dp(10),
  },
  contentText: {
    fontSize: px2dp(16),
    color: '#666',
    lineHeight: px2dp(22)
  },
  contentTextBold: {
    color: '#333',
    fontWeight: 'bold'
  },
  contentTextLink: {
    color: '#3399ff',
    textDecorationLine: 'underline'
  },
  content: {
    paddingVertical: px2dp(30),
    paddingHorizontal: px2dp(20),
    borderTopColor: '#c3ccd1',
    borderTopWidth: onePix,
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
    backgroundColor: '#f3f3f3'
  },
  buttonOK: {
    backgroundColor: '#3399ff'
  },
  buttonText: {
    fontSize: px2dp(16),
    color: '#aaa'
  },
  buttonOKText: {
    color: '#fff'
  }
});
