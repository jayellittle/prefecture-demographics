import React from "react";
import { Prefecture } from "@/types/prefecture";

interface PrefectureCheckboxProps {
  prefecture: Prefecture;
  onSelectChange: (prefCode: number, checked: boolean) => void;
}

const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({
  prefecture,
  onSelectChange
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelectChange(prefecture.prefCode, e.target.checked);
  };

  return (
    <label className="flex items-center px-1.5 py-1">
      <input
        type="checkbox"
        onChange={handleChange}
      />
      {prefecture.prefName}
    </label>
  );
};

export default PrefectureCheckbox;
