import { View, Button } from "react-native-ui-lib";
import { AntDesign } from "@expo/vector-icons";
import { Dispatch } from "react";
import { useTranslation } from "react-i18next";

type FilterButtonProps = {
  isDown: boolean;
  setIsDown: Dispatch<boolean>;
  setIsVisible: Dispatch<boolean>;
  isVisible: boolean;
};

const FilterButton: React.FC<FilterButtonProps> = ({
  isDown,
  setIsDown,
  setIsVisible,
  isVisible,
}) => {
  const { t } = useTranslation();

  return (
    <Button
      backgroundColor={"#080707"}
      label={`${t("Filter")}`}
      color={"#fff"}
      iconOnRight
      iconSource={() => (
        <View className="ml-2">
          {isDown ? (
            <AntDesign name="caretdown" size={12} color="white" />
          ) : (
            <AntDesign name="caretup" size={12} color="white" />
          )}
        </View>
      )}
      onPress={() => {
        setIsDown(!isDown);
        setIsVisible(!isVisible);
      }}
      borderRadius={15}
    ></Button>
  );
};

export default FilterButton;
