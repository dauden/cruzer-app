/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'apsl-react-native-button'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ListView,
  Modal,
  TouchableHighlight
} from 'react-native';

export default class cruzer extends Component {
  // The URL for the `posts` endpoint provided by WP JSON API
  REQUEST_URL = 'http://codingland.com/Cruzer/src/data.txt'
  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    
  getMemberFromApiAsync() {
    return fetch(this.REQUEST_URL)
      .then((response) => {response.json(); })
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        //console.error(error);
      });
  }
  searchMember(text){
    if(text.length > 2 ){
      var filter = text.toLowerCase();
      console.log(this.state.members);
      this.state.dataSource = this.ds.cloneWithRows(
      this.state.members.filter(function(obj) {
          return (obj.FullName && obj.FullName.toLowerCase().indexOf(filter) != -1) ||
                                (obj.VehicleNumber && obj.VehicleNumber.toLowerCase().indexOf(filter) != -1);
      }));
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      members: this.getMemberFromApiAsync(),
      dataSource: this.ds.cloneWithRows([]),
     modalVisible: false,
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./img/logo-dark.png')} style={{width: 222, height: 73}}/>
        <View style={[styles.thinRow, styles.bottomRow20]}>
            <Button
            style={[styles.buttonStyle, styles.sosStyle]} textStyle={styles.textStyle}
            onPress={() => {
              console.log('world!')
            }}>
            SOS
            </Button>
            <Button
            style={[styles.buttonStyle,styles.bullStyle]} textStyle={styles.textStyle}
            onPress={() => {
              console.log('world!')
            }}>
             Bulletin
            </Button>
        </View>
        <View style={styles.thinRow}>
          <TextInput
              style={styles.textInputStyle}
              placeholder="Enter Person name,Car's Number..."
              autoCorrect={false}
              onChange={(event) => this.searchMember(event.nativeEvent.text)}
            />
          </View>
        <View style={styles.thinRow}>
          <View style={styles.linkDot}>
          </View>
        </View>
        <View style={styles.row}>
          <ListView
            enableEmptySections={true} 
            dataSource={this.state.dataSource}
            renderRow={(rowData) => 
              <View style={[styles.tableItemRow]}>
                <Text style={[styles.cols, styles.cols2]}>{rowData.FullName}</Text>
                <Text style={styles.cols}>{rowData.CarNumber}</Text>
              </View>
            }
          />
        </View>
        <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
          <Text>What Up?</Text>
        </TouchableHighlight>
        <Text>Design by Dau Den</Text>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={{marginTop: 22}}>
            <Text>Hello World!</Text>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Close</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 30,
    flex: 1
  },
  linkDot: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 0.5,
    flex: 1, 
    flexDirection: 'row',
    backgroundColor: '#ccc'
  },
  row: {
    flex: 1, 
    flexDirection: 'row'
  },
  bottomRow20: {
    marginBottom: 20
  },
  thinRow:{
    flex: 0, 
    flexDirection: 'row',
    height: 35
  },
  cols2: {
    flex: 2
  },
  cols: {
    flex: 1, 
    justifyContent: 'space-between',
    flexDirection: 'column',
    textAlign: 'center'
  },
  tableItemRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#c3c3c3',
    borderWidth: 1,
    height: 30,
    flex: 1, 
    flexDirection: 'row',
    backgroundColor: '#ccc'
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Avenir',
    fontWeight: 'bold'
  },
  sosStyle:{
    borderColor: '#c0392b',
    backgroundColor: '#e74c3c',
  },
  bullStyle:{
    borderColor: '#eea236',
    backgroundColor: '#f0ad4e',
  },
  buttonStyle: {
    margin: 5,
    width: 70,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  textInputStyle:{
    height: 30, 
    flex: 1, 
    flexDirection: 'row',
  }
});

AppRegistry.registerComponent('cruzer', () => cruzer);
