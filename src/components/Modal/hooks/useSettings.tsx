import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/useTypeSelector';
import { setAppColor } from '../../../redux/actions/settingsAction';


export default function useSettings() {
    const appColor = useAppSelector((state) => state?.settings?.appColor);
    console.log(appColor);
    // const dispatch: Dispatch<any> = useDispatch()
    const reduxDispatch = useAppDispatch();

  const [colorType, setColorType] = useState(appColor);

  function onClick1() {
    setColorType('#FD6920');
  }

  function onClick2() {
    setColorType('#87CEFA');
  }

  function onClick3() {
    setColorType('#BA55D3');
  }

  function onApply() {
    setAppColor(colorType)(reduxDispatch);
  }
  return {
    appColor,
    colorType,
    onClick1,
    onClick2,
    onClick3,
    onApply
  }
}

