


'use client'

import { Slider } from "@/components/ui/slider";
import { useState } from "react";


export default function SliderPage() {

  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 20]);

  return (
    <div className="grid grid-cols-1 gap-3">
      <p>Slider Value: <strong>{ sliderValue }</strong></p>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={ (value) => setSliderValue(value[0]) }
        max={100}
        step={1}
      />
      <hr className="mt-5" />
      <p>Slider Range Value: <strong>{rangeValue.join(', ')}</strong></p>
      <Slider
        defaultValue={rangeValue}
        onValueChange={setRangeValue}
        max={100}
        step={1}
      />
    </div>
  );
}