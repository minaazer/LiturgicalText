/** @format */
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../../../assets/background.png";
import { presentationStyles } from "../../css/presentationStyles";
import HolyWeekData from "../../../data/jsons/holyWeek.json";
import { getJson } from "../../functions/jsonCache";


const HolyWeekDayScreen = ({ route }) => {
    
    const serviceName = route.params.serviceName;
    const [holyWeekJson, setHolyWeekJson] = useState(HolyWeekData);

    useEffect(() => {
      let isMounted = true;
      getJson("holyWeek.json", HolyWeekData).then((data) => {
        if (isMounted && data) {
          setHolyWeekJson(data);
        }
      });
      return () => {
        isMounted = false;
      };
    }, []);

    const serviceData = holyWeekJson.find((item) => item.service[0] === serviceName);
    const serviceHours = serviceData?.hours || [];
    
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const isPortrait = height >= width;
    const isCompactPortrait = isPortrait && width < 450;

  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        style={presentationStyles.backgroundImage}
        resizeMode="repeat"
      >
        <View
          style={
            isCompactPortrait
              ? presentationStyles.headerLinksStacked
              : presentationStyles.headerLinksRow
          }
        >
          <View
            style={[
              presentationStyles.sideHeaderContainer,
              {
                flex: isCompactPortrait ? 0 : 1,
                width: isCompactPortrait ? "100%" : undefined,
              },
            ]}
          >
            <Text style={presentationStyles.pageHeader}>{serviceName}</Text>
          </View>

          <View
            style={[
              presentationStyles.sideContentContainer,
              {
                flex: isCompactPortrait ? 1 : 3,
                justifyContent: isCompactPortrait ? "flex-start" : "center",
              },
            ]}
          >
            <ScrollView
              contentContainerStyle={[
                presentationStyles.iconRow,
                { flexGrow: 1, justifyContent: "center" },
              ]}
            >
              {serviceHours.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[presentationStyles.itemContainer]}
                  onPress={() =>
                    navigation.navigate(
                      item.linkStack
                        ? `${serviceName.replace(/\s+/g, "-")}-${item.hour[0].replace(/\s+/g, "-")}`
                        : `${serviceName.replace(/\s+/g, "-")}-${item.hour[0].replace(/\s+/g, "-")}`,
                      {
                        serviceName: serviceName,
                        hourName: item.hour[0],
                      }
                    )
                  }
                >
                  <Text style={presentationStyles.pageMenu}>{item.hour[0]}</Text>
                </TouchableOpacity>
              ))}
              {serviceHours.length === 0 && (
                <Text style={presentationStyles.pageMenu}>Loading...</Text>
              )}
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HolyWeekDayScreen;
