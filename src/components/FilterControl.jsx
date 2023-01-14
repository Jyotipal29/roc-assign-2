import React from "react";
import { v4 as uuid } from "uuid";

/**
 * @typedef FilterControlProps
 * @property {(string|{label: string, value: string})[]} options
 * @property {undefined | (e: React.ChangeEvent<HTMLSelectElement>) => void} onChange
 * @property {undefined | string} value
 * @property {undefined|string} label
 * @property {string} id
 */

/**
 *
 * @param {FilterControlProps} props
 * @returns
 */
function FilterControl({ options, onChange, value, label, id = uuid() }) {
  return (
    <div className="container flex gap-3 border-[1px] border-black">
      {label && <label for={id}>{label}:</label>}
      <select id={id} onChange={onChange} value={value}>
        {options.map((item) =>
          typeof item === "string" ? (
            <option>{item}</option>
          ) : (
            <option value={item.value}>{item.label}</option>
          )
        )}
      </select>
    </div>
  );
}

export default FilterControl;
