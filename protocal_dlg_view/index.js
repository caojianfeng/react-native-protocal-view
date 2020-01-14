
import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
const RNExitApp = require('react-native-exit-app').default;

export default class ProtocalDlgView extends Component {

  render() {
    // console.log('pvd.render.RNExitApp', RNExitApp)
    const { onPressOK, onPressCancel, appName, privacyHtml, userProtocalHtml, showHtmlDlg } = this.props;
    return (

      <View style={styles.container}>
        <Text style={styles.titleText} >
          {`${appName}个人信息保护指引`}
        </Text>

        <ScrollView style={styles.content}>
          <Text style={[styles.contentText, styles.contentTextBold]}>
            {`感谢您信任并使用${appName}\n`}
          </Text>
          <Text style={[styles.contentText, styles.contentTextBold]}>
            {`当您使用本App前，请仔细阅读《隐私政策》、《用户协议》，了解我们对您个人信息的使用和处理规则。\n`}
          </Text>
          <Text style={styles.contentText}>
            我们深知个人隐私的重要性，在您使用我们的产品和服务时所提供的个人信息，将只用于本《隐私政策》中
            规定的用途。为了您更好的使用本App，请您在使用前仔细阅读并确认您已经充分理解本《隐私政策》的内容
            同时了解我们的《用户协议》。
              {'\n'}
          </Text>
          <Text style={[styles.contentText, styles.contentTextBold]}>
            如果您同意<Text onPress={() => { showHtmlDlg('隐私政策', privacyHtml) }} style={styles.contentTextLink}>《隐私政策》</Text>、
              <Text onPress={() => { showHtmlDlg('用户协议', userProtocalHtml) }} style={styles.contentTextLink}>《用户协议》</Text>，请点击“继续使用”。
            </Text>
        </ScrollView>
        <View style={styles.bottom_bar}>
          <TouchableOpacity
            style={styles.button}
            onPress={onPressCancel ? onPressCancel : () => RNExitApp && RNExitApp.exitApp()}>
            <Text style={styles.buttonText}>放弃并退出</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonOK]}
            onPress={onPressOK}>
            <Text style={[styles.buttonText, styles.buttonOKText]}>继续使用</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}