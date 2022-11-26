import React, { useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../redux/hooks/useTypeSelector";
import { setAppColor, setAppFont } from "../../../redux/actions/settingsAction";

export default function useSettings() {
  const { appColor, appFont, longTime, shortTime, pomodoro } = useAppSelector(
    (state) => state?.settings
  );
  // const dispatch: Dispatch<any> = useDispatch()
  const reduxDispatch = useAppDispatch();

  const [colorType, setColorType] = useState<string>(appColor);
  const [fontType, setFontType] = useState<string>(appFont);

  function onClick1() {
    setColorType("#FF716E");
  }

  function onClick2() {
    setColorType("#87CEFA");
  }

  function onClick3() {
    setColorType("#BA55D3");
  }

  function onFont1() {
    setFontType("san-serif");
  }

  function onFont2() {
    setFontType("cursive");
  }

  function onFont3() {
    setFontType("serif");
  }

  function onApply() {
    setAppColor(colorType)(reduxDispatch);
    setAppFont(fontType)(reduxDispatch);
  }
  return {
    colorType,
    fontType,
    onClick1,
    onClick2,
    onClick3,
    onApply,
    onFont1,
    onFont2,
    onFont3,
  };
}
