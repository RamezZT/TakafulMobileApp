import { View, Text, Image } from "react-native";
import React from "react";
import donations from "@/assets/images/donation.png";
import dateImage from "@/assets/images/date.png";
import Custombutton from "./Button";
import { useRouter } from "expo-router";
import formatDate from "@/utils/formatDate";

interface props {
  name: string;
  description: string;
  charityName: string;
  charityImage: string;
  numDonations: number;
  date: string;
  image: string;
  id: number;
}
const EventItme = ({
  image,
  name,
  description,
  charityName,
  charityImage,
  numDonations,
  date,
  id,
}: props) => {
  const router = useRouter();
  const handleEvent = () => router.push(`/EventDetails/${id}`);
  return (
    <Custombutton
      buttonStyles="bg-white flex-row rounded-xl h-36 gap-2 item"
      handlePress={handleEvent}
    >
      <View className="w-1/3">
        <Image
          source={{ uri: image }}
          className=" w-full h-full rounded-xl object-cover rounded-tr-none rounded-br-none "
        />
      </View>
      <View className="flex-1  items-center p-2 gap-1 justify-between">
       <View><Text className="font-bold text-2xl text-center">{name}</Text></View> 
        <View><Text className="self-start" numberOfLines={3} ellipsizeMode="tail">
          {description}
        </Text>
        </View>
        <View className="flex-row  items-center w-full justify-between">
          <View className="flex-row items-center">
            <Image
              source={{ uri: charityImage }}
              className="size-6"
              resizeMode="contain"
            />
            <Text className="text-sm text-gray-700">{charityName}</Text>
          </View>
          <View className="flex-row items-center">
            <Image source={donations} className="size-6" resizeMode="contain" />
            <Text className=" text-sm text-gray-700">{numDonations}</Text>
          </View>
          <View className="flex-row items-center">
            <Image source={dateImage} className="size-6" resizeMode="contain" />
            <Text className="text-sm text-gray-700">{formatDate(date)}</Text>
          </View>
        </View>
      </View>
    </Custombutton>
  );
};

export default EventItme;
