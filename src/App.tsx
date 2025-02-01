import {SafeAreaView, View, Text, StatusBar, StyleSheet, Pressable, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Icons from './components/Icons'
import Snackbar from 'react-native-snackbar';

const App = () => {
  const [isCross, setIsCross] = useState<boolean>(false)
  const [gameWinner, setgameWinner] = useState('')
  const [gameState, setGameState] = useState(new Array(9).fill('empty',0,9))
  
  const reloadGame = () =>{
    setIsCross(false)
    setgameWinner('')
    setGameState(new Array(9).fill('empty',0,9))
  }

  const checkIsWinner = () =>{ 
    
  }

  const onChangeItem = (itemNumber: number) =>{ 
    if(gameWinner){
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000000',
        textColor: '#FFFFFF'
      })
    }
    if (gameState[itemNumber] === 'empty'){
      gameState[itemNumber] = isCross ? 'cross' : 'circle'
      setIsCross(!isCross)
    }else{
      return Snackbar.show({
        text: "Position is already filled",
        backgroundColor: "red",
        textColor: "#FFF"
      })
    }
    checkIsWinner()
  }

  return (
    <SafeAreaView>
      <StatusBar />
      { gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text>{gameWinner}</Text>
        </View>
      ) : (
        <View
        style={[styles.playerInfo, isCross ? styles.playerX : styles.playerO]}
        >
          <Text style={styles.gameTurnTxt}>
            Player {isCross ? 'X' : 'O'}'s Trun
          </Text>
        </View>
      )}
      <FlatList
      numColumns={3}
      data={gameState}
      style={styles.grid}
      renderItem={({item, index}) => (
        <Pressable
        key={index}
        style={styles.card}
        onPress={() => onChangeItem(index)}
        >
          <Icons name={item} />
        </Pressable>
      )}
      />
      {/* game action */}
      <Pressable
      style={styles.gameBtn}
      onPress={reloadGame}
      >
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start new game' : 'Reload the game'}
        </Text>
      </Pressable>
      {/* <Icons name={'pencil'}/> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default App