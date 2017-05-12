import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import Display from 'react-native-display';
import _ from 'lodash'
import Communications from 'react-native-communications';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ListView,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class cruzer extends Component {
  // The URL for the `posts` endpoint provided by WP JSON API
  REQUEST_URL = 'http://codingland.com/Cruzer/src/data.txt'
  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  filter= ''
  _members = [];
  getMemberFromApiAsync() {
    return fetch(this.REQUEST_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        //console.error(error);
      });
  }
  searchMember(text){
    if(text.length > 2 ){
      filter = text.toLowerCase();
      _status = {};
      _members = _.filter(this.members, function(obj) {
          if((obj.FullName && obj.FullName.toLowerCase().indexOf(filter) != -1) ||
                                (obj.VehicleNumber && obj.VehicleNumber.toLowerCase().indexOf(filter) != -1)){
            _status[obj.Id] = false;
            return obj;
          }
      });
      this.setState({status: _status});
      this.setState({dataSource: this.ds.cloneWithRows(_members)});
    }
  }
  constructor(props) {
    super(props);
    this.getMemberFromApiAsync().then((members)=> {this.members = members; } );
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
      modalVisible: false,
      status: {}
    };
  }
  showRow(id){
    var _status = this.state.status;
    _status[id] = !_status[id];
    this.setState({status: _status});
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
            onPress={() => Alert.alert(
              'Uhm!',
              ''
              )}>
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
              <TouchableHighlight onPress={()=> this.showRow(rowData.Id)}>
                <View>
                  <View style={[styles.tableItemRow]}>
                    <Text style={[styles.cols, styles.cols2]}>{rowData.FullName}</Text>
                    <Text style={styles.cols}>{rowData.VehicleNumber}</Text>
                  </View>
                  <Display enable={this.state.status[rowData.Id]}>
                    <View style={[styles.tableItemRow, styles.tableItemRowExt]}>
                      <TouchableOpacity onPress={() => Communications.phonecall(rowData.CellPhone, true)}>
                        <Text style={[styles.cols, styles.colsLeft]}>{rowData.CellPhone}</Text>
                      </TouchableOpacity>
                      <Text style={styles.cols}>{rowData.City}</Text>
                      <Text style={styles.cols}>View Profile</Text>
                    </View>
                  </Display>
                </View>
              </TouchableHighlight>
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

AppRegistry.registerComponent('cruzer', () => cruzer);