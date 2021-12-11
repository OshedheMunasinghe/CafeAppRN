import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { CloseButtonStyles } from "./closeButton.styles";

const { container } = CloseButtonStyles;
const CloseButton = ({ closeButton }) => {
  return (
    <View>
      <TouchableOpacity
        style={container}
        onPress={() => setModalVisible(!closeButton)}
      >
        <Icon name="clear" size={14} color="white" />
      </TouchableOpacity>
    </View>
  );
};
export default CloseButton;
