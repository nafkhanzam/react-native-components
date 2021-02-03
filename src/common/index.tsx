import * as icons from "./icons";
import {Carousel} from "./Carousel";
import {CoverBackground} from "./images/CoverBackground";
import {CoverImage} from "./images/CoverImage";
import {FitImage} from "./images/FitImage";
import {DatePicker} from "./inputs/DatePicker";
import {DateTimePicker} from "./inputs/DateTimePicker";
import {Picker} from "./inputs/Picker";
import {TimePicker} from "./inputs/TimePicker";
import {CenterWrapper} from "./wrappers/CenterWrapper";
import {ScreenWrapper} from "./wrappers/ScreenWrapper";
import BlankSpacer from "react-native-blank-spacer";
import {FetchFlatList} from "./FetchFlatList";

export class EssentialComponents {
  icons = icons;

  Carousel = Carousel;
  CoverBackground = CoverBackground;
  CoverImage = CoverImage;
  FitImage = FitImage;
  DatePicker = DatePicker;
  DateTimePicker = DateTimePicker;
  Picker = Picker;
  TimePicker = TimePicker;
  CenterWrapper = CenterWrapper;
  ScreenWrapper = ScreenWrapper;
  BS = BlankSpacer;

  FetchFlatList = FetchFlatList;
}