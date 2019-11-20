import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,FlatList } from 'react-native';

import ActItem from './components/ActItem';
import ActInput from './components/ActInput';


export default function App() {
  const [activities, setActivities] = useState([])
  const [addMode,setAddMode] = useState(false)
  const addActivityHandler = actName => {
    setActivities(currentActivities => [...
        currentActivities, 
        {id: Math.random().toString(), value: actName}]);
    setAddMode(false);
  };

  const removeGoalHandler = actID =>{
    setActivities(currentActivities => {
      return currentActivities.filter(activity => activity.id !== actID);
    });
  };

  const cancelActInputHandler = () => {
    setAddMode(false)
  };
  return (
    <View style={styles.screen}>
      <Button title="Add new Activity" onPress={() => setAddMode(true)}/>
      <ActInput 
        visible = {addMode} 
        onAddActivity={addActivityHandler}
        visibleHandler = {cancelActInputHandler}
      />
      {/*  Flat list gives a better performance than scroll view because it doesn't render components that can't be viewed  */}
      <FlatList
      keyExtractor={(item,index) => item.id}
       data={activities} 
       renderItem={itemData => 
        <ActItem 
        id ={itemData.item.id} 
        onDelete={removeGoalHandler} 
        activity={itemData.item.value}/>
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
