import { useState } from "react";
import './Input.scss'
export default function Input (
    {
        className = '',
        fieldName = '',
        fieldType = 'text',
        fieldId = ''
    }
) {
    const [ fieldValue, setFieldValue ] = useState('')
    function onChange({ currentTarget:{ value } }) {
        setFieldValue(value)
    }
    
    const [ labelState, setLabelState ] = useState(true)
    function onFocus() {
        setLabelState(false)
    }

    function onBlur() {
        setLabelState(true)
    }
    

    return (
        <div className={`input__box ${className}`}>
            {
                fieldValue === '' && labelState
                    ? (
                        <label className="mb-0" htmlFor={fieldId}>
                            <span className="fz16">{fieldName}</span>
                            <span className="font-red">*</span>
                        </label>
                    )
                    : null
            }
            
            <input 
                className="form-control" 
                type={fieldType} 
                id={fieldId} 
                value={fieldValue}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
            />
        </div>
    )
} 