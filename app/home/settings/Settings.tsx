import { Text, Pressable, FlatList, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useRouter } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { AntDesign } from "@expo/vector-icons";
import { useAtom } from "jotai";

import { fontSizeAtom } from "~atoms/fontSize";
import { useAuth } from "~context/auth";

export default function Settings() {
  const { signOut } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();

  const [fontSizeData, setFontSizeData] = useAtom(fontSizeAtom);

  const _handlePressButtonAsync = async () => {
    let result = await openBrowserAsync("https://www.cic.hk/chi/");
  };

  const settingsList: { name: string; onPress: () => any }[] = [
    {
      name: `${t("Language")}`,
      onPress: () => {
        router.push("/home/settings/language");
      },
    },

    {
      name: `${t("FontSize")}`,
      onPress: () => {
        router.push("/home/settings/font");
      },
    },
    {
      name: `${t("AboutCIC")}`,
      onPress: _handlePressButtonAsync,
    },
    {
      name: `${t("SignOut")}`,
      onPress: () => signOut(),
    },
  ];
  console.log(fontSizeData);
  return (
    <>
      <FlatList
        className="bg-white"
        data={settingsList}
        ListFooterComponent={
          <View className="opacity-60 justify-between flex-row border-b-2 py-4 mx-2 border-slate-300 ">
            <Text className={`ml-4 text-${fontSizeData + 1}xl`}>{`${t(
              "Build"
            )}`}</Text>
            <Text className={`mr-4 text-${fontSizeData + 1}xl`}>v 1.0.0</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable
            onPress={item.onPress}
            className="justify-between flex-row border-b-2 py-4 mx-2 border-slate-300"
          >
            <Text className={`ml-4 text-${fontSizeData + 1}xl`}>
              {item.name}
            </Text>
            <View className="mr-4">
              <AntDesign name="right" size={24} color="black" />
            </View>
          </Pressable>
        )}
      />
    </>
  );
}
