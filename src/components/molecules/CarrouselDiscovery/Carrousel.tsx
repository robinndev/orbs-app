import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { CustomButton } from "../customButton";

import { styles } from "./styles";
import { ICarrousel } from "../../../models/carrousel";

export default function MyCarousel({ data }: ICarrousel) {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const images = [
    require("../../../assets/discovery-one.png"),
    require("../../../assets/discovery-two.png"),
    require("../../../assets/discovery-three.png"),
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.container}>
      <Image source={images[item.index]} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      {item.isButton && (
        <CustomButton
          title={"Quero conhecer o mundo"}
          func={() => console.log("teste")}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={350}
        itemWidth={350}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.inactivePaginationDot}
        inactiveDotOpacity={1}
        inactiveDotScale={0.6}
      />
    </View>
  );
}
