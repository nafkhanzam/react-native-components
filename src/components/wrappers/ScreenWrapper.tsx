import {useIsFocused} from "@react-navigation/native";
import {Button, Header, Icon, Left, Right, Title, View} from "native-base";
import React, {ReactNode} from "react";
import {StatusBar} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {CompFC} from "../../types";

const FocusAwareStatusBar: React.FC<StatusBar["props"]> = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
};

export const ScreenWrapper: CompFC<{
  statusBarColor?: string;
  header?: {
    onBack: () => void;
    title: string;
    bgColor?: string;
    textColor?: string;
    rightComponent?: ReactNode;
  };
}> = (props) => {
  const {
    header,
    theme: {colors},
  } = props;
  if (header) {
    header.bgColor = header.bgColor || colors.offWhite;
    header.textColor = header.textColor || colors.darkGrey;
  }
  const statusBarColor = props.statusBarColor || header?.bgColor || colors.offWhite;

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.offWhite,
        flex: 1,
      }}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={statusBarColor} translucent />
      <View style={{flex: 1, position: "relative"}}>
        {header && (
          <>
            <Header
              iosBarStyle="dark-content"
              androidStatusBarColor={statusBarColor}
              style={{
                backgroundColor: header.bgColor,
                borderBottomWidth: 0,
                elevation: 0,
              }}>
              <Left style={{flex: 1}}>
                <Button transparent onPress={header.onBack}>
                  <Icon
                    name="arrow-back"
                    type="Ionicons"
                    style={{marginLeft: 8, color: header.textColor, fontSize: 20}}
                  />
                  <Title
                    style={{
                      color: header.textColor,
                      fontSize: 16,
                      fontWeight: "600",
                      paddingLeft: 26,
                    }}>
                    {header.title}
                  </Title>
                </Button>
              </Left>
              {header.rightComponent && <Right>{header.rightComponent}</Right>}
            </Header>
          </>
        )}
        {props.children}
      </View>
    </SafeAreaView>
  );
};
