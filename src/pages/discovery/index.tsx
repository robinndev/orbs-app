import { View } from "react-native";
import { styles } from "./styles";
import MyCarousel from "../../components/molecules/CarrouselDiscovery/Carrousel";

export const Discovery = () => {
  const discoveryDataCarrousel = [
    {
      index: 0,
      title: "Welcome To The Fun Magic Media",
      subtitle:
        "Dummmyu Text Is Also Used To Demonstrate The Apperance Of Different Typefaces and Layouts",
    },
    {
      index: 1,
      title: "Welcome To The Fun Magic Media",
      subtitle:
        "Dummmyu Text Is Also Used To Demonstrate The Apperance Of Different Typefaces and Layouts",
    },
    {
      index: 2,
      title: "Welcome To The Fun Magic Media",
      subtitle:
        "Dummmyu Text Is Also Used To Demonstrate The Apperance Of Different Typefaces and Layouts",
      isButton: true,
      buttonTitle: "Descubra o mundo",
    },
  ];

  return (
    <View style={styles.container}>
      <MyCarousel data={discoveryDataCarrousel} />
    </View>
  );
};
