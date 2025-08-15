import { StyleSheet, View } from "react-native";

// View : 전체 감싸는 컨테이너
// Text : 텍스트 표시 컴포넌트 
// - text 작성시 text 감싸는 Text 컴포넌트 사용
// style : 스타일 적용 props

//Image resizeMode : 이미지 크기 조절 props
// - contain : 이미지 원본 따라 , cover : 지정 사이즈 따라 

export default function Index() {
  return (  
    <>
    {/*<ScrollView
      style={styles.scrollView}
    >
      <Text style = {styles.mainText}>Hello world.</Text>
      <Image source={{uri: "https://picsum.photos/seed/picsum/200/300"}}
      style={{width:200, height:300}}
      resizeMode="cover"/>
      <TextInput style={styles.inputText} 
      placeholder = "Enter your name"
      placeholderTextColor="black"/>
      <Text style = {styles.text}>
        애국가 1절 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
        2절 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
        3절 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심 일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
        4절 이 기상과 이 맘으로 충성을 다 하여 괴로우나 즐거우나 나라 사랑하게 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
        </Text>
    </ScrollView>*/}
    <View style={[styles.container2,]}>
      <View style={{flex: 1, backgroundColor: 'pink'}} />
      <View style={{flex: 1, width:200, backgroundColor: 'orange'}} />
      <View style={{flex: 1, backgroundColor: 'green'}} />
    
    </View>
    </>
  );  
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  mainText: { 
    fontSize: 20,
    fontWeight: "bold",
    borderWidth : 1,
    borderColor : "blue",
    padding : 10,
    margin: 10,
    borderRadius: 10,
  },
  inputText: { 
    fontSize: 10,
    borderWidth : 1,
    borderColor : "black",
    backgroundColor : "white",
    padding : 10,
    margin: 10,
    borderRadius: 10,
    width: 200,
    height: 50,
  },
  text: {  
    fontSize: 40,
  },
  container2: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    //alignItems: "center",
    //justifyContent: "center",
  },
});