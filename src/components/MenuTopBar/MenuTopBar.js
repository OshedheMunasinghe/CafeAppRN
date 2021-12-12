import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import BrandmarkLogo from "../BrandmarkLogo/BrandmarkLogo";
import { MenuTopBarStyles } from "./menuTopBar.styles";
import Icon from "react-native-vector-icons/Feather";
import { GlobalStyles } from "../../styles/global.styles";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import OrderedIcon from "../OrderedIcon/orderedIcon";
import { ModalStyles } from "./modal.styles";
import { useNavigation } from "@react-navigation/native";

const { iconContainer, coffeeContainer, backArrowContainer } = MenuTopBarStyles;
const { shadow } = GlobalStyles;
const {
  modalContainer,
  modalBodyContainer,
  modalBody,
  closeButtonContainer,
  youOrderText,
  totalText,
  itemText,
  priceText,
  doneButtonContainer,
} = ModalStyles;


const MenuTopBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (

    <View style={iconContainer}>
      <IconMaterial name="arrow-back-ios" size={30} color="black" style={backArrowContainer}
                    onPress={() => navigation.goBack()} />
      <BrandmarkLogo />

      <Icon name="coffee" size={30} color="black" style={[coffeeContainer, shadow]}
            onPress={() => setModalVisible(true)} />

      {/*  * MODAL */}

      <View style={
        modalContainer
      }>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={modalBodyContainer}>
            <View style={modalBody}>
              {/* * CLOSE BUTTON */}
              <View>
                <TouchableOpacity
                  style={closeButtonContainer}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <IconMaterial name="clear" size={14} color="white" />
                </TouchableOpacity>
              </View>

              <Text style={youOrderText}>Your order</Text>
              <OrderedIcon images={require("../../../assets/images/coffees/brownChino.png")} />
              <OrderedIcon images={require("../../../assets/images/coffees/blueChino.png")} />
              <Text style={totalText}>Total:</Text>
              <Text style={itemText}>2 items</Text>
              <Text style={priceText}>48.99 $</Text>

              <View>
                <TouchableOpacity
                  style={[doneButtonContainer, shadow]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <IconMaterial name="done" size={22} color="#744517"
                                onPress={() => navigation.navigate("ThankYou")} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default MenuTopBar;
