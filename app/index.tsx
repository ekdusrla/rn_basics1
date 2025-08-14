import { StyleSheet, Text, View } from "react-native";

// View : 전체 감싸는 컨테이너
// Text : 텍스트 표시 컴포넌트 
// - text 작성시 text 감싸는 Text 컴포넌트 사용
// style : 스타일 적용 props

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style = {styles.mainText}>Hello world.</Text>
      <Text style = {{fontSize: 20,
      fontWeight:"bold",
      color: "pink",
      borderWidth : 1,
      borderColor : "green",
      padding : 10,
      margin: 10,
      borderRadius: 10,}}>Hello world.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth : 1,
    borderColor : "blue",
    padding : 10,
    margin: 10,
    borderRadius: 10,

  },
});