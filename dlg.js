import React, { Component } from 'react';
import ProtocalDlgView from './protocal_dlg_view';
import HtmlDlgView from './html_dlg_view';
import {
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
const Modal = require('react-native-modalbox').default;
// import Modal from "react-native-modal";
export default class ProtocalDlg extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      htmlDlgVisible: false,
      titleString: '',
      contentHtml: '',
    };
  }

  show = () => {
    this.setState({ modalVisible: true });
  }

  showHtml = (titleString, contentHtml) => {
    // console.log(`showHtml(${titleString}, ${contentHtml})`)
    this.setState({ titleString, contentHtml, htmlDlgVisible: true });
  }

  hide() {
    this.setState({ modalVisible: false });
  }

  render() {
    // return (<Text>PVTEST</Text>);
    const { modalVisible, htmlDlgVisible, titleString, contentHtml } = this.state;
    if (!modalVisible && !htmlDlgVisible) {
      return (<Text>PVTEST</Text>);
    }
    const self = this;
    return (
      <Modal
        style={{ backgroundColor: 'transparent' }}
        backdropOpacity={0.3}
        backdropPressToClose={false}
        isOpen={modalVisible || htmlDlgVisible}
        swipeToClose={false}
      >
        {modalVisible && (
          <ProtocalDlgView
            {...this.props}
            showHtmlDlg={this.showHtml.bind(this)}
          />)}
        {htmlDlgVisible && (
          <HtmlDlgView
            {...this.props}
            title={titleString}
            content={contentHtml}
            onHidePressed={() => { self.setState({ titleString: '', contentHtml: '', htmlDlgVisible: false }); }}
          />)}
      </Modal>
    )
  }
}