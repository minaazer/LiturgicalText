/** @format */
import React from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../../../assets/background.png";
import { presentationStyles } from "../../css/presentationStyles";
import HolyWeekData from "../../../data/holyWeek/holyWeek.json";


const HolyWeekDayScreen = ({ route }) => {
    
    const serviceName = route.params.serviceName;
    const serviceData = HolyWeekData.find((item) => item.service[0] === serviceName);
    const serviceHours = serviceData.hours;
    
    const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        style={presentationStyles.backgroundImage}
        resizeMode="repeat"
      >
        <View style={presentationStyles.pageContainer}>
          <View style={presentationStyles.headerContainer}>
            <Text style={presentationStyles.pageHeader}>{serviceName}</Text>

          </View>

          <View style={presentationStyles.hoursContainer}>
            {serviceHours.map((item, index) => {
                

                return (
                <TouchableOpacity
                    key={index}
                    style={[presentationStyles.itemContainer]}
                    onPress={() =>
                    navigation.navigate(item.linkStack ? `${serviceName.replace(/\s+/g, "-")}-${item.hour[0].replace(/\s+/g, "-")}` : `${serviceName.replace(/\s+/g, "-")}-${item.hour[0].replace(/\s+/g, "-")}`, {
                        serviceName: serviceName,
                        hourName: item.hour[0],
                    })
                    }
                >
                    <Text style={presentationStyles.pageMenu}>{item.hour[0]}</Text>
                </TouchableOpacity>
                );
            })}
            </View>

        </View>
      </ImageBackground>
    </View>
  );
};

export default HolyWeekDayScreen;