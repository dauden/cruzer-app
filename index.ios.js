/**
 * Cruzer React Native App
 * https://github.com/dauden/cruzer-app
 * @author: "Dau Den ® <anh.nguyen@codingland.com>",
 * @license: "ISC",
 */

import cruzer from 'app';
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
