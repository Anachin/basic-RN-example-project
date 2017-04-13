'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class Home extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      cellDataSource: ds.cloneWithRows(['Václav Ananda', 'Herakleides Marian', 'Eusebio Eguzki', 'Ale Aristotle', 'Zhelimir Sikandar']),
      visible: false
    };
  }

  _renderCell(rowData) {
    return (
      <View style={styles.cellContainer}>
        <TouchableOpacity>
          <Image resizeMode='cover' source={{uri: 'https://unsplash.it/400/200/?random'}} defaultSource={require('../../Images/Cells/cellPlaceholder.png')} style={styles.cellContainer}>
            <View style={styles.textContainer}>
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 25}}>{rowData}</Text>
            </View>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.cellDataSource}
          renderRow={this._renderCell.bind(this)}
          style={styles.listView}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  cellContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    width:width,
    height:(height/3)-100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listView: {
    flex:1,
    width: width,
    marginTop: height*0.1
  },
  separator: {
    flex: 1,
    height: 5,
    marginBottom: 3,
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

export default Home;
