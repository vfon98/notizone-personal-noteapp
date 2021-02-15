import { observable } from "mobx";
import "react-native-get-random-values";
import { v4 } from "uuid";

export class QuickPinClass {
  @observable pinnedList: any = [v4(), v4(), v4()];
}

export const QuickPinStore = new QuickPinClass();
