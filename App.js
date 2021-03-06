import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Image, View, ScrollView, Button, Linking, StyleSheet, Picker, Text, Vibration } from 'react-native'
import moment from 'moment'
import CustomButton from "./components/CustomButton"
import Form from "./components/Form"





const App = () => {

  const [categories, setCategories] = useState('Climate')
  const [news, setNews] = useState([])

  const apiKey = `ceaaa691942f4f51925568bcf5183b80`
  const url = `https://newsapi.org/v2/everything?q=${categories}&from=2020-01-01`


  useEffect(() => {
    fetch(url,
      {
        headers:
          { Authorization: apiKey }
      })
      .then(res => res.json())
      .then(json => {
        setNews(json.articles)

      })
  }, [categories])

  return (


    <Container>

      <ScrollView>


        <Image
          source={require('./assets/bluesky.jpg')}
          style={{ width: 350, height: 150 }} />
        <View1>
          <Title4>Welcome to Blue Sky News!</Title4>
          <Title4>Updated from the world {moment().calendar()}</Title4>
          <Picker
            style={{ height: 50, width: 150, margin: 10, }}
            selectedValue={categories}
            onValueChange={currentCategories => setCategories(currentCategories)}>
            <Picker.Item label="Climate" value="Climate" />
            <Picker.Item label="Tesla" value="Tesla" />
            <Picker.Item label="Energy" value="Energy" />
            <Picker.Item label="Traveling" value="Traveling" />
            <Picker.Item label="Politics" value="Politics" />
            <Picker.Item label="Movies" value="Movies" />

          </Picker>
          <PickerText>
            Selected News category:
          </PickerText>

          <CustomButton
            text="How to read the articles?"
            textColor="white"
            backgroundColor="#8aa8e9"
          />

          <Title>{categories} News</Title>
        </View1>
        {news.map((articles) => (
          <View key={articles.publishedAt}>
            <Image
              source={{ uri: articles.urlToImage }}
              style={{ width: 350, height: 200, resizeMode: "contain" }}
            />
            <Title1>
              {articles.title}
            </Title1>
            <Title2>
              {moment(articles.publishedAt).fromNow()}
            </Title2>
            <Title3>
              {articles.content}
            </Title3>
            <Title4>
              Source: {articles.source.name}
            </Title4>
            <Button3 onPress={() => Linking.openURL(articles.url)}>
              <Title5>Link to article</Title5>
            </Button3>
          </View>
        ))}

        <Form />
        <Image
          source={require('./assets/bluesky.jpg')}
          style={{ width: 350, height: 150, marginTop: 100, }} />
        <Title4 style={{ color: "#8aa8e9" }}>
          By Nina Månsson as a React Native Project in  Technigo Frontend bootcamp, 2020.
            </Title4>
        <Title4>News and Images from News API 2020</Title4>
      </ScrollView>
    </Container >

  )
}

export default App

const View1 = styled.View`
  padding-bottom: 20;
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  
`
const PickerText = styled.Text`
  font-size: 18;
  color: white;
  align-items: center;
  justify-content: center;
  margin-bottom: 50;
  padding-top: 5;
  padding-right: 5;
  padding-bottom: 5;
  padding-left: 5;
  background-color: #4252a3;
  text-align: center;
  border-radius: 8;
`
const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding-top: 20; 
  padding-left: 10;
  padding-right: 10;
  margin-top: 5;
`

const Title = styled.Text`
  font-size: 44px;
  color: black;
  font-weight: 700;
  padding-top: 50px;
`
const Title1 = styled.Text`
  font-size: 30;
  color: black;
  padding-bottom: 15;
  font-weight:800;
`
const Title2 = styled.Text`
  font-size: 20;
  color: black;
  padding-top: 10;
  padding-bottom: 5;
`
const Title3 = styled.Text`
  font-size: 16;
  color: black;
  padding-top:10;
  line-height: 24;
`
const Title4 = styled.Text`
font-size: 14;
color: black;
padding-top:10;
padding-bottom: 10;
`
const Title5 = styled.Text`
font-size: 18;
font-weight: bold;
color: white;
`
const Button3 = styled.TouchableOpacity`
  width: 350;
  height: 50;
  background-color: #8aa8e9;
  margin-bottom: 40;
  text-align: center;
  border-radius: 8;
  align-items: center;
  justify-content: center;
  text-align: center;
`

