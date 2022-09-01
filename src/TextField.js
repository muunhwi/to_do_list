import { forwardRef } from "react";
import { GoCheck } from "react-icons/go";

export const TextField = forwardRef(
  ({ id, type, name, placeholder, require, onChange, value, onKeyUp }, ref) => {
    return (
      <div className="w-full">
        <div>
          <input
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            required={require}
            onChange={onChange}
            onKeyUp={onKeyUp}
            value={value}
            ref={ref}
            className="w-full h-8 rounded"
          />
        </div>
      </div>
    );
  }
);
