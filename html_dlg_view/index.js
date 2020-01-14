
import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Platform
} from 'react-native'
import { WebView } from 'react-native-webview';
import styles from './styles';

const { createHtml } = Platform.select({
  android: require('./html_container.android'),
  ios: require('./html_container.ios'),
})

export default class HtmlDlgView extends Component {

  render() {
    const { title, content, onHidePressed } = this.props;
    const protocalHtml = createHtml(content);
    // console.log(`title:${title} , protocalHtml:${protocalHtml}`)
    return (

      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText} >
          {title}
        </Text>
        <WebView
          style={styles.content}
          source={{ html: protocalHtml }}
          scalesPageToFit
        />
        <View style={styles.bottom_bar}>
          <TouchableOpacity
            style={styles.button}
            onPress={onHidePressed}>
            <Text style={styles.buttonText}>已阅</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}