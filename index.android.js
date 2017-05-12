/**
 * Cruzer React Native App
 * https://github.com/dauden/cruzer-app
 * @author: "Dau Den ® <anh.nguyen@codingland.com>",
 * @license: "ISC",
 */
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 30,
    flex: 1
  },
  linkDot: {
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
    flex: 2,
    textAlign: 'left',
    marginLeft: 10
  },
  colsLeft: {
    textAlign: 'left',
    marginLeft: 10
  },
  cols: {
    flex: 1, 
    justifyContent: 'space-between',
    flexDirection: 'column',
    textAlign: 'center'
  },
  tableItemRowExt: {
    backgroundColor: '#c3c9c3'
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
    margin: 10,
    height: 50, 
    flex: 1, 
    flexDirection: 'row',
  }
});

global.styles = styles;

import { cruzer } from './app';