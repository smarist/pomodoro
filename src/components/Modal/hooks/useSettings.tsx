import React, { useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../redux/hooks/useTypeSelector";
import { setAppColor, setAppFont } from "../../../redux/actions/settingsAction";

export default function useSettings() {
  const { appColor, appFont } = useAppSelector((state) => state?.settings);
  console.log(appColor);
  // const dispatch: Dispatch<any> = useDispatch()
  const reduxDispatch = useAppDispatch();

  const [colorType, setColorType] = useState(appColor);
  const [fontType, setFontType] = useState(appFont);

  function onClick1() {
    setColorType("#FD6920");
  }

  function onClick2() {
    setColorType("#87CEFA");
  }

  function onClick3() {
    setFontType("#BA55D3");
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
    appColor,
    appFont,
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
